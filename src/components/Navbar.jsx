// Halaman Navbar yang menampilkan navigasi utama, berbeda untuk user yang sudah login dan belum login
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { IconMenu, IconUser, IconLogout } from "./Icons";
import { useAuth } from "@/lib/auth";

// Yang belum login
const publicLinks = [
  { href: "/", label: "Beranda" },
  { href: "/#cara-kerja", label: "Cara Kerja" },
  { href: "/#faq", label: "FAQ" },
  { href: "/peta", label: "Peta Laporan" },
  { href: "/admin/login", label: "Admin" },
];

// Yang sudah login (user biasa)
const dashboardLinks = [
  { href: "/dashboard_user", label: "Beranda" },
  { href: "/peta", label: "Peta Laporan" },
  { href: "/lapor", label: "Form Laporan" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const links = user ? dashboardLinks : publicLinks;

  const isActive = (href) => {
    const pathWithoutHash = href.split("#")[0];
    if (pathWithoutHash === "/" || pathWithoutHash === "/dashboard_user") {
      return pathname === pathWithoutHash;
    }
    return pathname.startsWith(pathWithoutHash);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setOpen(false);
      setDropdownOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userInitial = user?.name?.charAt(0).toUpperCase() || "W";

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-line">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href={user ? "/dashboard_user" : "/"} className="shrink-0">
          <Logo variant="wide" className="h-10 w-48 object-contain object-left" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 text-sm font-semibold">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-sky-700 hover:text-sky-600 hover:bg-sky-50 transition ${
                isActive(l.href)
                  ? "font-bold bg-sky-50/50 text-sky-600"
                  : "font-semibold"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-sky-50 transition"
                aria-label="Menu profil"
              >
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-extrabold text-sm grid place-items-center shrink-0 ring-2 ring-sky-200">
                  {userInitial}
                </div>
                <span className="hidden sm:inline text-sm font-semibold text-navy">
                  {user.name}
                </span>
                <svg
                  className={`w-3.5 h-3.5 text-ink-mute transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl border border-line shadow-card py-2 z-50">
                  {/* Info user */}
                  <div className="px-4 py-2.5 border-b border-line">
                    <p className="text-sm font-extrabold text-navy truncate">{user.name}</p>
                    <p className="text-xs text-ink-mute truncate">{user.email}</p>
                  </div>

                  {/* Link Profil */}
                  <Link
                    href="/dashboard_user/profil"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-navy hover:bg-sky-50 transition"
                  >
                    <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 grid place-items-center text-xs">
                      <IconUser className="w-5 h-5" />
                    </span>
                    Lihat Profil
                  </Link>

                  {/* Tombol Keluar */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition"
                  >
                    <span className="w-7 h-7 rounded-full bg-red-100 text-red-500 grid place-items-center text-xs">
                      <IconLogout className="w-5 h-5" />
                    </span>
                    Keluar Akun
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden sm:inline-flex px-4 py-2 rounded-xl text-sm font-semibold text-navy hover:bg-slate-100 transition"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="inline-flex px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-glow transition"
              >
                Daftar
              </Link>
            </>
          )}

          {/* Hamburger Mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <IconMenu className="w-[22px] h-[22px] text-navy-deep" />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-line bg-white px-5 py-4 space-y-2 text-sm font-semibold shadow-lg">
          <div className="space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sky-700 hover:text-sky-600 hover:bg-sky-50 transition ${
                  isActive(l.href)
                    ? "font-bold bg-sky-50 text-sky-600"
                    : "font-semibold"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="h-px bg-line my-2" />
        </div>
      )}
    </header>
  );
}