// StatusBadge — pil status warna-warni.
import { statusMeta } from "@/lib/data";

const styles = {
  danger: "bg-danger-bg text-danger-text",
  sky: "bg-sky-100 text-sky-700",
  ok: "bg-ok-bg text-ok-text",
  warn: "bg-warn-bg text-warn-text",
};

export default function StatusBadge({ status, size = "sm" }) {
  const cleanStatus = (status || "baru").toLowerCase();

  const meta = statusMeta[cleanStatus] || 
               statusMeta[status] || 
               statusMeta.baru || 
               { label: status, badge: "sky", dot: "#0ea5e9" };

  const pad = size === "lg" ? "px-4 py-2 text-sm" : "px-3 py-1.5 text-xs";
  
  return (
    <span className={`inline-flex items-center gap-2 rounded-full font-semibold ${pad} ${styles[meta.badge] || styles.sky}`}>
      <span className="w-2 h-2 rounded-full" style={{ background: meta.dot || "#0ea5e9" }} />
      {meta.label}
    </span>
  );
}

