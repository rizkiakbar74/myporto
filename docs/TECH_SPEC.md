# TECH_SPEC — Spesifikasi Teknis Portfolio

## 1. Rekomendasi Stack

### Opsi Rekomendasi untuk GitHub Pages
- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Alasan:
- Cocok untuk portfolio satu halaman.
- Mudah deploy ke GitHub Pages.
- Bisa menghasilkan efek visual seperti referensi video.
- Lebih sederhana daripada Next.js untuk hosting GitHub Pages.

### Opsi Premium untuk Vercel
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Alasan:
- Lebih scalable.
- Lebih cocok jika nanti dibuat multi-page, blog, atau case study.
- Deploy mudah ke Vercel.

## 2. Struktur Folder Rekomendasi — Vite React

```txt
src/
  assets/
    images/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    Skills.tsx
    Gallery.tsx
    Contact.tsx
    Footer.tsx
    SectionReveal.tsx
  data/
    experience.ts
    projects.ts
    skills.ts
  App.tsx
  main.tsx
  index.css
```

## 3. Library

```bash
npm install framer-motion lucide-react
```

## 4. Animasi
Gunakan Framer Motion untuk:
- Section reveal.
- Card hover.
- Hero text entrance.
- Floating glow.

Jangan gunakan animasi berat dulu seperti Three.js kecuali sudah ada alasan jelas.

## 5. Routing
MVP tidak perlu routing.
Semua section berada di satu halaman menggunakan anchor link.

## 6. Contact Form
Rekomendasi:
- Instagram link untuk MVP.
- Email mailto.
- Jika butuh form beneran: Formspree / EmailJS.

Jangan membuat form dummy yang menampilkan pesan sukses palsu.

## 7. Performance
Target:
- Lighthouse Performance minimal 85+.
- Image dioptimasi.
- Tidak ada video background besar untuk MVP.
- Animasi tidak mengganggu scroll mobile.

## 8. Deployment GitHub Pages
Jika pakai Vite:

1. Set `base` di `vite.config.ts` jika repo bukan root.
2. Install gh-pages:

```bash
npm install gh-pages --save-dev
```

3. Tambahkan script:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:

```bash
npm run deploy
```

## 9. Acceptance Test
Sebelum deploy:

```bash
npm run lint
npm run build
```

Cek manual:
- Desktop 1920px
- Laptop 1366px
- Tablet
- Mobile 390px
- Tidak ada horizontal scroll
- Semua link bekerja
- CTA kontak bekerja
