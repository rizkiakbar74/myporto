# PRD — Portfolio Cinematic Muhammad Rizki Akbar

## 1. Ringkasan
Website ini adalah redesign portfolio Muhammad Rizki Akbar dari portfolio static lama menjadi portfolio modern bergaya cinematic seperti referensi video yang diberikan: dark theme, gradient glow, glassmorphism, animasi scroll, dan project showcase premium.

Bahasa utama website: **Bahasa Indonesia**.

Stack final: **Next.js + TypeScript + Tailwind CSS + Framer Motion**.

Target deploy: **Vercel**.

## 2. Tujuan
1. Membangun personal portfolio yang terlihat profesional, modern, dan kredibel.
2. Menampilkan profil, pengalaman, project, skill, pendidikan, dan kontak secara rapi.
3. Mengubah kesan dari CV online sederhana menjadi personal brand digital.
4. Menonjolkan peran saat ini sebagai **Staff Programmer & IT Operation** di **Pusat Data Sistem Informasi — Institut Teknologi Indonesia**.
5. Memastikan website ringan, responsive, dan mudah dikembangkan.

## 3. Target Pengunjung
- HR/recruiter.
- Relasi profesional.
- Calon client project website.
- Pihak internal/eksternal yang ingin melihat profil dan karya digital.

## 4. Positioning
Muhammad Rizki Akbar adalah lulusan Sistem Informasi yang bekerja di bidang sistem informasi dan operasional IT, dengan fokus pada pengembangan tampilan web, dukungan sistem digital, dan solusi teknologi yang rapi serta mudah digunakan.

## 5. Struktur Halaman
Website dibuat sebagai single-page portfolio dengan section:

1. Navbar sticky.
2. Hero cinematic dengan foto profil.
3. Tentang Saya.
4. Pengalaman kerja timeline.
5. Projek pilihan.
6. Keahlian & tools.
7. Kontak CTA.
8. Footer.

## 6. Data Konten Utama

### Profil
- Nama: Muhammad Rizki Akbar.
- Role: Staff Programmer & IT Operation.
- Instansi: Pusat Data Sistem Informasi — Institut Teknologi Indonesia.
- Lokasi: Bogor, Indonesia.
- Email: muhammadrizkiakbar74@gmail.com.
- Instagram: @rizkiakbar74.
- GitHub: rizkiakbar74.
- LinkedIn: Rizki Akbar.

### Pendidikan
- S1 Sistem Informasi — STMIK Nusa Mandiri Jakarta.
- SMK Multimedia — SMK Taruna Terpadu 1 Bogor.

### Pengalaman
- Institut Teknologi Indonesia — Staff Programmer & IT Operation / PDSI.
- PT Kreasi Nostra Mandiri — Sayurbox.
- PT Dom Pizza Indonesia — Domino's Pizza.
- CV Central Jaya Teknik.
- PT Federal International Finance.

### Project
- Portfolio Cinematic.
- ITI Project Manager.
- Website Perusahaan.
- Website Kedai Kopi.

## 7. Desain Visual
- Background hitam/navy gelap.
- Accent cyan, blue, violet, dan glow halus.
- Card glassmorphism.
- Typography besar dan kontras.
- Animasi fade-up menggunakan Framer Motion.
- Hover lift pada cards.
- Mobile-first responsive.

## 8. Non-goals MVP
- Tidak membuat CMS/admin panel.
- Tidak membuat database.
- Tidak membuat form kontak palsu.
- Tidak menggunakan animasi 3D berat.
- Tidak membuat klaim pencapaian/metrik palsu.

## 9. Acceptance Criteria
- Website berjalan dengan `npm run dev`.
- Production build berjalan dengan `npm run build` setelah dependencies terinstall.
- Tidak ada horizontal overflow di mobile.
- Semua section anchor bekerja.
- Foto profil muncul di hero.
- Kontak Instagram, email, GitHub, LinkedIn bekerja.
- Tombol Download CV mengarah ke PDF CV di folder public.
