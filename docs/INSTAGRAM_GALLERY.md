# Instagram Gallery

Galeri sekarang memakai foto lokal dari folder:

```txt
public/images/instagram/
```

Foto berasal dari `foto.zip` yang diberikan user. Layout galeri mengikuti gaya rev3: dua baris marquee horizontal dengan card lebar.

File data:

```txt
src/data/gallery.ts
```

Komponen tampilan:

```txt
src/components/Gallery.tsx
```

Aturan kurasi:

- Gunakan foto personal/manusia yang relevan untuk branding portfolio.
- Jangan masukkan asset keyboard, thumbnail random, screenshot UI, logo, atau gambar non-manusia ke galeri personal.
- Jika ingin menambah foto, copy file baru ke `public/images/instagram/`, lalu tambahkan item ke `galleryImages`.
