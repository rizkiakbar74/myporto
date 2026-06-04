# Revision Notes Rev9

## Fokus revisi
Menambahkan intro/preloader full-screen sebelum halaman utama portfolio, sesuai referensi Sarim Abdelbari.

## Perubahan utama

1. **IntroLoader sebelum homepage**
   - File baru: `src/components/IntroLoader.tsx`
   - Tampil full-screen saat website pertama dibuka.
   - Mengetik teks: `welcome to my portfolio`.
   - Setelah selesai, intro fade out dan masuk ke halaman utama.
   - Ada orbit ring, particle, glow background, progress line, dan blinking cursor.

2. **PortfolioShell sebagai pengatur alur intro**
   - File baru: `src/components/PortfolioShell.tsx`
   - Mengatur state intro selesai atau belum.
   - Mengunci scroll body selama intro berjalan.
   - Memberi efek fade/blur saat halaman utama muncul.

3. **Hero utama dirapikan setelah intro**
   - File: `src/components/Hero.tsx`
   - Teks typewriter di kiri tidak lagi `welcome to my portfolio`, karena teks itu sekarang menjadi intro.
   - Typewriter kiri sekarang berisi role yang lebih relevan:
     - Staff Programmer & IT Operation
     - Web Developer
     - Pengembang Sistem Informasi
     - UI & Frontend Enthusiast
   - Typewriter terminal di frame gambar kanan tetap dipertahankan.

4. **Page entry disederhanakan**
   - File: `src/app/page.tsx`
   - Sekarang memanggil `PortfolioShell`.

## Cara test

```bash
npm install
npm run dev
```

Buka:

```txt
http://localhost:3000
```

Alur yang harus terlihat:

```txt
Intro screen muncul → welcome to my portfolio diketik → intro fade out → hero utama tampil
```
