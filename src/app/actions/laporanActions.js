"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import { CATEGORIES } from "@/lib/constants";
import { randomUUID } from "crypto";

function makeTicketCode() {
  return `TW-${Date.now().toString().slice(-6)}`;
}

export async function getPresignedUrl(fileName) {
  const supabase = await createSupabaseServerClient();

  const fileExt = fileName.split(".").pop();
  const uniquePath = `public/${Date.now()}-${randomUUID()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("laporan-images")
    .createSignedUploadUrl(uniquePath);

  if (error) {
    throw new Error(`Gagal membuat URL upload: ${error.message}`);
  }

  return {
    signedUrl: data.signedUrl,
    filePath: data.path,
  };
}

export async function createLaporan(prevState, formData) {
  const supabase = await createSupabaseServerClient();

  // ✅ Ini sudah benar — akan berfungsi setelah supabaseServer.js diperbaiki
  // createSupabaseServerClient() yang baru sudah bisa baca cookies sesi,
  // sehingga auth.getUser() sekarang akan mengembalikan user yang sedang login
  const { data: { user } } = await supabase.auth.getUser();

  const imageUrl = String(formData.get("before_image_url") || "").trim();
  const reporterName = String(formData.get("reporter_name") || "").trim();
  const categoryKey = String(formData.get("category_key") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const latitude = Number(formData.get("latitude"));
  const longitude = Number(formData.get("longitude"));

  if (!categoryKey || !CATEGORIES[categoryKey]) {
    return { success: false, message: "Kategori laporan belum valid." };
  }

  if (!location || Number.isNaN(latitude) || Number.isNaN(longitude)) {
    return { success: false, message: "Lokasi dan koordinat wajib tersedia." };
  }

  const ticketCode = makeTicketCode();
  const title = `${CATEGORIES[categoryKey].label} di ${location}`;

  const { error } = await supabase.from("Laporan").insert([
    {
      id: randomUUID(),
      ticket_code: ticketCode,
      title,
      category_key: categoryKey,
      description: description || "Tidak ada deskripsi tambahan.",
      location,
      latitude,
      longitude,
      reporter_name: reporterName || "Anonim",
      status: "baru",
      support_count: 0,
      before_image_url: imageUrl || "/foto-dummy-1.jpg",
      user_id: user?.id || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    return {
      success: false,
      message: `Gagal mengirim laporan: ${error.message}`,
    };
  }

  revalidatePath("/lapor");
  revalidatePath("/peta");
  revalidatePath("/admin");

  return {
    success: true,
    ticketCode,
    message: "Laporan berhasil dikirim!",
  };
}

export async function updateReportStatus(prevState, formData) {
  const ticketCode = String(formData.get("ticket_code") || "").trim();
  const status = String(formData.get("status") || "").trim();
  const technicianName = String(formData.get("technician_name") || "").trim();
  const estimatedFinish = String(formData.get("estimated_finish") || "").trim();
  const internalNote = String(formData.get("internal_note") || "").trim();
  const afterImageUrl = String(formData.get("after_image_url") || "").trim();

  if (!ticketCode) {
    return { success: false, message: "Nomor tiket tidak ditemukan." };
  }

  if (!["baru", "proses", "selesai"].includes(status)) {
    return { success: false, message: "Status tidak valid." };
  }

  const payload = {
    status,
    technician_name: technicianName || null,
    estimated_finish: estimatedFinish || null,
    internal_note: internalNote || null,
    updated_at: new Date().toISOString(),
  };

  if (status === "selesai") {
    payload.resolved_at = new Date().toISOString();
    payload.after_image_url = afterImageUrl || "/sesudah-1.jpg";
  }

  const supabase = await createSupabaseServerClient();

  // 1. Update status di tabel Laporan, sekalian ambil id-nya untuk StatusHistory
  const { data: updatedLaporan, error } = await supabase
    .from("Laporan")
    .update(payload)
    .eq("ticket_code", ticketCode)
    .select("id")
    .single();

  if (error) {
    return { success: false, message: `Gagal memperbarui status: ${error.message}` };
  }

  // 2. Catat riwayat perubahan ke StatusHistory
  const { error: historyError } = await supabase
    .from("StatusHistory")
    .insert([{
      id: randomUUID(),
      report_id: updatedLaporan.id,
      status,
      changed_by: technicianName || "Admin",
      note: internalNote || null,
      created_at: new Date().toISOString(),
    }]);

  if (historyError) {
    // Tidak gagalkan seluruh request — cukup log saja
    console.warn("Gagal mencatat StatusHistory:", historyError.message);
  }

  revalidatePath("/peta");
  revalidatePath("/dashboard_user");
  revalidatePath("/dashboard_user/laporan");
  revalidatePath("/admin");
  revalidatePath("/admin/laporan");
  revalidatePath(`/admin/laporan/${ticketCode}`);
  revalidatePath(`/laporan/${ticketCode}`);

  return { success: true, message: "Status laporan berhasil diperbarui." };
}

export async function supportReport(ticketCode) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.rpc("increment_support_count", {
    p_ticket_code: ticketCode,
  });

  if (error) {
    return { success: false, count: 0, message: error.message };
  }

  revalidatePath("/peta");
  revalidatePath(`/laporan/${ticketCode}`);
  revalidatePath("/admin");
  revalidatePath("/admin/laporan");

  return { success: true, count: data, message: "Dukungan berhasil ditambahkan." };
}