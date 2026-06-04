# ASSET_AUDIT.md

## Sumber yang dipakai

Repo lama: `https://github.com/rizkiakbar74/rizkiakbar74.github.io`

Asset dan link lama tidak dibuang. Pada revisi ini, asset lama dimasukkan sebagai remote image dari `raw.githubusercontent.com` agar seluruh foto/gambar dari repo lama tetap bisa tampil tanpa harus menebak ulang manual.

## Asset dari repo lama

### Profil
- `img/Foto M Rizki akbar.jpg`

### Experience / company images
- `img/projects/1.png`
- `img/projects/2.png`
- `img/projects/3.png`
- `img/projects/4.png`
- `img/projects/5.png`

### Gallery keyboard
- `img/gallery/keyboard/1.png`
- `img/gallery/keyboard/2.png`
- `img/gallery/keyboard/23.png`
- `img/gallery/keyboard/3.png`
- `img/gallery/keyboard/300.png`
- `img/gallery/keyboard/323.png`

### Gallery thumbnail
- `img/gallery/thumbnail/1.png`
- `img/gallery/thumbnail/10.png`
- `img/gallery/thumbnail/2.png`
- `img/gallery/thumbnail/3.png`
- `img/gallery/thumbnail/4.png`
- `img/gallery/thumbnail/5.png`
- `img/gallery/thumbnail/6.png`
- `img/gallery/thumbnail/7.png`
- `img/gallery/thumbnail/8.png`
- `img/gallery/thumbnail/9.png`

## Link lama yang dipertahankan

- Portfolio lama: `https://rizkiakbar74.github.io/`
- ITI: `https://iti.ac.id`
- Sayurbox: `https://www.sayurbox.com`
- Domino's: `https://pizza-restoran.dominos.co.id`
- CV Central Jaya Teknik: `https://serviceacdibsd.id`
- FIF Group: `https://fifgroup.co.id`
- LinkedIn: `https://www.linkedin.com/in/rizki-akbar-88876019b/`
- GitHub: `https://github.com/rizkiakbar74`

## Implementasi teknis

Asset dipusatkan di:

```txt
src/data/assets.ts
src/data/gallery.ts
```

`next.config.ts` sudah mengizinkan domain:

```txt
raw.githubusercontent.com
```

## Catatan risiko

Karena asset lama dimuat dari GitHub raw URL, website membutuhkan akses internet untuk menampilkan asset tersebut. Jika ingin semua asset 100% lokal, download seluruh file dari repo lama lalu pindahkan ke `public/images/legacy/` dan ganti URL di `src/data/assets.ts`.

## Revision 4 Asset Filtering

Galeri personal sekarang hanya menggunakan asset yang jelas relevan dengan identitas personal Rizki:

- `public/images/rizki-profile.png` — foto profil terbaru dari user.
- `img/Foto M Rizki akbar.jpg` dari repo lama — foto profil lama.

Asset seperti keyboard, thumbnail, dan gambar non-manusia tidak lagi ditampilkan di galeri karena menurunkan kesan personal/profesional. Asset tersebut dapat tetap dipakai sebagai dekorasi atau konteks project bila dibutuhkan, tetapi tidak masuk ke section Galeri Profil.
