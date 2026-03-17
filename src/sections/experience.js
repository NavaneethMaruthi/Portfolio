/* ============================================================
   src/sections/experience.js
   Renders the experience/timeline section using RESUME_DATA.
   Injects HTML into <section id="experience">.
============================================================ */

(function renderExperience() {
  const section = document.getElementById('experience');
  if (!section) return;

  const { experience } = RESUME_DATA;

  /* ── Build each timeline item ── */
  const timelineHTML = experience
    .map(
      (item) => {
        /* Dot style variant */
        const dotClass = item.dotStyle === 'cyan'
          ? 'tl-dot tl-dot--cyan'
          : item.dotStyle === 'red'
            ? 'tl-dot tl-dot--red'
            : 'tl-dot';

        /* Bullet points */
        const bulletsHTML = item.bullets
          .map((b) => `<li>${b}</li>`)
          .join('');

        /* Tech tags — skip if empty */
        const techHTML = item.tech.length
          ? `<div class="tl-tech">
               ${item.tech.map((t) => `<span>${t}</span>`).join('')}
             </div>`
          : '';

        /* Date badge color override for education */
        const dateStyle = item.dotStyle === 'red'
          ? 'style="color:#ff6b6b; border-color:rgba(255,107,107,.3); background:rgba(255,107,107,.1);"'
          : '';

        /* Company color override for education */
        const companyStyle = item.dotStyle === 'red'
          ? 'style="color:#ff6b6b;"'
          : '';

        return `
          <div class="tl-item reveal">
            <div class="${dotClass}"></div>
            <div class="tl-card">
              <div class="tl-header">
                <div>
                  <div class="tl-company" ${companyStyle}>${item.company}</div>
                  <div class="tl-role">${item.role}</div>
                  <div class="tl-location">📍 ${item.location}</div>
                </div>
                <div class="tl-date" ${dateStyle}>${item.period}</div>
              </div>
              <ul class="tl-bullets">${bulletsHTML}</ul>
              ${techHTML}
            </div>
          </div>`;
      }
    )
    .join('');

  /* ── Full experience HTML ── */
  section.innerHTML = `
    <div class="section-inner">
      <div class="section-tag">// where i've worked</div>
      <h2 class="section-title">Work <span>Experience</span></h2>
      <div class="section-line"></div>
      <div class="timeline">${timelineHTML}</div>
    </div>
  `;
})();