/* ============================================================
   src/sections/about.js
   Renders the about section using data from RESUME_DATA.
   Injects HTML into <section id="about">.
============================================================ */

(function renderAbout() {
  const section = document.getElementById('about');
  if (!section) return;

  const { about } = RESUME_DATA;

  /* ── Build paragraphs ── */
  const parasHTML = about.paragraphs.map((p) => `<p>${p}</p>`).join('');

  /* ── Build skills grid ── */
  const skillsHTML = about.skills
    .map(
      (cat) => `
        <div class="skill-cat">
          <h4>${cat.category}</h4>
          <div class="skill-tags">
            ${cat.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join('')}
          </div>
        </div>`
    )
    .join('');

  /* ── Build highlight cards ── */
  const highlightsHTML = about.highlights
    .map(
      (h) => `
        <div class="highlight-card reveal">
          <div class="highlight-icon">${h.icon}</div>
          <h4>${h.title}</h4>
          <p>${h.desc}</p>
        </div>`
    )
    .join('');

  /* ── Full about HTML ── */
  section.innerHTML = `
    <div class="section-inner">
      <div class="section-tag">// who i am</div>
      <h2 class="section-title">About <span>Me</span></h2>
      <div class="section-line"></div>

      <div class="about-grid reveal">

        <!-- LEFT: Text + Skills -->
        <div>
          <div class="about-text">${parasHTML}</div>
          <div class="skills-grid reveal-stagger">${skillsHTML}</div>
        </div>

        <!-- RIGHT: Highlight cards -->
        <div class="about-highlights">${highlightsHTML}</div>

      </div>
    </div>
  `;
})();
