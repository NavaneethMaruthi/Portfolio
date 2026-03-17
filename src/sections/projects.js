/* ============================================================
   src/sections/projects.js
   Renders the projects section using RESUME_DATA.
   Injects HTML into <section id="projects">.
============================================================ */

(function renderProjects() {
  const section = document.getElementById('projects');
  if (!section) return;

  const { projects } = RESUME_DATA;

  /* ── Build each project card ── */
  const cardsHTML = projects
    .map(
      (proj) => {
        /* Project links */
        const linksHTML = proj.links
          .map(
            (link) =>
              `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="proj-link">
                ${link.label}
              </a>`
          )
          .join('');

        /* Tech tags */
        const techHTML = proj.tech
          .map((t) => `<span>${t}</span>`)
          .join('');

        return `
          <div class="proj-card reveal">
            <div class="proj-top">
              <div class="proj-icon">${proj.icon}</div>
              <div class="proj-links">${linksHTML}</div>
            </div>
            <div class="proj-badge">${proj.badge}</div>
            <h3>${proj.title}</h3>
            <p>${proj.desc}</p>
            <div class="proj-tech">${techHTML}</div>
          </div>`;
      }
    )
    .join('');

  /* ── Full projects HTML ── */
  section.innerHTML = `
    <div class="section-inner">
      <div class="section-tag">// what i've built</div>
      <h2 class="section-title">Featured <span>Projects</span></h2>
      <div class="section-line"></div>
      <div class="projects-grid reveal-stagger">${cardsHTML}</div>
    </div>
  `;
})();