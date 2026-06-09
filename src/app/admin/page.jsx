import Link from "next/link";
import AdminShell from "@/components/AdminShell";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import {
  getReports,
  getReportStats,
  getCategoryStats,
} from "@/lib/reports";
import { CATEGORIES } from "@/lib/constants";
import { IconClock, IconCheck } from "@/components/Icons";

import AdminMapClient from "@/components/AdminMapClient";

export const metadata = {
  title: "Dashboard — TirtaWatch Admin",
};

const CATEGORY_COLORS = {
  pipa_bocor:      { bar: "bg-red-400",    text: "text-red-500"    },
  saluran_mampet:  { bar: "bg-amber-400",  text: "text-amber-500"  },
  air_berwarna:    { bar: "bg-sky-400",    text: "text-sky-600"    },
  limbah_ilegal:   { bar: "bg-emerald-400",text: "text-emerald-600"},
};

export default async function AdminDashboardPage() {
  const reports      = await getReports({ limit: 5 });
  const allReports   = await getReports();          // untuk peta
  const stats        = await getReportStats();
  const categoryStats = await getCategoryStats();

  const mapReports = allReports.map((r) => ({
    id:           r.id,
    lat:          r.lat,
    lng:          r.lng,
    category:     r.category,
    status:       r.status,
    title:        r.title,
    location:     r.location,
    reporter:     r.reporter,
    supportCount: r.supportCount,
  }));

  return (
    <AdminShell
      title="Dashboard Instansi"
      subtitle="Pantau laporan warga, prioritas lokasi, dan progres penanganan."
    >
      {/* stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          value={stats.total}
          label="Total Laporan"
          tone="sky"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
          }
        />
        <StatCard
          value={stats.baru}
          label="Menunggu"
          tone="warn"
          icon={<IconClock className="w-[22px] h-[22px]" />}
        />
        <StatCard
          value={stats.proses}
          label="Ditangani"
          tone="sky"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a4 4 0 0 0-5.6 0l-1 1 1.4 1.4 1-1a2 2 0 0 1 2.8 2.8l-1 1 1.4 1.4 1-1a4 4 0 0 0 0-5.6Z" />
              <path d="M6.3 14.7l1-1 1.4 1.4-1 1a2 2 0 0 0 2.8 2.8l1-1 1.4 1.4-1 1a4 4 0 0 1-5.6-5.6Z" />
            </svg>
          }
        />
        <StatCard
          value={stats.selesai}
          label="Selesai"
          tone="ok"
          icon={<IconCheck className="w-[22px] h-[22px]" />}
        />
      </div>

      {/* ── Peta full width ── */}
      <div className="mt-6 rounded-3xl bg-white border border-line shadow-card overflow-hidden">
        {/* Header peta */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 grid place-items-center text-sky-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-navy leading-tight">
                Peta Sebaran Laporan
              </h2>
              <p className="text-xs text-ink-mute mt-0.5">
                {stats.total} laporan aktif · klik marker untuk detail
              </p>
            </div>
          </div>

          {/* Legend status */}
          <div className="hidden sm:flex items-center gap-4 text-xs text-ink-mute">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
              Baru
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              Proses
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              Selesai
            </span>
            <Link
              href="/peta"
              className="ml-2 font-semibold text-sky-700 hover:underline"
            >
              Peta publik →
            </Link>
          </div>
        </div>

        {/* Map container — tinggi penuh */}
        <div className="h-[440px] w-full">
          <AdminMapClient reports={mapReports} />
        </div>
      </div>

      {/* ── Laporan dan Distribusi Kategori ── */}
      <div className="mt-6 grid lg:grid-cols-3 gap-6">

        {/* Laporan Terbaru */}
        <div className="lg:col-span-2 rounded-3xl bg-white border border-line shadow-card p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-extrabold text-navy">Laporan Terbaru</h2>
            <Link
              href="/admin/laporan"
              className="text-sm font-semibold text-sky-700 hover:underline"
            >
              Lihat semua →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold text-ink-mute border-b border-line">
                  <th className="pb-3 pr-4">Tiket</th>
                  <th className="pb-3 pr-4">Kategori</th>
                  <th className="pb-3 pr-4">Lokasi</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 pr-4 font-semibold text-navy">
                      <Link
                        href={`/admin/laporan/${report.id}`}
                        className="hover:underline"
                      >
                        {report.id}
                      </Link>
                    </td>
                    <td className="py-3.5 pr-4 text-ink-soft">{report.categoryLabel}</td>
                    <td className="py-3.5 pr-4 text-ink-mute max-w-[180px] truncate">
                      {report.location}
                    </td>
                    <td className="py-3.5">
                      <StatusBadge status={report.status} />
                    </td>
                  </tr>
                ))}
                {reports.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-10 text-center text-ink-mute">
                      Belum ada laporan masuk.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Distribusi Kategori */}
        <div className="rounded-3xl bg-white border border-line shadow-card p-6">
          <h3 className="text-lg font-extrabold text-navy mb-5">
            Distribusi Kategori
          </h3>

          <div className="space-y-5">
            {categoryStats.map((item) => {
              const colors = CATEGORY_COLORS[item.key] || { bar: "bg-slate-400", text: "text-slate-500" };
              return (
                <div key={item.key}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-sm font-semibold text-navy">
                      {CATEGORIES[item.key]?.label}
                    </span>
                    <span className={`text-sm font-bold ${colors.text}`}>
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colors.bar} transition-all duration-700`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <p className="text-xs text-ink-mute mt-1">
                    {item.count} laporan
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick summary */}
          <div className="mt-6 pt-5 border-t border-line grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-3 text-center">
              <div className="text-2xl font-extrabold text-amber-600">{stats.baru}</div>
              <div className="text-xs text-amber-500 font-medium mt-0.5">Perlu Aksi</div>
            </div>
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-3 text-center">
              <div className="text-2xl font-extrabold text-emerald-600">{stats.selesai}</div>
              <div className="text-xs text-emerald-500 font-medium mt-0.5">Diselesaikan</div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}