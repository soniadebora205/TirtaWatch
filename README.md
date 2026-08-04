# TirtaWatch ⛲

**Final Project — VINIX7 (PT Vinix Seven Aurum)**
Divisi Web Development & UI/UX Design

---

## 👥 Tim Pengembang — Kelompok 14

| Nama | Asal Universitas |
|---|---|
| Taufiq Adjie Sanjaya | Universitas Terbuka |
| Nura Selvira Hasibuan | Universitas Terbuka |
| Sonia Debora Napitupulu | Universitas Pancasila |
| Syoba Ismaunun | Universitas Pancasila |

**Mentor Lapangan:** Bagas Marsya

---

## 🔗 Tautan

| Link | Status |
|---|---|
| Live Deployment | *(belum diisi)* |
| Figma (High-Fidelity, tidak berfokus pada prototyping) | *(belum diisi)* |

---

## 📖 Definisi

TirtaWatch merupakan sebuah platform *crowdsourcing* pelaporan masalah air bersih dan sanitasi yang menjembatani masyarakat dengan penyedia layanan (seperti PDAM dan Dinas Lingkungan Hidup). Platform ini bertujuan mempercepat deteksi dan penanganan masalah infrastruktur air, sejalan dengan *Sustainable Development Goals* (SDGs) ke-6: *Clean Water and Sanitation*.

---

## 🎯 Latar Belakang

Ketersediaan air bersih yang merata di Indonesia masih menghadapi tantangan besar, salah satunya tingginya tingkat kebocoran air atau *Non-Revenue Water* (NRW) yang mencapai 30–40% di sepanjang jalur distribusi, serta maraknya ancaman pencemaran limbah ilegal. Permasalahan ini diperparah oleh sistem pelaporan konvensional yang cenderung birokratis, lambat, dan tidak akurat dalam mendeteksi lokasi kejadian secara presisi. Ketiadaan mekanisme yang transparan ini terus menurunkan tingkat kepercayaan publik terhadap penanganan infrastruktur air dan sanitasi oleh pihak berwenang.

Berangkat dari kondisi tersebut, TirtaWatch hadir sebagai solusi teknologi yang menyediakan mekanisme pelaporan cepat, mudah, dan terstandarisasi guna menjembatani kesenjangan antara laporan warga dengan kemampuan respons instansi terkait. Pengembangan platform ini diimplementasikan menggunakan metodologi *Minimum Viable Product* (MVP) — pendekatan iteratif yang berfokus pada perilisan fitur-fitur inti lebih awal, sehingga produk dapat segera divalidasi oleh pengguna nyata dan terus dikembangkan berdasarkan umpan balik (*feedback*) di lapangan.

Pada versi MVP tahap awal ini, TirtaWatch dilengkapi dengan fungsionalitas utama berikut:
- Landing page
- Sistem login dan register
- Dashboard pengguna
- Formulir pelaporan masalah yang komprehensif
- Dashboard khusus admin/petugas operasional untuk memantau dan mengelola laporan warga

---

## 🛠️ Pembagian Tim

Secara keseluruhan, semua anggota kelompok 14 terjun ke hampir seluruh proses pengembangan website. Namun, secara spesifik, pembagian kerja terbagi sebagai berikut:

| Anggota | Peran | Tanggung Jawab |
|---|---|---|
| **Taufiq Adjie Sanjaya** | Ketua Proyek & DevOps | Manajemen repository GitHub, audit deployment (CI/CD) di Vercel, code review, code edit, dan audit fungsionalitas website secara menyeluruh |
| **Nura Selvira Hasibuan** | Full-Stack Developer & UI/UX | Merancang wireframe dasar di Figma, mengembangkan halaman Form Pelaporan dan halaman admin, mengonfigurasi skema database di Supabase |
| **Sonia Debora Napitupulu** | Full-Stack Developer & UI/UX | Refinement desain visual & komposisi layout di Figma, mengembangkan interface Landing Page, Peta Laporan, dan Dashboard user setelah login, serta menyempurnakan alur penggunaan website secara menyeluruh |
| **Syoba Ismaunun** | Frontend Developer & UI/UX | Mengeksekusi wireframe menjadi desain High-Fidelity dengan skema warna komprehensif, mengembangkan logika dan tampilan halaman autentikasi (Login & Register) |

---

## 📅 Fase Eksekusi

**Minggu ke-1 — Perancangan Desain (Design & Prototyping)**
Nura dan Sonia menyusun layout dasar (*low-fidelity*) sebagai fondasi struktur website. Desain dasar tersebut kemudian dieksekusi dan disempurnakan oleh Syoba menjadi desain *High-Fidelity* (Hi-Fi) lengkap dengan warna, tipografi, dan komponen visual. Perancangan di Figma tidak 100% selaras dengan bentuk akhir website, mengikuti berbagai pertimbangan tim selama proses pengembangan.

**Minggu ke-1–2 — Inisiasi Proyek (Project Setup)**
Taufiq menginisialisasi lingkungan kerja dengan membuat repository utama di GitHub dan menyambungkannya ke Vercel untuk deployment otomatis.
> **Update:** Akibat perombakan besar selama pengembangan serta konflik saat *merging* kode, repository, basis data, dan proses deploy dialihkan ke repository milik Sonia.

**Minggu ke-2–3 — Implementasi (Development)**
Berdasarkan panduan desain dari Figma, tim melakukan proses coding secara paralel:
- Syoba berfokus pada sistem autentikasi (halaman Login dan Register)
- Nura dan Sonia berkolaborasi merancang interface utama pengguna: landing page, Peta Laporan interaktif, Form pelaporan, Dashboard pengguna, serta area admin/petugas

**Minggu ke-3 — Audit dan Rilis (Testing & Deployment)**
Taufiq melakukan audit menyeluruh terhadap seluruh komponen UI dan logika kode yang telah digabungkan. Setelah desain dan fungsionalitas dipastikan selaras dan bebas bug, website di-deploy ke tahap production melalui Vercel agar dapat diakses publik.
> **Update:** Serupa dengan sebelumnya, proses deployment dilakukan oleh Sonia karena repository terhubung langsung ke akunnya.

---

## 🧩 Perancangan

**Flowchart TirtaWatch**

<img width="547" height="931" alt="Flowchart TirtaWatch" src="https://github.com/user-attachments/assets/e80ad943-811e-458f-956f-a5c1824e1e40" />

Flowchart di atas menunjukkan alur pelaporan masalah air bersih dan sanitasi oleh pengguna. Proses dimulai ketika pengguna menekan tombol "Laporkan Sekarang" pada hero section (atau melalui navigasi "Form Laporan"). Tahap pertama: unggah foto bukti kerusakan yang divalidasi sistem. Jika belum lanjut, pengguna tetap di formulir tahap pertama. Setelah foto tervalidasi dan tombol lanjut ditekan, pengguna melengkapi detail laporan pada formulir tahap kedua (kategori, deskripsi, koordinat lokasi via GPS). Tahap ketiga: tinjauan ulang seluruh data sebelum laporan resmi dikirim ke sistem dan muncul di "Daftar Laporanku" pada dashboard pengguna.

**Supabase ERD**

<img width="704" height="447" alt="Supabase ERD" src="https://github.com/user-attachments/assets/71ff7236-b8ce-42ca-b5e5-30690e32f093" />

Struktur basis data TirtaWatch terdiri atas empat tabel utama yang saling berelasi: `User`, `Laporan`, `profiles`, dan `StatusHistory`. Tabel `spatial_ref_sys` muncul otomatis sebagai bagian dari ekstensi PostGIS pada PostgreSQL yang digunakan Supabase, menyimpan definisi sistem referensi koordinat geografis.

- **Tabel Laporan** — tabel relasi utama yang menyimpan deskripsi kerusakan, koordinat lokasi (`latitude`, `longitude`), kategori masalah, status penanganan, tautan foto bukti sebelum/sesudah perbaikan (`before_image_url` diisi pelapor, `after_image_url` diisi petugas), estimasi waktu penyelesaian, dan jumlah *upvote* (`support_count`).
- **Tabel User** — merepresentasikan pengguna yang telah register dan login. Tabel Laporan terhubung ke tabel User; pengguna berstatus *guest* belum dapat membuat laporan.
- **Tabel StatusHistory** — mencatat riwayat perubahan status laporan secara kronologis (`note`, status terbaru, `changed_by`), terhubung ke tabel Laporan melalui `report_id`.
- **Tabel profiles** — menyimpan data pengguna dengan peran (*role*) sebagai petugas maupun admin, terhubung dengan sistem autentikasi bawaan Supabase (`auth.users`) melalui kolom `id`.

---

## ✅ Hasil

Website TirtaWatch dirancang dengan antarmuka ringkas agar fungsi utamanya sebagai media pelaporan masalah sanitasi air berjalan efektif. Untuk menjaga keamanan data dan membatasi hak akses, platform menerapkan dua tingkat akses:

1. **Guest (belum autentikasi):** akses transparansi maksimal — melihat titik laporan di peta, membaca Live Feed, membandingkan before-after. Interaksi seperti *upvote* dan membuat laporan diarahkan ke halaman login.
2. **User (terautentikasi):** hak partisipasi penuh — membuat laporan baru, memberi dukungan pada laporan warga lain, akses eksklusif ke Dashboard pelacakan pribadi.

### a. Landing Page
Media informasional yang memperkenalkan fungsi platform: 3 card permasalahan yang diatasi TirtaWatch, cara kerja (4 langkah pelaporan sederhana), testimoni (*social proof*), dan FAQ.

<img width="588" height="369" alt="Landing Page - Hero Section" src="https://github.com/user-attachments/assets/a482cc96-ae0b-413e-a45a-eb48c42389e3" />
<img width="689" height="409" alt="Landing Page - Cara Kerja & Testimoni" src="https://github.com/user-attachments/assets/49e87c05-3386-4789-9e2c-99ef17ff9bc8" />
<img width="710" height="422" alt="Landing Page - FAQ & Footer" src="https://github.com/user-attachments/assets/3fb3fdbb-c920-426b-bd79-28a290f7cd94" />

### b. Halaman Autentikasi (Login & Register)
Gerbang keamanan dengan latar bertema air untuk konsistensi visual. Register membutuhkan nama, email, dan password. Login menyediakan pengisian manual atau opsi "Lanjut dengan Google", lengkap dengan fitur pemulihan kata sandi.

> ⚠️ **Catatan:** Autentikasi via Google saat ini dinonaktifkan karena keterbatasan konfigurasi Supabase — mohon disinkronkan dengan bagian Kesimpulan & Saran Pengembangan di bawah, karena teks asli menyebutkan status yang berbeda-beda di tiap bagian.

<img width="691" height="408" alt="Halaman Register" src="https://github.com/user-attachments/assets/03196909-3363-4812-b1b1-9e8c493ffea8" />
<img width="677" height="402" alt="Halaman Login" src="https://github.com/user-attachments/assets/58e9c2c8-1dc7-4566-8528-52d3e389843e" />

### c. Halaman Peta Laporan
Bersifat transparan ke publik: peta interaktif, total laporan (selesai/baru/diproses), filter kategori, Live Feed, serta slider before-after untuk laporan yang sudah ditangani.

<img width="659" height="391" alt="Peta Laporan - Hero Section" src="https://github.com/user-attachments/assets/8053b324-1391-4970-9cf0-5aaf9c6d2822" />
<img width="651" height="385" alt="Peta Laporan - Leaflet Map & Live Feed" src="https://github.com/user-attachments/assets/5e014fc9-f8e8-4d03-b33f-d077ae875796" />
<img width="583" height="347" alt="Peta Laporan - Before After" src="https://github.com/user-attachments/assets/d50d4be6-18f4-4409-9d3b-4dc16636b780" />

### d. Halaman Dashboard & Profil
Ruang kerja personal bagi pengguna yang sudah login. Halaman Profil mengelola informasi akun; Dashboard menyajikan metrik pelacakan pribadi (status baru/diproses/selesai), teknisi penanggung jawab, estimasi selesai, dan opsi share ke media sosial.

<img width="699" height="415" alt="Halaman Profil" src="https://github.com/user-attachments/assets/179c2fb4-fe18-4886-946e-7eb99bb78890" />
<img width="704" height="420" alt="Dashboard - Hero Section" src="https://github.com/user-attachments/assets/e6b85d04-45a1-49e4-8de0-ba83b55626e5" />
<img width="742" height="441" alt="Dashboard - Daftar Laporan" src="https://github.com/user-attachments/assets/f86248f5-f938-4b2c-aeb1-7d0628607845" />

### e. Halaman Formulir Pelaporan
Pengisian bertahap dalam tiga langkah. Tahap 1: unggah foto bukti, dianalisis otomatis menggunakan Gemini Flash 2.5 untuk memastikan kesesuaian konten. Tahap 2: detail laporan (nama pelapor, deskripsi, kategori — Pipa Bocor / Air Berwarna-Berbau / Saluran Mampet / Limbah Ilegal) serta penguncian koordinat via GPS. Tahap 3: tinjauan akhir sebelum laporan dikirim.

<img width="606" height="360" alt="Form Laporan - Tahap 1" src="https://github.com/user-attachments/assets/dfbf6020-c0d2-4427-a58a-e579c84c16d1" />
<img width="624" height="370" alt="Form Laporan - Tahap 2" src="https://github.com/user-attachments/assets/7b729030-90e7-4cbb-83de-1f407472e1af" />
<img width="615" height="364" alt="Form Laporan - Verifikasi" src="https://github.com/user-attachments/assets/c005d5b8-6757-4303-83ea-2c9c427b3b6e" />

### f. Halaman Dashboard Petugas dan Admin
Hanya dapat diakses pengguna dengan email dan kata sandi terdaftar. Menyajikan statistik laporan terkini serta peta interaktif berbasis Leaflet.js dengan penanda lokasi di setiap area bermasalah.

**Akun Demo:**
```
Email    : admin@tirtawatch.com
Password : AdminTirta123!
```
> 🔒 Disarankan mengganti/menonaktifkan kredensial demo ini sebelum repository di-publish secara luas.

<img width="633" height="376" alt="Login Petugas & Admin" src="https://github.com/user-attachments/assets/4e8f2cb0-bd4c-40fe-a2cb-5a2e37a3fc83" />
<img width="658" height="389" alt="Dashboard Petugas & Admin - Statistik & Peta" src="https://github.com/user-attachments/assets/43119876-f0a9-4406-964d-b9b0fbdb5021" />
<img width="681" height="404" alt="Dashboard Petugas & Admin - Distribusi Kategori" src="https://github.com/user-attachments/assets/321bd384-55c8-4048-ae65-006fd9edcd79" />

### g. Halaman Daftar Laporan dan Detail Laporan
Menampilkan seluruh laporan pengguna dan berfungsi sebagai pusat pengelolaan status laporan. Petugas/admin memperbarui progres penanganan dan wajib mengunggah foto sesudah perbaikan sebagai bentuk transparansi — hasil unggahan otomatis muncul di Card laporan pengguna serta di Peta Laporan bagian before-after.

<img width="681" height="403" alt="Daftar Laporan" src="https://github.com/user-attachments/assets/cdeb3789-6160-4a76-87e2-598b71cdfddc" />
<img width="769" height="457" alt="Detail Laporan" src="https://github.com/user-attachments/assets/70371860-5423-4bd7-bd27-85f30d26f0b0" />

---

## 📚 Capaian Pembelajaran

1. **Mindset Kewirausahaan Digital & Problem Solving** — mengidentifikasi masalah nyata dan mengubahnya menjadi solusi berbasis website.
2. **User Experience (UX) Research & Design** — menerapkan 5 tahapan design thinking, riset pengguna (persona & user journey), serta usability testing.
3. **User Interface (UI) Design & Prototyping** — merancang arsitektur informasi (wireframe & user flow) hingga high-fidelity UI dan prototipe interaktif (Figma/Whimsical).
4. **Front-End Web Development** — struktur dasar HTML & CSS, serta pemanfaatan Website Builder (No-Code/Low-Code/AI) seperti Webflow, Wix, atau Framer.
5. **Web Deployment & Pengelolaan Domain** — hosting website dan menghubungkannya dengan domain menggunakan GitHub Pages atau Netlify.

---

## 🧾 Kesimpulan

Pelaksanaan Magang Studi Independen di PT Vinix Seven Aurum (VINIX7) pada divisi Web Development & UI/UX Design melalui pengerjaan Final Project TirtaWatch menghasilkan platform *crowdsourcing* berbasis web yang menjembatani masyarakat dengan penyedia layanan air bersih dan sanitasi (PDAM dan Dinas Lingkungan Hidup). Kesimpulan yang dapat ditarik:

1. Sistem informasi berbasis web berhasil dirancang dan diimplementasikan dalam bentuk platform TirtaWatch, dengan fitur Peta Laporan interaktif, Live Feed, dan etalase before-after yang memungkinkan masyarakat melaporkan serta memantau masalah infrastruktur air secara cepat dan tepat sasaran berdasarkan lokasi *geotagging*.
2. Sistem autentikasi Login dan Register berhasil diimplementasikan menggunakan NextAuth.js, dengan dua jalur masuk (kredensial dan Google) serta manajemen hak akses yang membedakan pengguna Guest dan pengguna terautentikasi.
3. Antarmuka pengguna tahap High-Fidelity berhasil dirancang secara informatif dan responsif melalui pendekatan Design Thinking, mulai dari wireframe hingga mockup, yang kemudian diimplementasikan pada seluruh halaman TirtaWatch.
4. Proses pengembangan sistem dilakukan dengan menerapkan pendekatan Minimum Viable Product (MVP), memanfaatkan stack Next.js, Tailwind CSS, Supabase, NextAuth.js, dan Leaflet.js, sehingga fitur-fitur inti dapat diselesaikan dalam rentang waktu pengerjaan yang terbatas (tiga minggu).

Secara keseluruhan, kegiatan Kerja Praktek ini memberikan pengalaman nyata dalam menerapkan ilmu yang diperoleh selama perkuliahan ke dalam proyek berbasis industri, sekaligus melatih kemampuan kerja sama tim, komunikasi, dan manajemen waktu.

---

## 🔧 Saran Pengembangan

1. Mengaktifkan kembali fitur Login melalui Google yang saat ini masih dinonaktifkan akibat keterbatasan konfigurasi Supabase.
2. Menambahkan fitur notifikasi *real-time* bagi pelapor setiap kali status laporannya diperbarui.
3. Mengintegrasikan data resmi dari PDAM dan Dinas Lingkungan Hidup setempat agar validasi laporan lebih akurat.
4. Melaksanakan pengujian keamanan (*security testing*) dan *usability* yang lebih menyeluruh sebelum sistem diterapkan pada lingkup pengguna yang lebih luas.
