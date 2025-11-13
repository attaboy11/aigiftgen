# BrightGrid Kent Static Site Code

This document lists the full contents of each file in the static BrightGrid Kent site so you can copy them quickly.

## index.html

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <title>BrightGrid Kent | Solar &amp; Battery Storage for Homes</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="BrightGrid Kent connects homeowners with vetted solar and battery storage installers across Kent. Cut bills, store excess energy, and protect yourself from rising prices." />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://brightgridkent.co.uk/" />

  <!-- Open Graph for sharing -->
  <meta property="og:title" content="BrightGrid Kent | Solar &amp; Battery Storage for Homes" />
  <meta property="og:description" content="Lower your bills and increase your energy independence with solar panels and battery storage from trusted Kent installers." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://brightgridkent.co.uk/" />
  <!-- Optional: add when you have an image -->
  <!-- <meta property="og:image" content="https://brightgridkent.co.uk/assets/og-image.jpg" /> -->

  <link rel="stylesheet" href="assets/style.css" />

  <!-- LocalBusiness JSON-LD (update phone/email when ready) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BrightGrid Kent",
    "url": "https://brightgridkent.co.uk/",
    "description": "BrightGrid Kent connects homeowners with vetted solar and battery storage installers across Kent.",
    "image": "https://brightgridkent.co.uk/assets/og-image.jpg",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Kent"
      },
      {
        "@type": "City",
        "name": "Royal Tunbridge Wells"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kent",
      "addressCountry": "GB"
    },
    "email": "hello@brightgridkent.co.uk",
    "telephone": "+44-0000-000000"
  }
  </script>
</head>

<body>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">
        <span class="logo-mark">BG</span>
        <span class="logo-text">BrightGrid Kent</span>
      </div>
      <nav class="main-nav" id="main-nav">
        <a href="#why">Why Solar</a>
        <a href="#how">How It Works</a>
        <a href="#services">Services</a>
        <a href="#areas">Areas</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" class="nav-cta">Free Quote</a>
      </nav>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section id="hero" class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>Solar &amp; Battery Storage for Homes in Kent</h1>
          <p>
            Lower your bills, protect yourself from rising energy prices, and make the most of your roof with trusted local installers across Kent.
          </p>
          <div class="hero-cta-group">
            <a href="#contact" class="btn primary">Get a Free Solar Quote</a>
            <a href="#why" class="btn ghost">Why Solar in Kent?</a>
          </div>
          <p class="hero-note">
            No spam, no pushy sales. Just a simple assessment of your home and your options.
          </p>
        </div>
        <div class="hero-card">
          <h2>Quick Snapshot</h2>
          <ul>
            <li><strong>Cut bills:</strong> generate your own power from your roof.</li>
            <li><strong>Store energy:</strong> use a battery to keep excess for evenings.</li>
            <li><strong>Local experts:</strong> vetted installers across Kent.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- WHY SOLAR -->
    <section id="why" class="section">
      <div class="container">
        <h2>Why Solar &amp; Battery Storage Makes Sense in Kent</h2>
        <div class="two-col">
          <div>
            <p>
              Kent gets more usable sunlight than most people expect – and with current electricity prices, solar panels with battery storage can often pay for themselves in a few years. Instead of sending cheap daytime energy back to the grid, you store it and use it in the evening when prices are highest.
            </p>
            <p>
              With the right system, you can:
            </p>
            <ul>
              <li>Cut your electricity bills significantly</li>
              <li>Reduce your dependence on energy price rises</li>
              <li>Keep more of the energy you generate</li>
              <li>Increase the appeal of your home to future buyers</li>
            </ul>
          </div>
          <div>
            <p>
              BrightGrid Kent connects homeowners with vetted local installers who can design and fit a system tailored to your property and budget. You get clear information, realistic expectations, and local support.
            </p>
            <p>
              Whether you are just starting to explore solar or ready to move ahead, we help you understand your choices in plain English.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how" class="section section-alt">
      <div class="container">
        <h2>How BrightGrid Kent Works</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Tell us about your home</h3>
            <p>Fill in a quick form with your postcode, roof type, and current energy usage.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Get matched with a local installer</h3>
            <p>We connect you with a trusted installer in Kent who prepares a tailored quote and system design.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Install, save &amp; monitor</h3>
            <p>If you decide to go ahead, your installer handles everything: survey, installation, paperwork. You start generating and storing your own power.</p>
          </div>
        </div>
        <div class="center">
          <a href="#contact" class="btn primary">Start Your Free Solar Assessment</a>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section">
      <div class="container">
        <h2>Solar &amp; Energy Services in Kent</h2>
        <div class="cards">
          <article class="card">
            <h3>Residential Solar Panels</h3>
            <p>
              Rooftop solar systems designed for typical Kent homes – from small terrace properties to larger detached houses. We help ensure correct sizing so you don’t overspend.
            </p>
          </article>
          <article class="card">
            <h3>Battery Storage Systems</h3>
            <p>
              Add a battery to store excess daytime energy and use it later. Ideal if you’re often home in the evenings, or working shifts.
            </p>
          </article>
          <article class="card">
            <h3>Solar + EV Charging</h3>
            <p>
              Thinking about an electric car or already have one? Integrate solar with EV charging so more of your driving is powered by your roof, not the grid.
            </p>
          </article>
          <article class="card">
            <h3>Solar Upgrades &amp; Add-Ons</h3>
            <p>
              Already have panels? We can help you explore adding battery storage or increasing your system size where possible.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE -->
    <section class="section section-alt">
      <div class="container">
        <h2>Why Homeowners in Kent Use BrightGrid</h2>
        <div class="two-col">
          <div>
            <ul class="checklist">
              <li><strong>Local focus</strong> – we only work with installers who actually serve Kent and nearby areas.</li>
              <li><strong>Vetted installers</strong> – we check experience, reviews, and certifications.</li>
              <li><strong>No hard sell</strong> – you decide if and when to proceed. We’re here to help you understand your options.</li>
              <li><strong>Transparent information</strong> – payback times, realistic savings, and system sizes explained in plain English.</li>
            </ul>
          </div>
          <div>
            <p>
              Our aim is simple: make it easier and safer for Kent homeowners to go solar without wading through confusing jargon or aggressive sales tactics.
            </p>
            <p>
              You get a clear picture of what’s possible for your home – and if it’s not a good fit, we’ll say so.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AREAS -->
    <section id="areas" class="section">
      <div class="container">
        <h2>Areas We Cover in Kent</h2>
        <p>
          We work with homeowners across Kent, including (but not limited to):
        </p>
        <div class="pill-grid">
          <span class="pill">Royal Tunbridge Wells</span>
          <span class="pill">Tonbridge</span>
          <span class="pill">Sevenoaks</span>
          <span class="pill">Maidstone</span>
          <span class="pill">Ashford</span>
          <span class="pill">Canterbury</span>
          <span class="pill">Sittingbourne</span>
          <span class="pill">Medway towns</span>
          <span class="pill">Surrounding villages</span>
        </div>
        <p>
          Not sure if you’re covered? Just send us your postcode and we’ll confirm.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section section-alt">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <details>
            <summary>Is solar really worth it in the UK climate?</summary>
            <p>
              Yes, especially in the South East. Modern panels work with daylight, not just direct sun. With current energy prices, many systems in Kent see payback periods in the range of several years, depending on usage and system size.
            </p>
          </details>
          <details>
            <summary>Do I need a battery, or can I just get panels?</summary>
            <p>
              You can do panels only, but a battery lets you store excess energy and use it later in the evening or overnight, increasing your self-consumption and potential savings.
            </p>
          </details>
          <details>
            <summary>How much does a typical system cost?</summary>
            <p>
              Costs vary depending on roof size, access, and system design, but most residential packages fall somewhere in the mid four to low five-figure range. A proper quote is the only way to know for sure.
            </p>
          </details>
          <details>
            <summary>Do you install the systems yourselves?</summary>
            <p>
              No – we work with a small network of trusted local installers across Kent. We help you find suitable options and understand your choices.
            </p>
          </details>
          <details>
            <summary>What if I’m not ready yet?</summary>
            <p>
              That’s fine. You can still request an assessment to understand your options. There’s no obligation to proceed.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- CONTACT / QUOTE FORM -->
    <section id="contact" class="section contact-section">
      <div class="container contact-grid">
        <div>
          <h2>Ready to Explore Solar &amp; Battery for Your Home?</h2>
          <p>
            Tell us a little about your property and current energy usage. We’ll connect you with a suitable installer in Kent for a free, no-obligation quote.
          </p>
          <p class="contact-note">
            We’ll only use your details to respond to your enquiry and, if you agree, to connect you with an installer.
          </p>
          <p class="contact-note">
            Prefer email? You can reach us at:
            <a href="mailto:hello@brightgridkent.co.uk">hello@brightgridkent.co.uk</a>
          </p>
        </div>
        <div>
          <form
            id="quote-form"
            name="quote"
            method="POST"
            data-netlify="true"
            netlify-honeypot="website"
          >
            <input type="hidden" name="form-name" value="quote" />
            <div class="form-field">
              <label for="name">Name*</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-field">
              <label for="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-field">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div class="form-field">
              <label for="postcode">Postcode*</label>
              <input type="text" id="postcode" name="postcode" required />
            </div>
            <div class="form-field">
              <label for="bill">Approx. monthly electricity bill (£)</label>
              <input type="number" id="bill" name="bill" min="0" />
            </div>
            <div class="form-field">
              <label for="message">Anything else we should know?</label>
              <textarea id="message" name="message" rows="4" placeholder="Roof type, shading, whether you work from home, EV plans, etc."></textarea>
            </div>

            <!-- Honeypot for spam bots -->
            <div class="form-field hp-field">
              <label for="website">Leave this field empty</label>
              <input type="text" id="website" name="website" />
            </div>

            <button type="submit" class="btn primary full-width">Submit My Details</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>&copy; <span id="year"></span> BrightGrid Kent. All rights reserved.</p>
      <p class="footer-meta">
        BrightGrid Kent connects homeowners with vetted solar installers in Kent. We may receive a fee from installers if you choose to proceed with an installation.
      </p>
    </div>
  </footer>

  <script src="assets/main.js" defer></script>
  <noscript>
    <div class="container" style="padding: 1rem 1.5rem 2rem; font-size: 0.9rem;">
      JavaScript is disabled. The site still works, but navigation won’t collapse on mobile.
    </div>
  </noscript>
</body>
</html>
```

## assets/style.css

```css
:root {
  --bg: #050810;
  --bg-alt: #0c111b;
  --bg-soft: #121827;
  --accent: #f5b637;
  --accent-soft: rgba(245, 182, 55, 0.15);
  --text: #f5f7ff;
  --text-muted: #b2b7c7;
  --border-subtle: #232a3b;
  --error: #ff5c5c;
  --radius: 10px;
  --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.45);
  --shadow-card: 0 14px 35px rgba(0, 0, 0, 0.35);
  --max-width: 1120px;
  --transition-fast: 0.18s ease-out;
  --font-main: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at top, #16213e 0, #050810 50%, #020308 100%);
  color: var(--text);
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* HEADER */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: linear-gradient(
    to bottom,
    rgba(5, 8, 16, 0.96),
    rgba(5, 8, 16, 0.85),
    transparent
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.logo-mark {
  display: inline-flex;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 20% 0, #ffe6a4, #f5b637);
  color: #1a1303;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 0 18px rgba(245, 182, 55, 0.7);
}

.logo-text {
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: 0.98rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.9rem;
}

.main-nav a {
  color: var(--text-muted);
  text-decoration: none;
  position: relative;
  padding-bottom: 0.15rem;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.1rem;
  width: 0;
  height: 2px;
  background: var(--accent);
  border-radius: 999px;
  transition: width var(--transition-fast);
}

.main-nav a:hover::after {
  width: 100%;
}

.main-nav .nav-cta {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: var(--accent-soft);
  border: 1px solid rgba(245, 182, 55, 0.3);
  color: #fdeec7;
}

.main-nav .nav-cta::after {
  display: none;
}

/* MOBILE NAV TOGGLE */

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-toggle span {
  width: 22px;
  height: 2px;
  background: #ffffff;
  border-radius: 999px;
}

/* HERO */

.hero {
  padding: 4rem 0 3rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 1.4fr);
  gap: 2rem;
  align-items: center;
}

.hero-text h1 {
  font-size: clamp(2.1rem, 3vw, 2.7rem);
  margin: 0 0 1rem;
}

.hero-text p {
  margin: 0 0 1.25rem;
  color: var(--text-muted);
  max-width: 36rem;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.hero-note {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.hero-card {
  background: linear-gradient(135deg, rgba(19, 26, 43, 0.96), #050810);
  border-radius: 18px;
  padding: 1.5rem 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow-soft);
}

.hero-card h2 {
  font-size: 1.1rem;
  margin-top: 0;
}

.hero-card ul {
  margin: 0.75rem 0 0;
  padding-left: 1.1rem;
  color: var(--text-muted);
}

/* BUTTONS */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    color var(--transition-fast);
}

.btn.primary {
  background: radial-gradient(circle at 10% 0, #ffe6a4, #f5b637);
  color: #1f1300;
  box-shadow: 0 0 22px rgba(245, 182, 55, 0.55);
}

.btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 32px rgba(245, 182, 55, 0.8);
}

.btn.ghost {
  background: transparent;
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.18);
}

.btn.ghost:hover {
  background: rgba(255, 255, 255, 0.04);
}

.btn.full-width {
  width: 100%;
}

/* SECTIONS */

.section {
  padding: 3rem 0;
  background: transparent;
}

.section-alt {
  background: linear-gradient(180deg, #050810 0%, #0b101d 50%, #050810 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.section h2 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
}

.two-col {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1.75rem;
}

.two-col p {
  color: var(--text-muted);
}

/* STEPS */

.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.step {
  background: linear-gradient(145deg, rgba(18, 25, 43, 0.9), #050810);
  padding: 1.25rem 1.1rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow-card);
}

.step-number {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: #fdeec7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.step h3 {
  margin: 0 0 0.4rem;
  font-size: 1rem;
}

.step p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.center {
  text-align: center;
  margin-top: 1.8rem;
}

/* CARDS (services) */

.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.4rem;
  margin-top: 1.4rem;
}

.card {
  background: rgba(10, 15, 29, 0.96);
  border-radius: 16px;
  padding: 1.25rem 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: var(--shadow-card);
}

.card h3 {
  margin-top: 0;
  font-size: 1rem;
}

.card p {
  margin: 0.4rem 0 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* CHECKLIST */

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist li {
  position: relative;
  padding-left: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}

.checklist li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent);
}

/* PILL GRID */

.pill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 1.2rem;
}

.pill {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  font-size: 0.85rem;
  color: var(--text-muted);
  background: rgba(5, 8, 16, 0.9);
}

/* FAQ */

.faq-list {
  display: grid;
  gap: 0.6rem;
  margin-top: 1.2rem;
}

details {
  background: rgba(10, 15, 29, 0.96);
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

details[open] {
  border-color: rgba(245, 182, 55, 0.45);
}

summary {
  cursor: pointer;
  font-weight: 500;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

details p {
  margin: 0.45rem 0 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* CONTACT */

.contact-section {
  padding-bottom: 3.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
  gap: 2rem;
  align-items: flex-start;
}

.contact-note {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.form-field label {
  font-size: 0.85rem;
}

.form-field input,
.form-field textarea {
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  background: rgba(4, 7, 16, 0.96);
  color: var(--text);
  padding: 0.55rem 0.55rem;
  font-size: 0.9rem;
  outline: none;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: rgba(245, 182, 55, 0.7);
  box-shadow: 0 0 0 1px rgba(245, 182, 55, 0.3);
}

.form-field textarea {
  resize: vertical;
}

.hp-field {
  display: none; /* hide honeypot from humans */
}

/* FOOTER */

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.4rem 0 1.8rem;
  background: #050810;
}

.footer-inner {
  text-align: center;
}

.footer-meta {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-card {
    order: -1;
    margin-bottom: 1rem;
  }

  .two-col {
    grid-template-columns: minmax(0, 1fr);
  }

  .steps {
    grid-template-columns: minmax(0, 1fr);
  }

  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .header-inner {
    min-height: 60px;
  }

  .nav-toggle {
    display: flex;
  }

  /* Mobile baseline: nav visible if JS is disabled */
  .main-nav {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 0.5rem 0;
    background: none;
    border-bottom: none;
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }

  /* When JS is present, .js-nav repositions nav as overlay */
  .main-nav.js-nav {
    position: fixed;
    inset: 60px 0 auto 0;
    padding: 0.9rem 1.5rem 1.2rem;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(5, 8, 16, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: transform var(--transition-fast), opacity var(--transition-fast);
  }

  .main-nav.js-nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}

@media (max-width: 600px) {
  .hero {
    padding-top: 3.2rem;
  }

  .cards {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-text h1 {
    font-size: 1.8rem;
  }
}
```

## assets/main.js

```javascript
// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  // Mark nav as JS-controlled, so CSS can switch layout
  mainNav.classList.add("js-nav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav when clicking a link (mobile)
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Smooth scroll for internal anchors
document.addEventListener("click", (e) => {
  const target = e.target.closest("a[href^='#']");
  if (!target) return;

  const href = target.getAttribute("href");
  if (!href || href === "#") return;

  const id = href.slice(1);
  const section = document.getElementById(id);
  if (!section) return;

  e.preventDefault();
  const top = section.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
```

## robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://brightgridkent.co.uk/sitemap.xml
```

## sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://brightgridkent.co.uk/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

