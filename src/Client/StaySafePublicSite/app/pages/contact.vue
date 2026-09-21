<script setup lang="ts">
import { demoEmail } from '~/data/site'
useSeoMeta({
  title: 'Book a demo | Stay Safe Auditz Software',
  description:
    'Contact Stay Safe Auditz Software to request a demo or ask about health and safety software for your business in New Zealand or Australia.',
})
</script>
<template>
  <section class="container contact-layout section">
    <div>
      <p class="eyebrow">LET’S MAKE SAFETY SIMPLER</p>
      <h1>
        See how Auditz
        <br />
        could work
        <br />
        <span>for your team.</span>
      </h1>
      <p class="hero-lede">
        Tell us a little about your business and what you’d like to make easier. We’ll help you
        explore Auditz and find your next step.
      </p>
      <div class="contact-points">
        <p>
          <SiteIcon name="people" />
          For businesses in New Zealand & Australia
        </p>
        <p>
          <SiteIcon name="check" />
          Explore the features that matter to your team
        </p>
        <p>
          <SiteIcon name="document" />
          Bring your questions about moving away from paper
        </p>
      </div>
    </div>
    <aside class="contact-card">
      <span class="feature-icon"><SiteIcon name="chat" /></span>
      <h2>
        Your demo starts
        <br />
        with a conversation.
      </h2>
      <p>
        Email us to request a demo. It helps to include your business name, team size and a suitable
        time to talk.
      </p>
      <a :href="demoEmail" class="button button--primary">
        Request a demo by email
        <SiteIcon name="arrow" />
      </a>
      <a class="email-link" href="mailto:staysafe@auditz.co.nz">staysafe@auditz.co.nz</a>
      <hr />
      <h3>Ready to get started?</h3>
      <p>Compare our NZD plans and continue to signup.</p>
      <NuxtLink class="text-link" to="/pricing">
        View pricing
        <SiteIcon name="arrow" />
      </NuxtLink>
    </aside>
  </section>
</template>
