/* ============================================================
   src/main.js
   App entry point. Wires together:
     1. Particle canvas background
     2. Scroll reveal (IntersectionObserver)
     3. Active nav link on scroll
     4. Navbar shadow on scroll
     5. Mobile hamburger menu
     6. Footer year
     7. Smooth scroll for nav links
============================================================ */

(function init() {

  /* ── 1. PARTICLE CANVAS BACKGROUND ── */
  const canvas = document.getElementById('bg-canvas');

  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], explodeParticles = [];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function makeParticle() {
      return {
        x:   Math.random() * W,
        y:   Math.random() * H,
        vx:  (Math.random() - 0.5) * 0.3,
        vy:  (Math.random() - 0.5) * 0.3,
        r:   Math.random() * 1.5 + 0.5,
      };
    }

    /* ── Explode particles on click ── */
    function spawnExplosion(cx, cy) {
      const colors = ['rgba(108,99,255,', 'rgba(0,212,255,', 'rgba(0,255,136,'];
      for (let i = 0; i < 28; i++) {
        const angle  = (Math.PI * 2 / 28) * i + Math.random() * 0.4;
        const speed  = Math.random() * 5 + 2;
        const color  = colors[Math.floor(Math.random() * colors.length)];
        explodeParticles.push({
          x:      cx,
          y:      cy,
          vx:     Math.cos(angle) * speed,
          vy:     Math.sin(angle) * speed,
          r:      Math.random() * 3 + 1,
          alpha:  1,
          color,
          decay:  Math.random() * 0.02 + 0.015,
        });
      }
    }

    /* ── Only fire explosion outside hero section ── */
    canvas.addEventListener('click', (e) => {
      const hero = document.getElementById('home');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) return;
      }
      spawnExplosion(e.clientX, e.clientY);
    });

    function drawParticles() {
      ctx.clearRect(0, 0, W, H);

      /* ── Background dots ── */
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(108, 99, 255, 0.5)';
        ctx.fill();
      });

      /* ── Connection lines ── */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      /* ── Explosion particles ── */
      explodeParticles = explodeParticles.filter((p) => p.alpha > 0);
      explodeParticles.forEach((p) => {
        p.x     += p.vx;
        p.y     += p.vy;
        p.vx    *= 0.96;
        p.vy    *= 0.96;
        p.alpha -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
        ctx.fill();
      });

      requestAnimationFrame(drawParticles);
    }

    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 50; i++) particles.push(makeParticle());
    drawParticles();
  }

  /* ── 2. SCROLL REVEAL (IntersectionObserver) ── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); /* only animate once */
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* ── 3. ACTIVE NAV LINK ON SCROLL ── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  const navbar    = document.getElementById('navbar');

  function onScroll() {
    const scrollY = window.scrollY;

    /* Active link */
    sections.forEach((sec) => {
      const top    = sec.offsetTop - 80;
      const bottom = top + sec.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (active) active.classList.add('active');
      }
    });

    /* Navbar shadow on scroll */
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 20);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* run once on load */

  /* ── 4. MOBILE HAMBURGER MENU ── */
  const toggle   = document.getElementById('nav-toggle');
  const navMenu  = document.getElementById('nav-links');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    /* Close menu when a nav link is clicked */
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close menu on outside click */
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── 5. FOOTER YEAR ── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── 6. SMOOTH SCROLL FOR NAV LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();