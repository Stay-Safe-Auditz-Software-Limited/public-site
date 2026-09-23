<script setup lang="ts">
import { features } from '~/data/site'
useSeoMeta({
  title: 'Auditz | Health and safety management without the paperwork',
  description:
    'Replace paper-based health and safety processes with Auditz. Organise training, maintenance, documents and meetings for businesses in New Zealand and Australia.',
})
</script>
<template>
  <div>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="status-dot" />
            PRACTICAL SOFTWARE. SAFER WORK.
          </p>
          <h1>
            Health & safety.
            <br />
            Less paperwork.
            <br />
            <span>More peace of mind.</span>
          </h1>
          <p class="hero-lede">
            Bring your health and safety processes together in one easy-to-use system. Less time
            managing paper. More time getting on with the job.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/contact" class="button button--primary">
              Book a demo
              <SiteIcon name="arrow" />
            </NuxtLink>
            <NuxtLink to="/features" class="button button--secondary">
              Explore the features
            </NuxtLink>
          </div>
          <p class="hero-footnote">
            <span aria-hidden="true">✓</span>
            For businesses across New Zealand & Australia
          </p>
        </div>
        <div class="hero-product">
          <div class="product-note">
            <span class="status-dot" />
            A clearer view of your health & safety
          </div>
          <img
            class="device-hero-image"
            src="/images/laptop-phone-clean.png"
            alt="Auditz dashboard displayed on a laptop beside the mobile vehicle inspection app"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div class="product-caption">
            <span>YOUR WORKDAY, MORE ORGANISED</span>
            <span>Current app · device mockup</span>
          </div>
        </div>
      </div>
    </section>
    <div class="benefit-strip">
      <div class="container">
        <span>
          <SiteIcon name="document" />
          Replace paper-based systems
        </span>
        <span>
          <SiteIcon name="check" />
          Formalise your processes
        </span>
        <span>
          <SiteIcon name="people" />
          Built for any industry
        </span>
      </div>
    </div>
    <section class="home-features">
      <div class="section container">
        <div class="section-heading home-features-intro">
          <div>
            <p class="eyebrow">ONE SYSTEM. EVERYDAY SIMPLICITY.</p>
            <h2>
              A proper home for
              <br />
              your health & safety.
            </h2>
            <p>
              From training records to meeting minutes, keep the details together and make
              day-to-day safety management easier.
            </p>
          </div>
          <img
            class="home-features-graphic"
            src="/images/auditz-mobile-tablet.png"
            alt="Auditz on phone and tablet, showing training, insurance, maintenance, equipment, contractor documents and workplace inspection records."
            width="1327"
            height="1185"
            loading="lazy"
          />
        </div>
        <div class="feature-grid">
          <NuxtLink
            v-for="feature in features"
            :key="feature.title"
            to="/features"
            class="feature-card"
          >
            <span class="feature-icon"><SiteIcon :name="feature.icon" /></span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <span class="card-link">
              Explore feature
              <SiteIcon name="arrow" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="process-section">
      <div class="container process-grid">
        <div>
          <p class="eyebrow">BRING STRUCTURE TO YOUR WORKDAY</p>
          <h2>
            Good processes.
            <br />
            Without the paper trail.
          </h2>
          <p>
            Health and safety is part of every business. Auditz helps you make it a clear,
            consistent part of yours.
          </p>
          <NuxtLink class="text-link" to="/features">
            See what you can manage
            <SiteIcon name="arrow" />
          </NuxtLink>
        </div>
        <ol class="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Bring your records together</h3>
              <p>Give your training, equipment and documents one organised home.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Make your processes repeatable</h3>
              <p>Formalise how your team manages everyday health and safety.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Prepare with more clarity</h3>
              <p>Support your preparation for ISO 45001 with structured processes and records.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <section class="section container industry-section">
      <p class="eyebrow">YOUR INDUSTRY. YOUR TEAM. YOUR AUDITZ.</p>
      <h2>
        Different workplaces.
        <br />
        The same need for simplicity.
      </h2>
      <p>
        Whether you’re a small team or a larger organisation, bring a more practical approach to
        managing health and safety.
      </p>
      <div class="industry-tags">
        <span>Construction</span>
        <span>Manufacturing</span>
        <span>Agriculture</span>
        <span>Transport</span>
        <span>Professional services</span>
        <span>And your industry</span>
      </div>
      <NuxtLink to="/pricing" class="text-link">
        Find a plan for your business
        <SiteIcon name="arrow" />
      </NuxtLink>
    </section>
    <DemoCta />
  </div>
</template>
