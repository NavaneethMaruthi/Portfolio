/* ============================================================
   src/sections/hero.js
   Renders the hero section using data from RESUME_DATA.
   Injects HTML into <section id="home">.
============================================================ */

(function renderHero() {
  const section = document.getElementById('home');
  if (!section) return;

  const { personal, hero } = RESUME_DATA;

  /* ── Build tech chips ── */
  const chipsHTML = hero.chips
    .map(
      (chip) =>
        `<span class="chip ${chip.type === 'cyan' ? 'chip--cyan' : ''}">${chip.label}</span>`
    )
    .join('');

  /* ── Build stat row ── */
  const statsHTML = hero.stats
    .map(
      (stat) => `
        <div class="stat">
          <div class="stat-num">${stat.num}</div>
          <div class="stat-label">${stat.label}</div>
        </div>`
    )
    .join('');

  /* ── Build photo (placeholder until real photo added) ── */
const photoHTML = `
  <div class="photo-wrap" id="hero-photo">
    <img
      src="${personal.photo}"
      alt="Photo of ${personal.name}"
      onerror="this.style.display='none'; document.getElementById('hero-photo').innerHTML='👤';"
    />
  </div>`;

  /* ── Full hero HTML ── */
  section.innerHTML = `
    <div class="section-inner">
      <div class="hero-grid">

        <!-- LEFT: Text content -->
        <div class="hero-left">
          <h1 class="hero-title">
            ${hero.intro}
            <span class="highlight">${hero.highlight}</span>
          </h1>

          <p class="hero-sub">${hero.subtitle}</p>

          <div class="hero-chips">${chipsHTML}</div>

          <div class="hero-btns">
            <a href="#projects" class="btn-primary">View My Work</a>
            <a href="#contact"  class="btn-secondary">Let's Connect</a>
            <a href="${personal.resume}" download class="btn-resume">
              <i class="fa-solid fa-download"></i> Resume
            </a>
          </div>
        </div>

        <!-- RIGHT: Info card -->
        <div class="hero-right">
          <div class="hero-card">
            ${photoHTML}
            <p class="hero-card-name">${personal.name}</p>
            <p class="hero-card-role">${personal.tagline}</p>

            <div class="availability">
              <span class="availability-dot"></span>
              Open to Co-op/Internship Opportunities
            </div>

            <div class="stat-row">${statsHTML}</div>
          </div>
        </div>

      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-arrow">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>

    </div>
  `;
})();