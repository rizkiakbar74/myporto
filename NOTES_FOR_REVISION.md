# Revision Notes Rev5

Perubahan utama:

1. Tombol dan data kontak Instagram menggantikan WhatsApp.
2. Hero section dibuat lebih cinematic dengan Framer Motion:
   - scroll-driven frame progress
   - film strip frame
   - moving scan light
   - rotating orbit
   - parallax image cutout
   - Instagram floating badge
3. Galeri dikembalikan ke gaya marquee seperti versi sebelumnya, tetapi hanya memakai foto personal/manusia.
4. Asset keyboard, thumbnail random, dan gambar non-manusia tidak dimasukkan ke galeri.
5. Galeri disiapkan agar mudah diganti dengan foto Instagram asli lewat `src/data/gallery.ts`.

Catatan penting:

- Foto Instagram asli belum otomatis diambil karena build tidak punya file media Instagram lokal.
- Kalau ingin galeri 100% dari Instagram, download/upload foto yang dipilih lalu masukkan ke `public/images/instagram/`.
