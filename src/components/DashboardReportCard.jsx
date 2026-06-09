// Untuk Card di dashboard page user

import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/lib/constants";
import {IconCamera, IconUser, IconCalendar, IconWhatsApp, IconInstagram, IconTikTok, IconMoreHorizontal} from "@/components/Icons";

function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return (
    date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }) + " WIB"
  );
}

function generateTimeline(report) {
  const status = (report.status || "baru").toLowerCase();
  const isProses = status === "proses" || status === "selesai";
  const isSelesai = status === "selesai";

  return [
    {
      id: 1,
      title: "Dilaporkan oleh Anda",
      time: formatDate(report.created_at),
      dotColor: status === "baru" ? "bg-[#22c55e]" : "bg-[#0ea5e9]",
      opacity: "opacity-100",
    },
    {
      id: 2,
      title: "Diverifikasi oleh Sistem",
      time: isProses ? formatDate(report.updated_at) : "Menunggu verifikasi...",
      dotColor:
        status === "proses"
          ? "bg-[#22c55e]"
          : isSelesai
            ? "bg-[#0ea5e9]"
            : "bg-slate-300",
      opacity: isProses ? "opacity-100" : "opacity-50",
    },
    {
      id: 3,
      title: "Petugas Menuju Lokasi",
      time: isProses ? "Sedang ditangani" : "-",
      dotColor:
        status === "proses"
          ? "bg-[#22c55e]"
          : isSelesai
            ? "bg-[#0ea5e9]"
            : "bg-slate-300",
      opacity: isProses ? "opacity-100" : "opacity-50",
    },
    {
      id: 4,
      title: "Selesai Diperbaiki",
      time: isSelesai
        ? formatDate(report.resolved_at || report.updated_at)
        : "-",
      dotColor: isSelesai ? "bg-[#22c55e]" : "bg-slate-300",
      opacity: isSelesai ? "opacity-100" : "opacity-50",
    },
  ];
}

export default function DashboardReportCard({ report }) {
  const timelineSteps = generateTimeline(report);

  return (
    <div className="bg-[#f0f8ff] rounded-3xl p-7 flex flex-col lg:flex-row gap-8 mb-6 border border-sky-100 shadow-sm transition hover:shadow-md">
      
      {/* ================= BAGIAN KIRI: INFO & TIMELINE ================= */}
      <div className="flex-1">
        {/* Badge Kategori */}
        {(() => {
          const categoryKey = report.category_key || report.category;
          const color = CATEGORIES[categoryKey]?.color || "#EF4444";
          const label = CATEGORIES[categoryKey]?.label || report.categoryLabel || "Laporan";

          return (
            <div
              className="inline-block px-3 py-1 text-[11px] font-bold rounded-full mb-3 tracking-wider"
              style={{
                color: color,
                backgroundColor: `${color}18`,
                border: `1px solid ${color}35`,
              }}
            >
              {label}
            </div>
          );
        })()}

        {/* Judul & Alamat */}
        <h3 className="text-xl font-extrabold text-[#1a2b4c] leading-tight">
          {report.title}
        </h3>
        <p className="text-sm text-slate-500 mt-2 mb-8 pr-4">
          {report.location}
        </p>

        {/* Vertical Timeline */}
        <div className="relative pl-3 border-l-2 border-slate-300 space-y-8">
          {timelineSteps.map((step) => (
            <div key={step.id} className={`relative ${step.opacity}`}>
              <div
                className={`absolute -left-[21px] top-1 w-5 h-5 rounded-full border-4 border-[#f0f8ff] ${step.dotColor}`}
              />
              <div className="pl-6">
                <h4 className="text-[15px] font-bold text-[#1a2b4c]">
                  {step.title}
                </h4>
                <p className="text-[13px] text-slate-500 mt-1">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BAGIAN KANAN: FOTO & TEKNISI ================= */}
      <div className="w-full lg:w-[400px] flex flex-col gap-4">
        
        {/* Seksi Foto Bukti */}
        <div>
          <h4 className="text-[15px] font-bold text-[#1a2b4c] mb-3">Foto Bukti</h4>
          <div className="grid grid-cols-2 gap-3">

            {/* Foto Before*/}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] text-slate-400 font-medium">Sebelum</span>
              <div className="bg-gray-200 rounded-2xl aspect-square w-full relative overflow-hidden">
                <Image
                  src={report.before_image_url || "/foto-dummy-1.jpg"}
                  alt="Bukti Sebelum"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Foto After*/}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] text-slate-400 font-medium">Sesudah</span>
              {report.after_image_url ? (
                // ✅ Ada foto → tampilkan seperti biasa
                <div className="bg-gray-200 rounded-2xl aspect-square w-full relative overflow-hidden">
                  <Image
                    src={report.after_image_url}
                    alt="Bukti Sesudah"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                // ⏳ Belum ada foto → placeholder
                <div className="border-2 border-dashed border-slate-200 bg-slate-50 rounded-2xl aspect-square w-full flex flex-col items-center justify-center gap-2 text-slate-300">
                  <IconCamera className="w-8 h-8" />
                  <span className="text-[10px] font-semibold text-center px-3 leading-snug">
                    Menunggu foto teknisi
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Seksi Info Teknisi */}
        <div className="mt-2">
          <h4 className="text-[14px] font-medium text-slate-500 mb-3">
            Info Penanggungjawab Teknisi
          </h4>

          <div className="grid grid-cols-2 gap-3">
            {/* Info Nama & Estimasi (Kiri) */}
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-sky-100 flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                  <IconUser className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-[#1a2b4c] line-clamp-1">
                  {report.technician_name || "Belum ditugaskan"}
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-sm">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <IconCalendar className="w-4 h-4" />
                  Estimasi
                </div>
                <div className="text-[12px] font-semibold text-[#1a2b4c] mt-1 leading-snug">
                  {report.estimated_finish
                    ? formatDate(report.estimated_finish)
                    : "-"}
                </div>
              </div>
            </div>

            {/* Aksi Share & Dukungan (Kanan) */}
            <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[12px] text-slate-400 mb-2 block">Bagikan</span>
                <div className="flex gap-2">
            
                  {/* WhatsApp — beneran bisa diklik untuk share! */}
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Lihat laporan ini di TirtaWatch: ${typeof window !== "undefined" ? window.location.origin : ""}/laporan/${report.ticket_code || report.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366]/20 transition"
                    title="Bagikan ke WhatsApp"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                  </a>
            
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center hover:bg-[#E1306C]/20 transition"
                    title="Bagikan ke Instagram"
                  >
                    <IconInstagram className="w-4 h-4" />
                  </a>
            
                  {/* TikTok */}
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition"
                    title="Bagikan ke TikTok"
                  >
                    <IconTikTok className="w-4 h-4" />
                  </a>
            
                  {/* More */}
                  <button
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition"
                    title="Lainnya"
                  >
                    <IconMoreHorizontal className="w-4 h-4" />
                  </button>
            
                </div>
              </div>
            
              {/* Badge Dukungan */}
              <div className="mt-4 inline-block bg-[#fef3c7] text-[#b45309] text-[11px] font-bold px-3 py-1.5 rounded-lg text-center">
                {report.support_count || 0} warga mendukung
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}