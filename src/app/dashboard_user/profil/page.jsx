"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import { supabaseClient } from "@/lib/supabaseClient";

export default function ProfilPage() {
  const { user } = useAuth();
  const userName = user?.name || "Warga";
  const email = user?.email || "warga@email.com";

  const [stats, setStats] = useState({ total: 0, proses: 0, selesai: 0 });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      if (!user?.id) return;

      const { data, error } = await supabaseClient
        .from("Laporan")
        .select("status")
        .eq("user_id", user.id);

      if (!error && data) {
        setStats({
          total: data.length,
          proses: data.filter((r) => r.status === "proses").length,
          selesai: data.filter((r) => r.status === "selesai").length,
        });
      }

      setLoadingStats(false);
    }

    fetchStats();
  }, [user?.id]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sky-50/60 px-5 py-10 lg:py-14">
        <section className="mx-auto max-w-4xl rounded-4xl border border-line bg-white p-7 shadow-card">

          {/* Header Profil */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-sky-100 text-3xl font-extrabold text-sky-700">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">
                Profil Pengguna
              </p>
              <h1 className="mt-1 text-3xl font-extrabold text-navy">
                {userName}
              </h1>
              <p className="mt-1 text-sm text-ink-mute">{email}</p>
            </div>
          </div>

          {/* Statistik Laporan — data asli dari Supabase */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <InfoCard
              label="Total Laporan"
              value={loadingStats ? "..." : stats.total}
            />
            <InfoCard
              label="Sedang Diproses"
              value={loadingStats ? "..." : stats.proses}
            />
            <InfoCard
              label="Selesai"
              value={loadingStats ? "..." : stats.selesai}
            />
          </div>

          {/* Informasi Akun */}
          <div className="mt-8 rounded-3xl border border-line bg-slate-50 p-5">
            <h2 className="text-lg font-extrabold text-navy">
              Informasi Akun
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <Row label="Nama" value={userName} />
              <Row label="Email" value={email} />
              <Row label="Role" value={user?.role || "warga"} />
              <Row label="Status" value="Warga terdaftar" />
            </dl>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-line bg-sky-50 p-5">
      <div className="text-3xl font-extrabold text-navy">{value}</div>
      <div className="mt-1 text-sm font-semibold text-ink-mute">{label}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex gap-4">
      <dt className="w-24 shrink-0 font-semibold text-ink-mute">{label}</dt>
      <dd className="text-navy">{value}</dd>
    </div>
  );
}