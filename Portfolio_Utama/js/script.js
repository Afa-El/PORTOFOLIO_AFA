/* ==========================================================================
   AFA PORTFOLIO — script.js
   Vanilla JavaScript, tanpa framework/library.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------
     1. LOADING SCREEN
     Mensimulasikan progress loading lalu menyembunyikan layar loading.
     ------------------------------------------------------------------ */
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBarFill = document.getElementById('loadingBarFill');
  const loadingPercent = document.getElementById('loadingPercent');

  let progress = 0;
  const loadingInterval = setInterval(() => {
    // kenaikan acak agar terasa alami, bukan linear kaku
    progress += Math.random() * 18 + 6;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadingInterval);

      // beri jeda sedikit di 100% sebelum layar loading hilang
      setTimeout(() => {
        loadingScreen.classList.add('is-hidden');
        document.body.style.overflow = ''; // aktifkan scroll kembali
        // Aktifkan tab sesuai URL hash atau default #home
        switchTab(window.location.hash || '#home', false);
      }, 350);
    }
    loadingBarFill.style.width = progress + '%';
    loadingPercent.textContent = Math.floor(progress) + '%';
  }, 160);

  // kunci scroll selama loading
  document.body.style.overflow = 'hidden';


  /* ------------------------------------------------------------------
     2. TAB NAVIGATION SYSTEM (Ganti scroll kontinu antar-section)
     Navigasi hanya melalui navbar/tombol. Halaman tidak di-scroll
     untuk berpindah menu; setiap section adalah tab mandiri.
     ------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navbarMenu = document.getElementById('navbarMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const tabSections = document.querySelectorAll('.tab-section');
  const allTabLinks = document.querySelectorAll('[data-link]');

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }
  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);

  // toggle hamburger menu (mobile)
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = navbarMenu.classList.toggle('is-open');
    hamburgerBtn.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Fungsi pergantian tab
  function switchTab(targetHref, updateHistory = true) {
    if (!targetHref) targetHref = '#home';
    const cleanId = targetHref.replace(/^#/, '') || 'home';
    const targetSection = document.getElementById(cleanId);
    if (!targetSection) return;

    // 1. Tampilkan hanya section yang dipilih
    tabSections.forEach((sec) => sec.classList.remove('is-active'));
    targetSection.classList.add('is-active');

    // 2. Update status aktif di link navbar
    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const linkId = href.replace(/^#/, '');
      link.classList.toggle('active', linkId === cleanId);
    });

    // 3. Tutup menu mobile jika terbuka
    navbarMenu.classList.remove('is-open');
    hamburgerBtn.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');

    // 4. Kembalikan posisi scroll ke atas untuk tab baru
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 5. Jalankan animasi reveal elemen di tab yang aktif
    const reveals = targetSection.querySelectorAll('[data-reveal]');
    reveals.forEach((el, idx) => {
      el.classList.remove('is-visible');
      setTimeout(() => {
        el.classList.add('is-visible');
      }, 40 + idx * 30);
    });

    // 6. Jalankan animasi skill bar jika tab skills dibuka
    if (cleanId === 'skills') {
      animateSkillBars();
    }

    // 7. Update hash di URL tanpa reload
    if (updateHistory && window.location.hash !== `#${cleanId}`) {
      history.pushState(null, '', `#${cleanId}`);
    }
  }

  // Event listener untuk klik pada semua link internal/tab
  allTabLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return; // biarkan link luar berjalan normal

      e.preventDefault();
      switchTab(href, true);
    });
  });

  // Dukungan tombol Back / Forward di browser
  window.addEventListener('popstate', () => {
    switchTab(window.location.hash || '#home', false);
  });
  window.addEventListener('hashchange', () => {
    switchTab(window.location.hash || '#home', false);
  });


  /* ------------------------------------------------------------------
     3. CONTENT REVEAL SETUP
     Menandai elemen penting untuk animasi fade-up saat tab dibuka.
     ------------------------------------------------------------------ */
  const revealTargets = document.querySelectorAll(
    '.about-card, .about-photo-wrap, .skill-card, .project-card, .contact-intro, .contact-form-wrap, .section-title, .eyebrow-handwritten'
  );
  revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));


  /* ------------------------------------------------------------------
     4. SKILLS PROGRESS BAR ANIMATION
     Progress bar mengisi dari 0% ke target saat tab Skills aktif.
     ------------------------------------------------------------------ */
  const skillCards = document.querySelectorAll('.skill-card');

  function animateSkillBars() {
    skillCards.forEach((card, index) => {
      const percent = card.getAttribute('data-percent') || 0;
      const fill = card.querySelector('.skill-bar-fill');
      if (!fill) return;

      fill.style.width = '0%';
      setTimeout(() => {
        fill.style.width = percent + '%';
      }, 100 + index * 50);
    });
  }


  /* ------------------------------------------------------------------
     5. PROJECT FILTER
     Menyaring kartu proyek berdasarkan kategori yang dipilih.
     ------------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // update tombol aktif
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // tampilkan/sembunyikan kartu dengan sedikit animasi fade
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          card.classList.remove('is-hidden');
          card.style.animation = 'none';
          // trigger reflow supaya animasi bisa diulang
          void card.offsetWidth;
          card.style.animation = 'fadeInCard 0.45s ease forwards';
          card.addEventListener('animationend', () => {
            card.style.animation = '';
          }, { once: true });
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // keyframe fadeInCard didaftarkan lewat JS agar tidak perlu ubah CSS terpisah
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes fadeInCard {
      from { opacity: 0; transform: translateY(14px) rotate(var(--rot, 0deg)); }
      to   { opacity: 1; transform: translateY(0) rotate(var(--rot, 0deg)); }
    }
  `;
  document.head.appendChild(styleTag);


  /* ------------------------------------------------------------------
     6. CONTACT FORM VALIDATION
     Validasi sederhana: nama, email, subject, pesan wajib diisi
     dan email harus berformat valid.
     ------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  const fields = {
    name: { input: document.getElementById('fieldName'), error: document.getElementById('errName') },
    email: { input: document.getElementById('fieldEmail'), error: document.getElementById('errEmail') },
    subject: { input: document.getElementById('fieldSubject'), error: document.getElementById('errSubject') },
    message: { input: document.getElementById('fieldMessage'), error: document.getElementById('errMessage') },
  };

  function validateField(key) {
    const { input, error } = fields[key];
    const value = input.value.trim();
    let message = '';

    if (value === '') {
      message = 'Kolom ini wajib diisi.';
    } else if (key === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        message = 'Format email tidak valid.';
      }
    } else if (key === 'message' && value.length < 10) {
      message = 'Pesan minimal 10 karakter.';
    }

    error.textContent = message;
    input.closest('.form-group').classList.toggle('has-error', Boolean(message));
    return message === '';
  }

  // validasi real-time saat user meninggalkan kolom
  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener('blur', () => validateField(key));
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const results = Object.keys(fields).map((key) => validateField(key));
    const isFormValid = results.every(Boolean);

    if (!isFormValid) return;

    // simulasi pengiriman berhasil
    showToast();
    contactForm.reset();
  });

  function showToast() {
    toast.classList.add('is-visible');
    setTimeout(() => toast.classList.remove('is-visible'), 3800);
  }


  /* ------------------------------------------------------------------
     7. BACK TO TOP BUTTON
     ------------------------------------------------------------------ */
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('is-visible', window.scrollY > 500);
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
