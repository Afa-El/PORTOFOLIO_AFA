/* ================================================================
   ✏️  CONFIG.JS — FILE KONFIGURASI PORTOFOLIO
   ================================================================
   Halo! File ini adalah SATU-SATUNYA file yang perlu kamu ubah.
   Ikuti petunjuk di setiap bagian, lalu simpan dan refresh browser.
   Jangan ubah file lain kecuali kamu sudah paham JavaScript.
   ================================================================ */


/* ----------------------------------------------------------------
   👤 PROFIL UTAMA
   Ubah nama, tagline, deskripsi, dan info pribadimu di sini.
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
  name:       "Afa El Yuma Pratama",   // Nama lengkap kamu
  initials:   "Afa",                  // 2 huruf inisial (untuk logo & avatar)
  tagline:    "Fullstack Developer & UI/UX Designer", // Kalimat singkat di bawah nama
  greeting:   "Halo, Welcome in",          // Kata sapaan sebelum nama besar
  bio: [
    // Paragraf pertama tentang kamu (boleh diedit bebas)
    `Saya Afa El Yuma Pratama, seorang UI/UX Designer dan Fullstack Developer
     yang berbasis di Blitar, Indonesia. Saya senang mengubah ide-ide yang masih mentah
     menjadi antarmuka yang rapi dan menyenangkan—yang terasa nyaman saat digunakan sekaligus memanjakan mata.`,
    // Paragraf kedua (teknologi yang kamu pakai)
    `Perjalanan saya bermula di SMKS Brantas Karangkates, tempat saya menemukan
     bagaimana desain dan kode dapat berpadu untuk memecahkan masalah nyata bagi pengguna nyata.
     Sejak saat itu, saya sangat antusias dengan desain yang berbasis riset, detail yang playful,
     serta eksekusi yang presisi hingga ke tingkat piksel.`,
  ],

  // Info detail di kartu about
  location:   "Blitar, Jawa Timur",
  education:  "SMKS Brantas Karangkates — RPL",
  focus:      "UI/UX DESIGNER",
  languages:  "Indonesia, Inggris",

  // Status badge di hero & about (ganti teks sesuai kondisimu)
  status:     "Search for anything — 2026",   // contoh: "Sedang Sekolah" / "Open to Projects"
  statusOpen: true,    // true = titik hijau (aktif), false = titik merah

  // Link tombol "Unduh CV" — ganti dengan path file CV kamu
  cvLink:     "img/CV_AFAELYUMAP.pdf",     // contoh: "file/cv-rizky.pdf"
};

/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   Angka yang muncul di bagian bawah hero dengan animasi counter.
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
  { number: 9,   label: "Proyek"    },
  { number: 2,    label: "Tahun pengalaman" },
  { number: 0,   label: "Klien"     },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   Ganti nilai "url" dengan link profilmu. Kosongkan ("") untuk sembunyi.
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
  email:     "afaelyumapratama@gmail.com",
  instagram: "https://www.instagram.com/afaaaa5689?igsh=MTR6ZzRmYmQwOHM5cA==",   // kosongkan "" untuk sembunyikan
  github:    "https://github.com/Afa-El",
  linkedin:  "www.linkedin.com/in/afa-el-yuma-pratama-a98858384",
};


/* ----------------------------------------------------------------
   🛠️  KEAHLIAN (SKILLS)
   Tambah / hapus skill sesuai kemampuanmu.
   Skill bar: nilai 0–100 (persentase kemampuan).
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  categories: [
    {
      icon:   "fa-solid fa-desktop",
      title:  "Frontend",
      tags:   ["HTML", "CSS", "JavaScript"],
    },
    {
      icon:   "fa-solid fa-server",
      title:  "Backend",
      tags:   ["PHP","MySQL"],
    },
    {
      icon:   "fa-solid fa-wrench",
      title:  "Tools & Others",
      tags:   ["GitHub", "Figma", "VS Code", "Canva", "CapCut"],
    },
  ],

  bars: [
    { name: "Frontend Development", pct: 75 },
    { name: "Backend Development", pct: 60 },
    { name: "UI / UX Design",       pct: 80 },
  ],
};


/* ----------------------------------------------------------------
   💼 PROYEK
   Tambah proyek baru dengan menambah blok { ... } di bawah.
   category harus salah satu dari: "Web App" / "Mobile" / "Game" / "Web"
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
  {
    title:    "Website Kelas XI RPL 2",
    desc:     "Website untuk kelas XI RPL 2 yang dibuat dengan HTML, CSS, dan JavaScript.",
    tags:     ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image:    "img/PROJECT_1.png",
    link:     "https://xirpl2smkbrantas-website.vercel.app/",
  },
  {
    title:    "Website Portofolio",
    desc:     "Website untuk portofolio pribadi saya yang dibuat dengan HTML, CSS, dan JavaScript.",
    tags:     ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image:    "img/PROJECT_2.png",
    link:     "http://127.0.0.1:5501/",
  },
  {
    title:    "Website Random",
    desc:     "Website random yang dibuat dengan HTML dan CSS.",
    tags:     ["HTML", "CSS"],
    category: "Web",
    image:    "img/PROJECT_RANDOM.png",
    link:     "https://drive.google.com/file/d/1f3OYsyiJAn-7NZPBFKuS-1GuorhZf7bR/view?usp=sharing",
  },
  {
    title:    "Website Recreate",
    desc:     "Website recreate dari brand product makanan yaitu Janji Jiwa yang dibuat dengan HTML dan CSS.",
    tags:     ["HTML", "CSS"],
    category: "Web",
    image:    "img/PROJECT_WEB.png",
    link:     "https://drive.google.com/drive/folders/1UotAsUUCON7D76E6SZh5DGiDKKAi0ER7?usp=sharing",
  },
  {
    title:    "Tinkercad Arduino IoT",
    desc:     "Arduino Uno yang menampilkan simulasi lampu lalu lintas dengan Internet of Things (IoT)",
    tags:     ["Arduino"],
    category: "Tinkercad",
    image:    "img/SIMULASI_LAMPU_LALULINTAS.png",
    link:     "https://www.tinkercad.com/things/9Lkaz77T7WW/editel",
  },
  {
    title:    "Design 3D",
    desc:     "Design 3D random yang memperlihatkan seekor anak ayam.",
    tags:     ["3D"],
    category: "3D",
    image:    "img/PROJECT_3D.png",
    link:     "https://drive.google.com/file/d/1v_L4St__xMli90VkKi5orHCdcDmnjLNb/view?usp=sharing",
  },
  {
    title:    "Python Project",
    desc:     "{Project python simpel yang pernah saya buat sendiri disekolahan sebagai tugas dan belajar mandiri}",
    tags:     ["Python"],
    category: "Python",
    image:    "img/PROJECT_PYTHON.png",
    link:     "https://drive.google.com/drive/folders/1DrGqc6W1G5ZQpM9swlkK9OjUVZZWv8W6?usp=sharing",
  },
  {
    title:    "UI/UX Figma Project",
    desc:     "Project Figma UI/UX simpel yang pernah saya buat sendiri disekolah sebagai tugas dan belajar mandiri.",
    tags:     ["Figma"],
    category: "Figma",
    image:    "img/PROJECT_FIGMA.png",
    link:     "https://www.figma.com/proto/3K1UpUhY2nVhAehMWdPL4P/tgs?node-id=442-263&starting-point-node-id=397%3A274&scaling=contain&content-scaling=fixed&t=10htKPjjOBgr07zb-1",
  },
  {
    title:    "UI/UX Figma Design",
    desc:     "Project Figma UI/UX simpel yang saya buat disaat tidak memiliki pekerjaan.",
    tags:     ["Figma"],
    category: "Figma",
    image:    "img/PROJECT_ALAALA.png",
    link:     "https://www.figma.com/design/Kh8nzFVUb8CfLfJ2wgL0O3/Web-Matcha?node-id=0-1&t=av32Au450n7QqK5m-1",
  },
];


/* ----------------------------------------------------------------
   🎨 WARNA TEMA  (opsional — skip jika tidak mau ubah)
   Ganti kode warna hex sesuai selera.
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  accent: "#355E3B",              // Forest Green
  accent2: "rgba(53, 94, 59, 0.35)",
  accent3: "#4E342E"              // Dark Brown
};