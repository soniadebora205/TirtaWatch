<img width="681" height="403" alt="image" src="https://github.com/user-attachments/assets/9158fc70-4f08-4fef-8e4e-85649938099e" />=====
Final Project VINIX7 : TirtaWatch ⛲

Mentor Lapangan: Bagas Marsya
Anggota Kelompok 14:
1. Taufiq Adjie Sanjaya (Universitas Terbuka)
2. Nura Selvira Hasibuan (Universitas Terbuka)
3. Sonia Debora Napitupulu (Universitas Pancasila
4. Syoba Ismaunun (Universitas Pancasila)

======

Link Deployment: 
Link Figma (High Fidelity, tidak berfokus pada prototyping): 

👩🏻‍💻 Definisi:
TirtaWatch merupakan Sebuah platform crowdsourcing pelaporan masalah air bersih dan sanitasi yang menjembatani masyarakat dengan penyedia layanan (seperti PDAM dan Dinas Lingkungan Hidup). Platform ini bertujuan mempercepat deteksi dan penanganan masalah infrastruktur air, sejalan dengan Sustainable Development Goals (SDGs) ke-6: Clean Water and Sanitation.

👩🏻‍💻 Latar Belakang: 
Ketersediaan air bersih yang merata di Indonesia masih menghadapi tantangan besar, salah satunya adalah tingginya tingkat kebocoran air atau Non-Revenue Water (NRW) yang mencapai 30% hingga 40% di sepanjang jalur distribusi, serta maraknya ancaman pencemaran limbah ilegal. Permasalahan ini diperparah oleh sistem pelaporan konvensional yang cenderung birokratis, lambat, dan tidak akurat dalam mendeteksi lokasi kejadian secara presisi. Ketiadaan mekanisme yang transparan tersebut pada akhirnya terus menurunkan tingkat kepercayaan publik terhadap penanganan infrastruktur air dan sanitasi oleh pihak berwenang.
Berangkat dari kondisi tersebut, TirtaWatch hadir sebagai solusi teknologi yang menyediakan mekanisme pelaporan yang cepat, mudah, dan terstandarisasi guna menjembatani kesenjangan antara laporan warga dengan kemampuan respons instansi terkait. Pengembangan platform ini diimplementasikan menggunakan metodologi Minimum Viable Product (MVP). Pendekatan iteratif ini berfokus pada perilisan fitur-fitur inti lebih awal, sehingga produk dapat segera divalidasi oleh pengguna nyata dan terus dikembangkan berdasarkan umpan balik (feedback) di lapangan.
Pada versi MVP tahap awal ini, platform TirtaWatch telah dilengkapi dengan berbagai fungsionalitas utama untuk mendukung alur pelaporan yang efisien. Fitur-fitur yang dikembangkan mencakup halaman landing page, sistem login dan register, dashboard untuk pengguna setelah masuk, formulir pelaporan masalah yang komprehensif, serta halaman dashboard khusus bagi admin maupun petugas operasional untuk memantau dan mengelola daftar laporan warga.

👩🏻‍💻 Pembagian Tim: 
Secara keseluruhan, semua anggota kelompok 14 terjun ke hampir seluruh proses pengembangan website. Akan tetapi, secara spesifik, pembagian kerja antar tim terbagi menjadi sebagai berikut :
a.	Taufiq Adjie Sanjaya (Ketua Proyek & DevOps): Bertanggung jawab atas manajemen repository di GitHub, audit deployment (CI/CD) pada server Vercel, serta melakukan code review dan code edit sekaligus audit fungsionalitas website secara menyeluruh
b.	Nura Selvira Hasibuan (Full-Stack Developer & UI/UX): Bertanggung jawab merancang wireframe dasar di Figma, mengembangkan halaman Form Pelaporan, halaman-halaman khusus admin, serta mengkonfigurasi skema database menggunakan Supabase
c.	Sonia Debora Napitupulu (Full-Stack Developer & UI/UX): Bertanggung jawab melakukan refinement (penyempurnaan) desain visual dan komposisi layout pada Figma, mengembangkan interface untuk Landing page, Peta Laporan, dan Dashboard user setelah login, sekaligus menyempurnakan alur pemakaian website secara menyeluruh
d.	Syoba Ismaunun (Frontend Developer & UI/UX): Bertanggung jawab mengeksekusi desain wireframe menjadi High-Fidelity (Hi-Fi) secara keseluruhan dengan skema warna yang komprehensif, serta mengembangkan logika dan tampilan halaman autentikasi (Login dan Register)

👩🏻‍💻 Fase Eksekusi:
a.	Minggu ke-1: Fase Perancangan Desain (Design & Prototyping): Tahap awal dimulai dengan Nura dan Sonia yang menyusun layout dasar (low-fidelity) sebagai fondasi struktur website. Desain dasar tersebut kemudian dieksekusi dan disempurnakan oleh Syoba menjadi desain High-Fidelity (Hi-Fi) yang memiliki warna, tipografi, serta melibatkan komponen visual. Namun, perancangan Figma tidak 100% selaras dengan bentuk nyata website sebagaimana hasil dari berbagai pertimbangan anggota terhadap tampilannya.
b.	Minggu Ke 1-2: Fase Inisiasi Proyek (Project Setup): Taufiq melakukan inisialisasi lingkungan kerja dengan membuat repository utama di GitHub untuk menampung baris kode bersama, dan menyambungkannya ke platform Vercel untuk memfasilitasi proses deployment secara otomatis. (UPDATE: Namun, akibat adanya perombakan besar-besaran selama proses pengembangan serta konflik saat penggabungan (merging) kode, repositori, basis data Vercel, dan proses deploy dialihkan ke repositori milik Sonia)
c.	Minggu ke 2-3:  Fase Implementasi (Development): Berdasarkan panduan desain dari Figma, tim mulai melakukan proses coding secara paralel:
1)	Syoba berfokus pada pengembangan sistem autentikasi, meliputi pembuatan halaman Login dan Register.
2)	Nura dan Sonia berkolaborasi merancang interface utama pengguna, yang meliputi pembuatan landing page, Peta Laporan interaktif, fitur Form masukan, Dashboard tertutup bagi pengguna yang telah login, serta area admin dan petugas TirtaWatch.
d.	Minggu ke-3 : Fase Audit dan Rilis (Testing & Deployment): Pada tahap akhir, Taufiq melakukan audit menyeluruh terhadap seluruh komponen UI dan logika kode yang telah digabungkan (merge). Setelah desain dan fungsionalitas dipastikan selaras serta bebas dari bug, website di-deploy ke tahap production melalui Vercel sehingga dapat diakses oleh publik. (UPDATE: Serupa dengan yang terjadi sebelumnya, proses deployment dilakukan oleh Sonia karena repositori terhubung langsung ke akunnya.)

👩🏻‍💻 Perancangan: 


<img width="547" height="931" alt="image" src="https://github.com/user-attachments/assets/e80ad943-811e-458f-956f-a5c1824e1e40" />
Gambar: Flowchart TirtaWatch 
Gambar di atas menunjukkan alur atau flowchart proses pelaporan masalah air bersih dan sanitasi oleh pengguna, yang merujuk kepada pelapor atau masyarakat. Proses utama aplikasi web dimulai ketika pengguna menekan tombol “Laporkan Sekarang” pada hero section (atau dapat diakses juga di bagian navigasi bagian “Form Laporan”). Tahap pertama mengharuskan pengguna mengunggah foto bukti kerusakan yang selanjutnya divalidasi oleh sistem agar sesuai dengan konteks pelaporan. Jikalau pengguna belum menekan tombol lanjut, maka pengguna akan tetap di halaman pengisian formulir tahap pertama. Jika pengguna menekan tombol lanjut (dan foto sudah tervalidasi), pengguna diarahkan untuk melengkapi detail laporan pada formulir tahap kedua (berupa kategori, deskripsi, serta koordinat lokasi yang terkunci melalui GPS perangkat). Apabila tahap tersebut dipastikan sudah lengkap, pengguna dapat melanjutkan ke tahap ketiga untuk meninjau kembali seluruh data sebelum laporan resmi dilaporkan ke sistem dan nantinya akan ter-update di section “Daftar Laporanku” (berada pada halaman dashboard pengguna)


<img width="704" height="447" alt="image" src="https://github.com/user-attachments/assets/71ff7236-b8ce-42ca-b5e5-30690e32f093" />
Gambar : Supabase ERD
Gambar di atas merupakan struktur basis data TirtaWatch yang terdiri atas empat tabel utama yang saling berelasi, yaitu tabel User, tabel Laporan, tabel profiles, dan tabel StatusHistory. Adapun tabel spatial_ref_sys muncul secara otomatis sebagai bagian dari eksistensi PostGIS pada basis data PostgreSQL yang digunakan oleh Supabase. Tabel ini merupakan tabel bawaan yang menyimpan definisi berbagai sistem referensi koordinat geografis.
Tabel Laporan berperan sebagai tabel relasi utama yang menyimpan seluruh informasi terkait laporan masalah air dan sanitasi, mencakup deskripsi kerusakan, koordinat lokasi  (atribut latitude dan longitude), kategori masalah, status penanganan, tautan foto bukti sebelum dan sesudah perbaikan (before_image_url diisi oleh pelapor, sedangkan after_image_url diisi oleh petugas setelah perbaikan), estimasi waktu penyelesaian, hingga jumlah upvote (support_count) dari pengguna lain yang dapat dilakukan di bagian live feed.
Tabel User merepresentasikan pengguna yang telah melakukan register dan login. Tabel Laporan terhubung ke tabel User yang terdaftar, menandakan bahwa pengguna yang masih berstatus guest belum mempunyai kontribusi untuk membuat laporan. Tabel StatusHistory digunakan untuk mencatat riwayat perubahan status suatu laporan secara kronologis, mencakup keterangan perubahan (note), status terbaru, serta pihak yang melakukan perubahan (changed_by), yang terhubung ke tabel Laporan melalui kolom report_id.Sementara itu, tabel profiles digunakan untuk menyimpan data pengguna dengan peran (role) sebagai petugas maupun admin, yang terhubung langsung dengan sistem autentikasi bawaan Supabase (auth.users) melalui kolom id.


👩🏻‍💻 Hasil: 
Secara keseluruhan, website TirtaWatch dirancang dengan antarmuka yang ringkas agar fungsi utamanya sebagai media pelaporan masalah sanitasi air dapat berjalan efektif. Untuk menjaga keamanan data dan mem-partisipasi hak akses, platform ini menerapkan manajemen hak akses yang terbagi menjadi dua:
1.	Hak Akses Guest (Pengunjung Belum Autentikasi): Diberikan akses transparansi maksimal untuk melihat titik laporan di peta, membaca Live Feed, dan membandingkan penyelesaian masalah di before-after. Namun, interaksi seperti mendukung (upvote) dan membuat laporan dibatasi dan akan mengarahkan pengunjung ke halaman login.
2.	Hak Akses User (Pengguna Terautentikasi): Memiliki hak partisipasi penuh dalam komunitas, meliputi pembuatan laporan baru, memberikan dukungan pada laporan warga lain, serta akses eksklusif ke Dashboard pelacakan pribadi.

Di bawah ini merupakan pembahasan final terkait alur penggunaan pada masing-masing halaman utama:
a.	Landing Page: Halaman ini dirancang sebagai media informasional yang memperkenalkan fungsi platform TirtaWatch. Di sini terdapat 3 Card yang menampilkan permasalahan apa yang bisa diatasi oleh TirtaWatch, cara kerja TirtaWatch yang terbagi menjadi 4 langkah pelaporan sederhana, Testimoni (sebagai social proof), dan FAQ untuk menjawab pertanyaan umum bagi calon pengguna. 

 
 <img width="588" height="369" alt="image" src="https://github.com/user-attachments/assets/a482cc96-ae0b-413e-a45a-eb48c42389e3" />
Gambar 1, Landing Page Bagian Hero Section, Button CAT, dan Tiga Card Solusi TirtaWatch


<img width="689" height="409" alt="image" src="https://github.com/user-attachments/assets/49e87c05-3386-4789-9e2c-99ef17ff9bc8" />
Gambar 2, Landing Page Bagian Cara Kerja TirtaWatch dan Testimoni

<img width="710" height="422" alt="image" src="https://github.com/user-attachments/assets/3fb3fdbb-c920-426b-bd79-28a290f7cd94" />
Gambar 3, Landing Page Bagian FAQ dan Footer


b.	Halaman Autentikasi (Login & Register): Menyediakan gerbang keamanan menggunakan latar belakang bertema air untuk menjaga konsistensi visual. Pendaftaran membutuhkan nama, email, dan password. Login menyediakan dua opsi: pengisian manual dengan email dan password terdaftar atau masuk cepat melalui "Lanjut dengan Google", lengkap dengan fitur pemulihan kata sandi. Namun untuk saat ini, dikarenakan keterbatasan Supabase, proses autentikasi dengan Google dinonaktifkan.


<img width="691" height="408" alt="image" src="https://github.com/user-attachments/assets/03196909-3363-4812-b1b1-9e8c493ffea8" />
Gambar 4, Halaman Register/Daftar


<img width="677" height="402" alt="image" src="https://github.com/user-attachments/assets/58e9c2c8-1dc7-4566-8528-52d3e389843e" />
Gambar 5, Halaman Login


c.	Halaman Peta Laporan: Halaman ini bersifat transparan kepada publik yang menampilkan peta interaktif. Di bagian hero, pengguna dapat melihat secara transparan total laporan yang telah diunggah di TirtaWatch, disertai juga dengan total laporan yang sudah diselesaikan, baru dilaporkan, dan sedang dalam proses. Pengguna dapat menggunakan tombol filter kategori untuk menyaring jenis kerusakan, memantau umpan laporan langsung (Live Feed), serta pada bagian bawah terdapat section untuk melihat laporan-laporan yang sudah selesai ditangani, disertai dengan fitur menggeser slider interaktif pada kartu laporan untuk melihat perbandingan fisik (before-after)


 <img width="659" height="391" alt="image" src="https://github.com/user-attachments/assets/8053b324-1391-4970-9cf0-5aaf9c6d2822" />
Gambar 6, Halaman Peta Laporan Bagian Hero Section


 <img width="651" height="385" alt="image" src="https://github.com/user-attachments/assets/5e014fc9-f8e8-4d03-b33f-d077ae875796" />
Gambar 7, Halaman Peta Laporan Bagian Leaflet Map dan Live Feed

 
<img width="583" height="347" alt="image" src="https://github.com/user-attachments/assets/d50d4be6-18f4-4409-9d3b-4dc16636b780" />
Gambar 8, Halaman Peta Laporan Bagian laporan yang Sudah Selesai (before-after)



d.	Halaman Dashboard & Profil: Di sini merupakan ruang kerja personal bagi pengguna yang sudah login. Halaman Profil mengelola informasi dasar akun, sementara Dashboard menyajikan metrik pelacakan pribadi supaya pengguna tahu secara pasti apakah laporannya berstatus baru, sedang diproses, atau selesai ditangani. Di bagian Card juga dapat terlihat teknisi yang bertanggung jawab pada kerusakan, estimasi selesai dan juga terdapat area share ke media sosial.



 <img width="699" height="415" alt="image" src="https://github.com/user-attachments/assets/179c2fb4-fe18-4886-946e-7eb99bb78890" />
Gambar 9, Halaman Profil Pengguna


 <img width="704" height="420" alt="image" src="https://github.com/user-attachments/assets/e6b85d04-45a1-49e4-8de0-ba83b55626e5" />
Gambar 10, Halaman Dashboard Bagian Hero Section


 <img width="742" height="441" alt="image" src="https://github.com/user-attachments/assets/f86248f5-f938-4b2c-aeb1-7d0628607845" />
Gambar 11, Halaman Dashboard Bagian Card Daftar Laporan Pengguna



e.	Halaman Formulir Pelaporan: Halaman ini merupakan ruang bagi pengguna untuk melaporkan permasalahan terkait air dan sanitasi di sekitar mereka. Proses pengisian formulir dirancang bertahap, terbagi menjadi tiga langkah utama. Pada tahap pertama, pengguna mengunggah foto bukti kerusakan. Foto yang diunggah akan dianalisis secara otomatis menggunakan Gemini Flash 2.5 guna memastikan kesesuaian konten dengan konteks pelaporan, sekaligus menyaring laporan yang tidak relevan atau tidak valid. Pada tahap kedua, pengguna melengkapi detail laporan, mencakup nama pelapor, deskripsi kerusakan, serta kategori masalah yang dialami. Tersedia empat kategori yang dapat dipilih, yaitu Pipa Bocor, Air Berwarna/Berbau, Saluran Mampet, dan Limbah Ilegal. Selain itu, sistem secara otomatis meminta izin akses GPS perangkat untuk mengunci koordinat lokasi kejadian secara akurat. Pada tahap ketiga, pengguna dapat meninjau kembali seluruh informasi yang telah diisi sebelum laporan resmi dikirimkan ke sistem.


 <img width="606" height="360" alt="image" src="https://github.com/user-attachments/assets/dfbf6020-c0d2-4427-a58a-e579c84c16d1" />
Gambar 12, Pengisian Form Laporan Tahap Pertama


 <img width="624" height="370" alt="image" src="https://github.com/user-attachments/assets/7b729030-90e7-4cbb-83de-1f407472e1af" />
Gambar 13, Pengisian Form Laporan Tahap Kedua


 <img width="615" height="364" alt="image" src="https://github.com/user-attachments/assets/c005d5b8-6757-4303-83ea-2c9c427b3b6e" />
Gambar 14, Verifikasi Form Laporan


f.	Halaman Dashboard Petugas dan Admin: Halaman ini hanya dapat diakses oleh pengguna dengan email dan kata sandi yang telah terdaftar di sistem. Di dalam dashboard, pengguna dapat memantau statistik laporan terkini serta melihat peta interaktif berbasis Leaflet.js yang menampilkan penanda lokasi di setiap area yang teridentifikasi mengalami permasalahan.

Masuk Admin : 
Email : admin@tirtawatch.com
Password : AdminTirta123!


 <img width="633" height="376" alt="image" src="https://github.com/user-attachments/assets/4e8f2cb0-bd4c-40fe-a2cb-5a2e37a3fc83" />
Gambar 15, Halaman Login Petugas dan Admin


 <img width="658" height="389" alt="image" src="https://github.com/user-attachments/assets/43119876-f0a9-4406-964d-b9b0fbdb5021" />
Gambar 16, Halaman Dashboard Petugas dan Admin, Bagian Statistic Card dan Leaflet Map


 <img width="681" height="404" alt="image" src="https://github.com/user-attachments/assets/321bd384-55c8-4048-ae65-006fd9edcd79" />
Gambar 17, Halaman Dashboard Petugas dan Admin, Bagian Distribusi Kategori dan Daftar Laporan Terbaru



g.	Halaman Daftar Laporan dan Detail Laporan: Halaman ini menampilkan seluruh laporan yang telah dikirimkan oleh pengguna. Selain itu, halaman ini juga berfungsi sebagai pusat pengelolaan status laporan, di mana petugas atau admin dapat memperbarui progres penanganan, mulai dari tahap dalam penanganan hingga selesai. Di sini juga petugas atau admin diwajibkan mengunggah foto sesudah perbaikan sebagai transparansi hasil kepada warga. Nantinya hasil dari pengunggahan foto tersebut akan ter-update di bagian Card laporan pengguna, serta juga masuk ke Peta Laporan bagian laporan yang sudah selesai ditangani (before-after).



 <img width="681" height="403" alt="image" src="https://github.com/user-attachments/assets/cdeb3789-6160-4a76-87e2-598b71cdfddc" />
Gambar 18, Halaman Daftar Laporan


 <img width="769" height="457" alt="image" src="https://github.com/user-attachments/assets/70371860-5423-4bd7-bd27-85f30d26f0b0" />
Gambar 19, Halaman Daftar Laporan Bagian Detail Laporan


👩🏻‍💻 Capaian Pembelajaran:
Selama program berlangsung, terdapat beberapa kompetensi yang dikembangkan oleh kami, di antaranya sebagai berikut:  
1.	Mindset Kewirausahaan Digital & Problem Solving: Menguasai pola pikir startup untuk mengidentifikasi masalah nyata dan mengubahnya menjadi solusi berupa produk berbasis website 
2.	User Experience (UX) Research & Design: Mampu menerapkan 5 tahapan design thinking, melakukan riset pengguna (user persona dan user journey), serta mengeksekusi usability testing untuk mengumpulkan feedback perbaikan 
3.	User Interface (UI) Design & Prototyping: Terampil merancang arsitektur informasi (wireframe dan user flow) hingga mendesain high-fidelity UI dan prototipe interaktif menggunakan tools desain seperti Figma atau Whimsical 
4.	Front-End Web Development: Memahami struktur dasar pembuatan website menggunakan HTML dan CSS, serta pemanfaatan Website Builder (No-Code/Low-Code/AI) seperti Webflow, Wix, atau Framer 
5.	Web Deployment & Pengelolaan Domain: Mampu memublikasikan (hosting) website ke internet dan menghubungkannya dengan domain menggunakan platform seperti GitHub Pages atau Netlify


👩🏻‍💻 Kesimpulan:
Pelaksanaan Magang Studi Independen di PT Vinix Seven Aurum (VINIX7) pada divisi Web Development & UI/UX Design melalui pengerjaan Final Project TirtaWatch telah menghasilkan sebuah platform crowdsourcing berbasis web yang menjembatani masyarakat dengan penyedia layanan air bersih dan sanitasi (PDAM dan Dinas Lingkungan Hidup). Berdasarkan hasil website dan pencapaian, dapat ditarik kesimpulan sebagai berikut:
1.	Sistem informasi berbasis web berhasil dirancang dan diimplementasikan dalam bentuk platform TirtaWatch, dengan fitur Peta Laporan interaktif, Live Feed, dan etalase before-after yang memungkinkan masyarakat melaporkan serta memantau masalah infrastruktur air secara cepat dan tepat sasaran berdasarkan lokasi geotagging.
2.	Sistem autentikasi Login dan Register berhasil diimplementasikan menggunakan NextAuth.js, dengan dua jalur masuk (kredensial dan Google) serta manajemen hak akses yang membedakan pengguna Guest dan pengguna terautentikasi.
3.	Antarmuka pengguna tahap High-Fidelity berhasil dirancang secara informatif dan responsif melalui pendekatan Design Thinking, mulai dari wireframe hingga mockup, yang kemudian diimplementasikan pada seluruh halaman TirtaWatch.
4.	Proses pengembangan sistem dilakukan dengan menerapkan pendekatan Minimum Viable Product (MVP) memanfaatkan stack Next.js, Tailwind CSS, Supabase, NextAuth.js, dan Leaflet.js, sehingga fitur-fitur inti dapat diselesaikan dalam rentang waktu pengerjaan yang terbatas (tiga minggu).
Secara keseluruhan, kegiatan Kerja Praktek ini memberikan pengalaman nyata bagi penulis dalam menerapkan ilmu yang diperoleh selama perkuliahan ke dalam proyek berbasis industri, sekaligus melatih kemampuan kerja sama tim, komunikasi, dan manajemen waktu

👩🏻‍💻 Saran Pengembangan:
1. mengaktifkan kembali fitur Login melalui Google yang saat ini masih dinonaktifkan akibat keterbatasan konfigurasi Supabase;
2.  menambahkan fitur notifikasi real-time bagi pelapor setiap kali status laporannya diperbarui;
3. engintegrasikan data resmi dari PDAM dan Dinas Lingkungan Hidup setempat agar validasi laporan lebih akurat; serta
4. melaksanakan pengujian keamanan (security testing) dan usability yang lebih menyeluruh sebelum sistem diterapkan pada lingkup pengguna yang lebih luas

