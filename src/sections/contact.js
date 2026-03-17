/* ============================================================
   src/sections/contact.js
   Renders the contact section using RESUME_DATA.
   Injects HTML into <section id="contact">.
============================================================ */

(function renderContact() {
  const section = document.getElementById('contact');
  if (!section) return;

  const { contact, personal } = RESUME_DATA;

  /* ── Build contact links ── */
  const linksHTML = contact.links
    .map(
      (link) => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="c-link">
          <div class="c-link-icon">${link.icon}</div>
          <div>
            <div class="c-link-label">${link.label}</div>
            <div class="c-link-val">${link.value}</div>
          </div>
        </a>`
    )
    .join('');

  /* ── Full contact HTML ── */
  section.innerHTML = `
    <div class="section-inner">
      <div class="section-tag">// get in touch</div>
      <h2 class="section-title">Let's <span>Connect</span></h2>
      <div class="section-line"></div>

      <div class="contact-grid">

        <!-- LEFT: Info + links -->
        <div class="contact-info reveal">
          <h3>${contact.heading}</h3>
          <p>${contact.subtext}</p>
          <div class="contact-links">${linksHTML}</div>
        </div>

        <!-- RIGHT: Contact form -->
        <div class="contact-form reveal">
          <h3>Send a Message</h3>

          <div class="form-group">
            <label for="contact-name">Your Name</label>
            <input
              type="text"
              id="contact-name"
              placeholder="Jane Smith"
              autocomplete="name"
            />
          </div>

          <div class="form-group">
            <label for="contact-email">Email Address</label>
            <input
              type="email"
              id="contact-email"
              placeholder="jane@company.com"
              autocomplete="email"
            />
          </div>

          <div class="form-group">
            <label for="contact-subject">Subject</label>
            <input
              type="text"
              id="contact-subject"
              placeholder="Job Opportunity at Acme Corp"
            />
          </div>

          <div class="form-group">
            <label for="contact-message">Message</label>
            <textarea
              id="contact-message"
              placeholder="Hi Navaneeth, I came across your portfolio and..."
            ></textarea>
          </div>

          <button class="form-btn" id="form-submit">Send Message →</button>
          <p class="form-note" id="form-note"></p>
        </div>

      </div>
    </div>
  `;

  /* ── Form submit handler ── */
  const btn = document.getElementById('form-submit');
  const note = document.getElementById('form-note');

  btn.addEventListener('click', async function () {
  const name    = document.getElementById('contact-name').value.trim();
  const email   = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  /* Basic validation */
  if (!name || !email || !subject || !message) {
    note.textContent = '⚠️ Please fill in all fields before sending.';
    note.style.color = '#ff6b6b';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    note.textContent = '⚠️ Please enter a valid email address.';
    note.style.color = '#ff6b6b';
    return;
  }

  /* Disable button while sending */
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/mpqyooee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      note.textContent = '✅ Message sent! I\'ll get back to you soon.';
      note.style.color = '#00ff88';
      /* Clear form */
      document.getElementById('contact-name').value = '';
      document.getElementById('contact-email').value = '';
      document.getElementById('contact-subject').value = '';
      document.getElementById('contact-message').value = '';
      btn.textContent = 'Message Sent ✓';
    } else {
      throw new Error('Form submission failed');
    }
  } catch (err) {
    note.textContent = '❌ Something went wrong. Please email me directly.';
    note.style.color = '#ff6b6b';
    btn.textContent = 'Send Message →';
    btn.disabled = false;
  }
});
})();
