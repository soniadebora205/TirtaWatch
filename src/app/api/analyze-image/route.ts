import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const maxDuration = 60;


const MODEL_FALLBACKS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
];

const PROMPT =
  "You are a strict image validator for a water infrastructure reporting app. " +
  "Does this image CLEARLY show one of these specific problems: " +
  "burst/leaking water pipes, severely clogged drainage causing flooding, " +
  "visibly contaminated water flowing from pipes or drains, " +
  "or illegal chemical/industrial waste dumping into water sources? " +
  "Do NOT answer YES for: general outdoor scenes, food, people, animals, " +
  "regular trash, or anything not directly related to water infrastructure damage. " +
  "Answer ONLY with YES or NO, nothing else.";

async function tryAnalyzeWithModel(
  genAI: GoogleGenerativeAI,
  modelName: string,
  imageBase64: string
): Promise<string> {
  const model = genAI.getGenerativeModel({ model: modelName });
  const result = await model.generateContent([
    PROMPT,
    { inlineData: { data: imageBase64, mimeType: "image/jpeg" } },
  ]);
  return result.response.text().trim().toUpperCase();
}

export async function POST(req: Request) {
  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return NextResponse.json(
        { isValid: false, message: "Gambar tidak ditemukan." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY belum dipasang di .env.local");
      return NextResponse.json(
        { isValid: false, message: "Konfigurasi server AI belum lengkap." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);


    for (const modelName of MODEL_FALLBACKS) {
      try {
        console.log(`[AI] Mencoba model: ${modelName}`);
        const responseText = await tryAnalyzeWithModel(genAI, modelName, imageBase64);
        console.log(`[AI] Respons dari ${modelName}:`, responseText);

        if (responseText === "YES") {
          return NextResponse.json({ isValid: true, aiVerified: true });
        } else {
          return NextResponse.json(
            {
              isValid: false,
              message:
                "Foto ditolak. AI tidak mendeteksi adanya kerusakan infrastruktur air atau masalah sanitasi pada foto tersebut.",
            },
            { status: 400 }
          );
        }
      } catch (err: any) {
        const status = err?.status ?? err?.statusCode;

        if ([503, 429, 500, 502, 404].includes(status)) {
          console.warn(
            `[AI] Model ${modelName} tidak tersedia (${status}), mencoba fallback berikutnya...`
          );
          continue; 
        }
        throw err;
      }
    }

    console.warn("[AI] Semua model Gemini tidak tersedia. Foto diloloskan tanpa verifikasi AI.");
    return NextResponse.json({
      isValid: true,
      aiVerified: false,
      message:
        "Server AI sedang sibuk. Foto diterima dan akan diverifikasi manual oleh admin.",
    });
  } catch (error: any) {
    console.error("[AI] Kesalahan tidak terduga:", error);
    return NextResponse.json(
      {
        isValid: false,
        message: "Terjadi kesalahan tak terduga pada sistem AI.",
      },
      { status: 500 }
    );
  }
}