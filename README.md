# Portfolio Muhammad Rizki Akbar

Portfolio cinematic menggunakan **Next.js + TypeScript + Tailwind CSS + Framer Motion**.

Website ini dibuat sebagai redesign dari portfolio lama agar tampil lebih modern, profesional, dan siap deploy di Vercel.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Struktur Project

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
    SectionReveal.tsx
    SectionHeader.tsx
  data/
    profile.ts
    experience.ts
    education.ts
    projects.ts
    skills.ts
public/
  images/
    rizki-profile.png
    projects/
  documents/
    CV-Muhammad-Rizki-Akbar.pdf
```

## Cara Jalankan Local

```bash
npm install
npm run dev
```

Buka:

```txt
http://localhost:3000
```

## Build Production

```bash
npm run build
npm run start
```

## Ubah Data Konten

Mayoritas konten bisa diubah dari folder:

```txt
src/data/
```

File penting:

- `profile.ts` untuk nama, kontak, headline, dan bio.
- `experience.ts` untuk timeline pengalaman kerja.
- `projects.ts` untuk project cards.
- `skills.ts` untuk keahlian dan tools.
- `education.ts` untuk pendidikan.

## Asset

Foto hero:

```txt
public/images/rizki-profile.png
```

CV:

```txt
public/documents/CV-Muhammad-Rizki-Akbar.pdf
```

Kalau CV terbaru sudah ada, ganti file PDF tersebut dengan nama yang sama agar tombol Download CV tetap bekerja.

## Catatan

UI website menggunakan Bahasa Indonesia. Tidak ada form kontak palsu; kontak diarahkan langsung ke Instagram, email, GitHub, dan LinkedIn.

## Revisi Asset GitHub + Framer Motion

Versi ini sudah memakai ulang link dan foto dari repo lama `rizkiakbar74.github.io`:

- Foto profil lama dari folder `img/`
- Gambar pengalaman dari `img/projects/`
- Asset keyboard dari `img/gallery/keyboard/`
- Thumbnail dari `img/gallery/thumbnail/`
- Link perusahaan lama dari portfolio sebelumnya

Efek Framer Motion yang ditambahkan:

- Cinematic background bergerak mengikuti scroll
- Hero text reveal + glitch layer
- Magnetic button
- Scan line pada foto profil
- Tilt hover project cards
- Timeline scroll progress
- Gallery marquee dua arah
- Scroll reveal per section
