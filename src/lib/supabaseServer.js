// ✅ FIX ROOT CAUSE: Ganti createClient → createServerClient dari @supabase/ssr
// Masalah sebelumnya: createClient biasa dengan persistSession: false tidak bisa
// membaca cookies sesi login user, sehingga auth.getUser() di server actions
// selalu mengembalikan null → user_id tersimpan null di database.
//
// Paket @supabase/ssr sudah terinstall (sudah dipakai di supabaseClient.js),
// jadi tidak perlu install paket baru.

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL belum diisi di .env.local");
  }

  if (!supabaseKey) {
    throw new Error(
      "SUPABASE_ANON_KEY atau NEXT_PUBLIC_SUPABASE_ANON_KEY belum diisi di .env.local"
    );
  }

  if (!supabaseUrl.startsWith("https://")) {
    throw new Error(
      "Format NEXT_PUBLIC_SUPABASE_URL salah. Contoh yang benar: https://xxxx.supabase.co"
    );
  }

  // ✅ Next.js 15: cookies() sekarang async, wajib di-await
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Dipanggil dari Server Component — boleh diabaikan
          // selama ada middleware yang me-refresh sesi pengguna
        }
      },
    },
  });
}