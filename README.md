# Afa Portfolio

Website portofolio personal dengan konsep scrapbook / cork board / retro collage.
Dibuat murni dengan HTML5, CSS3, dan JavaScript (tanpa framework/library eksternal, kecuali Google Fonts).

## Struktur Folder

```
portfolio/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/     (kosong — lihat catatan gambar di bawah)
│   └── icons/      (kosong — semua ikon sosial media memakai inline SVG)
└── README.md
```

## Cara menjalankan

Tidak perlu instalasi atau build tool apa pun. Cukup buka `index.html` langsung di browser,
atau jalankan lewat live server (mis. ekstensi "Live Server" di VS Code) untuk pengalaman terbaik.

## Gambar placeholder yang perlu diganti

Saat ini semua foto/thumbnail masih berupa kotak placeholder bertuliskan nama filenya
(dibuat dengan CSS, bukan file gambar sungguhan), supaya website tetap bisa langsung dijalankan
tanpa aset tambahan. Ganti dengan foto asli di lokasi berikut:

| Placeholder di halaman        | Ganti dengan file                     |
|--------------------------------|----------------------------------------|
| Foto profil di section About  | `assets/images/profile.jpg`            |
| Project 01 – Website Portfolio | `assets/images/project1.jpg`          |
| Project 02 – Food Order App    | `assets/images/project2.jpg`          |
| Project 03 – Brand Identity Kit| `assets/images/project3.jpg`          |
| Project 04 – Mini Platformer   | `assets/images/project4.jpg`          |
| Project 05 – School Landing    | `assets/images/project5.jpg`          |
| Project 06 – Sticker Pack      | `assets/images/project6.jpg`          |
| Foto kecil di hero (polaroid)  | opsional, bisa dijadikan gambar juga  |

Setelah menyimpan gambar ke `assets/images/`, buka `index.html`, cari elemen
`<div class="polaroid-img polaroid-img--placeholder">...</div>` yang sesuai, lalu ganti
dengan `<img src="assets/images/nama-file.jpg" alt="...">`.

## Fitur yang sudah berfungsi

- Loading screen dengan progress bar animasi
- Navbar sticky dengan efek scroll + hamburger menu di mobile + smooth scroll
- Hero/dashboard bergaya cork board dengan elemen dekoratif melayang (sticky note, tape, pin, badge)
- Section About, Skills (progress bar teranimasi via Intersection Observer), Projects (dengan filter kategori)
- Kartu proyek bergaya polaroid dengan rotasi acak dan efek hover
- Form kontak dengan validasi JavaScript (nama, email, subject, pesan) + notifikasi toast sukses
- Tombol back-to-top yang muncul setelah scroll
- Scroll reveal animation (fade + slide up saat elemen masuk viewport)
- Fully responsive: desktop, tablet, dan mobile (termasuk 480px, 390px, 375px)

## Kustomisasi warna

Semua warna diatur lewat CSS custom properties di bagian atas `css/style.css`
(`:root { ... }`), jadi mudah diubah tanpa perlu menelusuri seluruh file.
