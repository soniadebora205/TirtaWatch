import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const maxDuration = 60;

// Fallback chain: coba dari model terbaru ke yang paling stabil
const MODEL_FALLBACKS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
];

const PROMPT =
  "Is there a problem with water infrastructure, leaking pipes, flood, clogged drains, dirty or contaminated water, illegal waste dumping, or trash in this image? Answer ONLY with YES or NO.";

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

    // Coba satu per satu model dari fallback chain
    for (const modelName of MODEL_FALLBACKS) {
      try {
        console.log(`[AI] Mencoba model: ${modelName}`);
        const responseText = await tryAnalyzeWithModel(genAI, modelName, imageBase64);
        console.log(`[AI] Respons dari ${modelName}:`, responseText);

        // Model berhasil menjawab — gunakan hasilnya (blokir atau loloskan)
        if (responseText.includes("YES")) {
          return NextResponse.json({ isValid: true, aiVerified: true });
        } else {
          return NextResponse.json(
            {
              isValid: false,
              message:
                "Foto ditolak. AI tidak mendeteksi adanya kerusakan infrastruktur air atau sanitasi pada foto tersebut.",
            },
            { status: 400 }
          );
        }
      } catch (err: any) {
        const status = err?.status ?? err?.statusCode;

        // Hanya lanjut ke fallback jika error-nya dari SISI SERVER Google
        // (503 = overload, 429 = rate limit, 500/502 = server error)
        // Jika error lain (misal: API key salah), langsung stop
        if ([503, 429, 500, 502, 404].includes(status)) {
          console.warn(
            `[AI] Model ${modelName} tidak tersedia (${status}), mencoba fallback berikutnya...`
          );
          continue; // lanjut ke model berikutnya
        }

        // Error tak terduga — lempar ke catch di bawah
        throw err;
      }
    }

    // Semua model gagal karena server Google overload — BUKAN karena gambarnya salah
    // Loloskan dengan flag aiVerified: false agar admin bisa review manual
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