<script setup lang="ts">
usePageSeo({
  title: 'Brand kit | Stay Safe Auditz Software',
  description:
    'Download Stay Safe Auditz logo artwork and explore our brand colours, Poppins typography and visual guidelines.',
})
const colours = [
  { name: 'Primary green', hex: '#53B848', use: 'Brand emphasis and primary actions.' },
  { name: 'Black', hex: '#000000', use: 'Navigation and strong brand backgrounds.' },
  { name: 'White', hex: '#FFFFFF', use: 'Clear, uncluttered surfaces.' },
  { name: 'Dark green', hex: '#41983A', use: 'Hover states and stronger emphasis.' },
  { name: 'Deeper green', hex: '#347C2F', use: 'Dark green text and active accents.' },
  { name: 'Light green', hex: '#EAF7E8', use: 'Soft highlights and selected states.' },
]
const weights = [
  { name: 'Regular', weight: 400, use: 'Body copy' },
  { name: 'Medium', weight: 500, use: 'Labels and buttons' },
  { name: 'Semibold', weight: 600, use: 'Headings' },
  { name: 'Bold', weight: 700, use: 'Display text' },
]
</script>

<template>
  <div class="brand-kit">
    <section class="brand-intro">
      <div class="container brand-intro-grid">
        <div>
          <p class="eyebrow">STAY SAFE AUDITZ SOFTWARE / BRAND KIT</p>
          <h1>
            Our brand.
            <br />
            <span>Clearly Auditz.</span>
          </h1>
          <p>Logo artwork, colours and typography for a consistent Stay Safe Auditz presence.</p>
          <a href="#artwork" class="button button--primary">
            Explore the assets
            <SiteIcon name="arrow" />
          </a>
        </div>
        <div class="brand-signature">
          <img
            src="/images/stay-safe-logo.png"
            width="1000"
            height="366"
            alt="Stay Safe Auditz Software"
          />
          <p>
            Health and safety management,
            <br />
            without the paperwork.
          </p>
        </div>
      </div>
    </section>
    <nav class="brand-jump container" aria-label="Brand kit sections">
      <a href="#artwork">01 / Artwork</a>
      <a href="#colours">02 / Colours</a>
      <a href="#typography">03 / Typography</a>
      <a href="#principles">04 / Principles</a>
    </nav>
    <section id="artwork" class="container section">
      <p class="eyebrow">01 / ARTWORK</p>
      <h2>The familiar face of Auditz.</h2>
      <p>Download the artwork used on this website.</p>
      <div class="brand-assets">
        <article class="brand-asset">
          <div class="asset-stage asset-stage--dark">
            <img
              src="/images/stay-safe-logo.png"
              alt="Stay Safe logo on black"
              width="1000"
              height="366"
            />
          </div>
          <div class="asset-details">
            <h3>Stay Safe logo</h3>
            <p>
              White lettering and a green cloud. Use a dark background so the full logo remains
              visible.
            </p>
            <a
              class="button button--secondary"
              href="/images/stay-safe-logo.png"
              download="stay-safe-auditz-logo.png"
            >
              Download logo · PNG
            </a>
          </div>
        </article>
        <article class="brand-asset">
          <div class="asset-stage">
            <img
              src="/images/stay-safe-logo-reverse.png"
              alt="Reverse-colour logo"
              width="1000"
              height="366"
            />
          </div>
          <div class="asset-details">
            <h3>Reverse-colour logo</h3>
            <p>Green lettering and cloud for white or light backgrounds.</p>
            <a
              class="button button--secondary"
              href="/images/stay-safe-logo-reverse.png"
              download="stay-safe-logo-reverse.png"
            >
              Download reverse-colour logo · PNG
            </a>
          </div>
        </article>
        <article class="brand-asset">
          <div class="asset-stage asset-stage--dark">
            <img
              src="/images/stay-safe-logo-white.png"
              alt="All-white logo"
              width="1000"
              height="366"
            />
          </div>
          <div class="asset-details">
            <h3>All-white logo</h3>
            <p>White artwork.</p>
            <a
              class="button button--secondary"
              href="/images/stay-safe-logo-white.png"
              download="stay-safe-logo-white.png"
            >
              Download all-white logo · PNG
            </a>
          </div>
        </article>
        <article class="brand-asset">
          <div class="asset-stage">
            <img
              class="cloud-mark"
              src="/images/auditz-cloud.png"
              alt="Green Auditz cloud"
              width="546"
              height="366"
            />
          </div>
          <div class="asset-details">
            <h3>Green cloud</h3>
            <p>The Auditz green cloud without lettering, supplied as a PNG.</p>
            <a
              class="button button--secondary"
              href="/images/auditz-cloud.png"
              download="auditz-cloud.png"
            >
              Download cloud · PNG
            </a>
          </div>
        </article>
      </div>
    </section>
    <section id="colours" class="brand-muted section">
      <div class="container">
        <p class="eyebrow">02 / COLOURS</p>
        <h2>Green with purpose.</h2>
        <p>
          Black and white form the foundation. Green brings focus to key actions and brand details.
        </p>
        <div class="colour-grid">
          <article v-for="colour in colours" :key="colour.hex" class="colour-card">
            <div
              class="colour-swatch"
              :style="{ backgroundColor: colour.hex }"
              aria-hidden="true"
            ></div>
            <div class="colour-details">
              <h3>{{ colour.name }}</h3>
              <code>{{ colour.hex }}</code>
              <p>{{ colour.use }}</p>
            </div>
          </article>
        </div>
        <p class="palette-note">
          Colour values follow the design specification v1.1. Use the supplied logo artwork as
          provided; its green may differ slightly from the interface palette.
        </p>
      </div>
    </section>
    <section id="typography" class="container section">
      <p class="eyebrow">03 / TYPOGRAPHY</p>
      <div class="type-grid">
        <div>
          <h2>Meet Poppins.</h2>
          <p>
            Our primary typeface keeps headings, labels and everyday information clear and
            consistent.
          </p>
          <p>Use Arial or a sans-serif fallback when Poppins is unavailable.</p>
        </div>
        <div class="type-specimen">
          <span class="type-letters" aria-hidden="true">Aa</span>
          <p>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789
          </p>
        </div>
      </div>
      <div class="weight-grid">
        <div v-for="weight in weights" :key="weight.weight" class="weight-card">
          <span :style="{ fontWeight: weight.weight }">{{ weight.name }}</span>
          <p>{{ weight.weight }} / {{ weight.use }}</p>
        </div>
      </div>
    </section>
    <section id="principles" class="brand-muted section">
      <div class="container">
        <p class="eyebrow">04 / PRINCIPLES</p>
        <h2>Professional. Clear. Practical.</h2>
        <div class="principle-grid">
          <article>
            <h3>Create clear hierarchy</h3>
            <p>
              Use typography, spacing and surfaces to make the next action obvious. Keep layouts
              clean and easy to scan.
            </p>
          </article>
          <article>
            <h3>Use green selectively</h3>
            <p>
              Reserve green for primary actions and brand emphasis. Neutral colours give the rest of
              the content room to breathe.
            </p>
          </article>
          <article>
            <h3>Make it accessible</h3>
            <p>
              Use readable contrast, visible keyboard focus and text labels. Never rely on colour
              alone to communicate meaning.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section class="container brand-help">
      <div>
        <h2>Need another format?</h2>
        <p>Get in touch for help with Auditz brand assets.</p>
      </div>
      <NuxtLink to="/contact" class="button button--secondary">
        Contact us
        <SiteIcon name="arrow" />
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.brand-intro {
  background: #000;
  color: var(--white);
  padding: 80px 0;
}
.brand-intro-grid,
.type-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.brand-intro .eyebrow,
.brand-intro h1 span {
  color: var(--green);
}
.brand-intro p {
  color: #cfcfcf;
  max-width: 520px;
}
.brand-signature {
  padding: 40px;
  border: 1px solid #333;
  border-radius: var(--radius);
}
.brand-signature img {
  width: 100%;
  height: auto;
}
.brand-signature p {
  margin: 24px 0 0;
  font-size: 14px;
}
.brand-jump {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
  padding-block: 20px;
  border-bottom: 1px solid var(--line);
}
.brand-jump a {
  padding-block: 12px;
  font-size: 13px;
  color: var(--green-dark);
}
section[id] {
  scroll-margin-top: 24px;
}
.brand-assets,
.weight-grid,
.principle-grid {
  display: grid;
  gap: 24px;
}
.brand-assets {
  grid-template-columns: 1fr 1fr;
  margin-top: 32px;
}
.brand-asset,
.colour-card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--white);
}
.asset-stage {
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: var(--surface);
}
.asset-stage--dark {
  background: #000;
}
.asset-stage img {
  width: 100%;
  max-width: 360px;
  height: auto;
}
.asset-stage .cloud-mark {
  width: 160px;
}
.asset-details,
.colour-details {
  padding: 24px;
}
.asset-details p {
  min-height: 82px;
}
.brand-muted {
  background: var(--surface);
}
.colour-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;
}
.colour-swatch {
  height: 120px;
  border-bottom: 1px solid var(--line);
}
.colour-details h3 {
  margin-bottom: 8px;
}
.colour-details code {
  font-size: 16px;
}
.colour-details p {
  margin: 16px 0 0;
  font-size: 13px;
}
.palette-note {
  margin: 24px 0 0;
  font-size: 12px;
}
.type-specimen {
  background: var(--green-light);
  padding: 32px;
  border-radius: var(--radius);
  overflow-wrap: anywhere;
}
.type-letters {
  font-size: 100px;
  line-height: 1.3;
  font-weight: 600;
  color: var(--green-dark);
}
.type-specimen p {
  color: var(--ink);
  margin: 0;
}
.weight-grid {
  grid-template-columns: repeat(4, 1fr);
  margin-top: 32px;
}
.weight-card {
  border-top: 1px solid var(--line);
  padding-top: 24px;
}
.weight-card span {
  font-size: 24px;
}
.weight-card p {
  margin-top: 8px;
  font-size: 13px;
}
.principle-grid {
  grid-template-columns: repeat(3, 1fr);
  margin-top: 32px;
}
.brand-help {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-block: 56px;
}
.brand-help h2 {
  font-size: 28px;
}
.brand-help p {
  margin-bottom: 0;
}
@media (max-width: 800px) {
  .brand-intro {
    padding-block: 48px;
  }
  .brand-intro-grid,
  .type-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .brand-signature {
    max-width: 480px;
  }
  .colour-grid,
  .weight-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .principle-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 540px) {
  .brand-assets,
  .colour-grid {
    grid-template-columns: 1fr;
  }
  .asset-details p {
    min-height: auto;
  }
  .brand-help {
    align-items: flex-start;
    flex-direction: column;
  }
  .brand-signature {
    padding: 24px;
  }
}
</style>
