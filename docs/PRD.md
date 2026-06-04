# PRD — Redesign Portfolio Muhammad Rizki Akbar

## 1. Ringkasan Produk
Website portfolio pribadi Muhammad Rizki Akbar akan di-redesign dari portfolio statis sederhana menjadi portfolio modern bergaya cinematic, interaktif, dan profesional seperti referensi video: dark theme, animasi halus, project cards premium, dan storytelling yang lebih kuat.

Website tetap menggunakan bahasa Indonesia sebagai bahasa utama.

## 2. Tujuan Utama
1. Meningkatkan kesan profesional dan modern.
2. Mengubah portfolio dari sekadar CV online menjadi personal brand digital.
3. Menampilkan pengalaman kerja, project, skill, dan kontak secara lebih meyakinkan.
4. Membuat tampilan visual mendekati referensi video: dark cinematic, gradient glow, scroll animation, project showcase.
5. Tetap ringan, responsive, dan mudah dideploy.

## 3. Masalah pada Portfolio Saat Ini
Berdasarkan audit awal situs portfolio saat ini:

- Struktur konten sudah ada, tetapi visual masih sederhana.
- Copywriting masih terasa seperti CV lamaran kerja, belum seperti portfolio profesional.
- Project belum diberi konteks masalah, solusi, teknologi, dan hasil.
- Section pengalaman kerja belum dibuat sebagai timeline yang kuat.
- Contact form terlihat belum matang untuk pengalaman pengguna.
- Belum ada hero section yang kuat untuk menjelaskan positioning dalam 5 detik pertama.
- Belum ada sistem visual yang konsisten seperti warna, typography, spacing, cards, dan animasi.

## 4. Target Pengguna
Website ini ditujukan untuk:

1. Recruiter / HRD.
2. Perusahaan yang mencari web developer atau IT staff.
3. Client potensial yang membutuhkan website atau aplikasi sederhana.
4. Relasi profesional yang ingin melihat profil, pengalaman, dan karya.

## 5. Positioning
Versi awal positioning:

> Muhammad Rizki Akbar adalah lulusan Sistem Informasi yang membangun website dan solusi digital dengan pendekatan rapi, terstruktur, dan mudah digunakan.

Versi hero copy:

> Membangun Website Modern yang Rapi, Cepat, dan Mudah Digunakan.

Subheadline:

> Saya membantu membuat pengalaman digital yang sederhana, profesional, dan fungsional — mulai dari website portfolio, website perusahaan, hingga website bisnis.

Catatan:
Positioning final bisa diperkuat lagi jika tersedia data skill, project real, sertifikat, atau spesialisasi yang lebih tajam.

## 6. Ruang Lingkup MVP
MVP adalah satu halaman landing portfolio dengan section berikut:

1. Navbar
2. Hero Cinematic
3. Tentang Saya
4. Pengalaman
5. Projek Pilihan
6. Keahlian / Tools
7. Galeri Foto
8. CTA Kontak
9. Footer

## 7. Fitur Utama

### 7.1 Navbar
- Fixed / sticky navbar.
- Logo / nama singkat.
- Menu anchor link:
  - Beranda
  - Tentang
  - Pengalaman
  - Projek
  - Keahlian
  - Kontak
- Responsive mobile menu.

### 7.2 Hero Cinematic
- Background dark full-screen.
- Gradient glow merah/biru/cyan.
- Judul besar bahasa Indonesia.
- Subtitle singkat.
- CTA:
  - Lihat Projek
  - Hubungi Saya
- Visual kanan: foto portrait / abstract glow / mockup dashboard.
- Animasi teks masuk halus.

### 7.3 Tentang Saya
- Copywriting baru, bukan paragraf CV panjang.
- Menjelaskan latar belakang Sistem Informasi.
- Menonjolkan kerapian kerja, adaptasi teknologi, dan kemampuan membuat website.
- Card ringkas:
  - Pendidikan
  - Fokus
  - Lokasi
  - Minat

### 7.4 Pengalaman
Data awal dari portfolio lama:
- Institut Teknologi Indonesia — Februari 2023 sampai sekarang.
- PT. Kreasi Nostra Mandiri / Sayurbox — Januari 2021 sampai Desember 2022.
- PT. Dom Pizza Indonesia / Domino's Pizza — Februari 2020 sampai April 2020.
- CV. Central Jaya Teknik — Maret 2019 sampai Juni 2019.
- PT. Federal International Finance — Maret 2017 sampai September 2017.

Tampilan:
- Timeline vertical.
- Card gelap dengan border/glow.
- Setiap item menampilkan nama instansi, periode, posisi jika tersedia, dan ringkasan kontribusi.

Catatan:
Posisi/jabatan setiap pengalaman perlu dikonfirmasi agar tidak salah.

### 7.5 Projek Pilihan
Data awal dari portfolio lama:
1. Website Portfolio
2. Website Perusahaan
3. Website Kedai Kopi

Setiap project card berisi:
- Nama project.
- Kategori.
- Deskripsi singkat.
- Teknologi yang dipakai.
- Tombol lihat project.
- Gambar / mockup.

Format copywriting project:
- Masalah: project ini dibuat untuk apa.
- Solusi: fitur utama yang dibuat.
- Stack: HTML/CSS/JS atau stack lain yang benar.

### 7.6 Keahlian / Tools
Contoh awal:
- HTML
- CSS
- JavaScript
- GitHub Pages
- Microsoft Office
- Administrasi digital

Catatan:
Daftar final perlu dikonfirmasi.

### 7.7 Galeri Foto
- Tetap ada section foto, tetapi dibuat lebih premium.
- Bisa berupa horizontal cards / masonry grid ringan.
- Tidak boleh mengganggu fokus utama portfolio.

### 7.8 Kontak
Pilihan implementasi:
1. Instagram direct link.
2. Email mailto.
3. Form statis memakai Formspree / EmailJS.
4. Form dummy tanpa backend tidak disarankan untuk versi live.

CTA utama:
> Punya project atau peluang kerja sama? Mari terhubung.

## 8. Non-Goals MVP
Hal yang tidak dibuat dulu:
- Admin CMS.
- Blog.
- Login/register.
- Database.
- Animasi 3D berat.
- Multi-page case study lengkap.

Fitur ini bisa masuk fase berikutnya setelah MVP live.

## 9. Desain Visual
Arah desain:
- Dark cinematic.
- Background: hitam / navy gelap.
- Accent: cyan, blue, violet, sedikit red/orange glow.
- Typography besar dan tegas.
- Card glassmorphism.
- Border halus.
- Animasi scroll reveal.
- Project cards 2 kolom desktop, 1 kolom mobile.

## 10. Teknologi Rekomendasi
Ada 2 opsi:

### Opsi A — Vite + React + Tailwind + Framer Motion
Cocok jika ingin tetap deploy mudah ke GitHub Pages.

Kelebihan:
- Simpel.
- Cocok untuk portfolio satu halaman.
- Mudah deploy ke GitHub Pages.

Kekurangan:
- SEO tidak sekuat Next.js.
- Routing/case study lanjutan perlu setup manual.

### Opsi B — Next.js + TypeScript + Tailwind + Framer Motion
Cocok jika ingin portfolio premium dan mudah dikembangkan ke case study/blog.

Kelebihan:
- Lebih scalable.
- SEO lebih baik.
- Struktur project lebih profesional.

Kekurangan:
- Deploy paling enak ke Vercel, bukan GitHub Pages.
- Sedikit lebih kompleks.

Rekomendasi MVP:
Jika target tetap `rizkiakbar74.github.io`, gunakan Opsi A.
Jika siap pindah ke Vercel/custom domain, gunakan Opsi B.

## 11. Acceptance Criteria
Website dianggap selesai jika:

1. Semua section tampil rapi di desktop dan mobile.
2. Tidak ada horizontal overflow.
3. Navbar anchor berfungsi.
4. CTA kontak berfungsi.
5. Project card punya deskripsi dan link.
6. Animasi halus, tidak berlebihan.
7. Build berhasil tanpa error.
8. Bisa dideploy.
9. Bahasa seluruh UI adalah Bahasa Indonesia.
10. Tidak ada lorem ipsum.

## 12. Risiko
1. Jika foto/project screenshot tidak tersedia, visual bisa terasa generik.
2. Jika project description kurang kuat, portfolio terlihat seperti template.
3. Jika terlalu banyak animasi, performa mobile bisa turun.
4. Jika form kontak tanpa backend, pengguna bisa mengira pesan terkirim padahal tidak.

## 13. Data yang Masih Dibutuhkan
1. Source code portfolio lama atau izin rebuild dari nol.
2. Foto profil resolusi tinggi.
3. Screenshot setiap project.
4. Link project aktif.
5. CV PDF jika ingin tombol download CV.
6. Email, Instagram, LinkedIn, GitHub, Instagram.
7. Jabatan/detail kontribusi pada setiap pengalaman kerja.
8. Daftar skill teknis yang valid.
9. Pilihan deploy: GitHub Pages / Vercel.
