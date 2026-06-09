"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { updateReportStatus, getPresignedUrl } from "@/app/actions/laporanActions";
import { IconChevron, IconCamera } from "@/components/Icons";

const initialState = {
  success: false,
  message: "",
};

export default function AdminStatusForm({ report }) {
  const [state, formAction] = useFormState(updateReportStatus, initialState);
  const [statusVal, setStatusVal] = useState(report.status || "baru");
  
  // State untuk foto After Image
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCustomSubmit = async (formData) => {
    // Jika status "selesai", kita wajibkan upload gambar bukti
    if (statusVal === "selesai") {
      if (!imageFile && !report.afterImage) {
        alert("Mohon unggah foto bukti perbaikan!");
        return;
      }

      if (imageFile) {
        setIsUploading(true);
        try {
          const { signedUrl, filePath } = await getPresignedUrl(imageFile.name);
          const uploadRes = await fetch(signedUrl, {
            method: "PUT",
            body: imageFile,
            headers: { "Content-Type": imageFile.type },
          });

          if (!uploadRes.ok) throw new Error("Gagal mengunggah foto bukti.");

          const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
          const publicUrl = `${supabaseUrl}/storage/v1/object/public/laporan-images/${filePath}`;
          
          // Selipkan URL foto ke form data yang akan dikirim ke database
          formData.set("after_image_url", publicUrl);
        } catch (error) {
          alert("Gagal upload foto: " + error.message);
          setIsUploading(false);
          return;
        }
      }
    }
    
    // Kirim data ke server action
    formAction(formData);
    setIsUploading(false);
  };

  return (
    <form action={handleCustomSubmit} className="mt-6 rounded-4xl bg-white border border-line shadow-card p-6">
      <input type="hidden" name="ticket_code" value={report.id} />

      <h2 className="text-lg font-extrabold text-navy">
        Ubah Status Penanganan
      </h2>

      <div className="mt-5 grid md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="text-[13px] font-bold text-navy">
            Status Baru
          </label>

          <div className="mt-1.5 relative">
            <select
              name="status"
              value={statusVal}
              onChange={(e) => setStatusVal(e.target.value)}
              className="w-full appearance-none rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="baru">Menunggu Konfirmasi</option>
              <option value="proses">Sedang Ditangani</option>
              <option value="selesai">Selesai</option>
            </select>

            <IconChevron className="w-[18px] h-[18px] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-mute" />
          </div>
        </div>

        <div>
          <label className="text-[13px] font-bold text-navy">Nama Teknisi</label>
          <input
            name="technician_name"
            defaultValue={report.technicianName === "-" ? "" : report.technicianName}
            placeholder="Contoh: Surpiadi"
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="text-[13px] font-bold text-navy">Estimasi Selesai</label>
          <input
            name="estimated_finish"
            defaultValue={report.estimatedFinish === "-" ? "" : report.estimatedFinish}
            placeholder="Contoh: 1-2 hari kerja"
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>
      </div>

      {/* TAMPILKAN INPUT FOTO HANYA JIKA STATUS SELESAI */}
      {statusVal === "selesai" && (
        <div className="mt-5 p-4 rounded-2xl bg-sky-50 border border-sky-100">
          <label className="text-[13px] font-bold text-navy block mb-2">
            Unggah Foto Bukti Perbaikan (Wajib)
          </label>
          <label className="block cursor-pointer">
            <div className={`relative overflow-hidden min-h-[140px] rounded-xl border-2 border-dashed border-sky-300 bg-white hover:bg-sky-50 transition grid place-items-center text-center p-4`}>
              {imagePreview || report.afterImage ? (
                <img
                  src={imagePreview || report.afterImage}
                  alt="Preview Bukti"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  <IconCamera className="w-8 h-8 text-sky-400" />
                  <div className="mt-2 text-sm font-bold text-navy">Pilih Foto</div>
                </>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      )}

      <div className="mt-4">
        <label className="text-[13px] font-bold text-navy">Catatan Internal</label>
        <textarea
          name="internal_note"
          rows={2}
          defaultValue={report.internalNote}
          placeholder="Catatan untuk tim, tidak terlihat warga…"
          className="mt-1.5 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-400 resize-none"
        />
      </div>

      {state.message && (
        <div className={`mt-4 rounded-xl px-4 py-3 text-sm ${state.success ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isUploading}
        className="mt-5 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:bg-slate-400 text-white font-semibold py-3 px-6 shadow-glow transition"
      >
        {isUploading ? "Mengunggah Foto..." : "Simpan Perubahan"}
      </button>
    </form>
  );
}