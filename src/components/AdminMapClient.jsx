"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-2xl bg-slate-100 animate-pulse flex items-center justify-center">
      <span className="text-sm text-slate-400 font-medium">Memuat peta…</span>
    </div>
  ),
});

export default function AdminMapClient({ reports }) {
  return <LeafletMap reports={reports} />;
}