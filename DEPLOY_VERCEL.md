# Panduan Deploy ke Vercel

## 1. Upload ke GitHub

```bash
git init
git add .
git commit -m "Initial portfolio cinematic"
git branch -M main
git remote add origin https://github.com/rizkiakbar74/rizki-portfolio-next.git
git push -u origin main
```

## 2. Import ke Vercel

1. Buka Vercel.
2. Klik **Add New Project**.
3. Pilih repository portfolio.
4. Framework akan otomatis terbaca sebagai **Next.js**.
5. Klik **Deploy**.

## 3. Build Settings

Default Vercel:

```txt
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

## 4. Setelah Deploy

Cek:

- Homepage terbuka.
- Foto profil muncul.
- Semua anchor navbar berjalan.
- Tombol Instagram bekerja.
- Tombol Email bekerja.
- Tombol Download CV bekerja.
- Tampilan mobile tidak overflow.

## 5. Custom Domain Opsional

Jika punya domain sendiri, sambungkan dari menu **Settings → Domains** di Vercel.
