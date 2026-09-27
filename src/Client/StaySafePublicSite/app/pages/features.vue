<script setup lang="ts">
import { features } from '~/data/site'
const pageFeatures = [
  ...features.slice(0, 2),
  {
    title: 'Risk management',
    icon: 'hazard',
    detail:
      'Focus on the hazards that matter most. Identify serious hazards, assess their risk and prioritise what needs attention, making risks easier to manage and review as your workplace changes.',
  },
  {
    title: 'Contractor management',
    icon: 'phone-signal',
    detail:
      'Spend less time chasing paperwork. Collect, manage and approve contractor and supplier safety management documents in one place, so you can see what’s been provided and what still needs your attention.',
  },
  ...features.slice(2),
]
usePageSeo({
  title: 'Features | Stay Safe Auditz Software',
  description:
    'Explore Auditz training registers, equipment and maintenance records, document control and meeting minutes, with support for ISO 45001 preparation.',
})
</script>
<template>
  <div>
    <section class="page-hero container">
      <p class="eyebrow">THE TOOLS TO KEEP THINGS TOGETHER</p>
      <h1>
        Everyday safety.
        <br />
        <span>Clearly organised.</span>
      </h1>
      <p>
        Replace paper-based administration with practical tools that help you formalise your health
        and safety processes.
      </p>
    </section>
    <section class="container feature-detail-grid section-bottom features-page-grid">
      <article v-for="(feature, index) in pageFeatures" :key="feature.title" class="feature-detail">
        <span class="feature-icon"><SiteIcon :name="feature.icon" /></span>
        <span class="detail-number">0{{ index + 1 }}</span>
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.detail }}</p>
      </article>
      <p class="features-more">and more!</p>
    </section>
    <DemoCta />
  </div>
</template>
