<script setup lang="ts">
import { features } from '~/data/site'
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
      <article v-for="(feature, index) in features" :key="feature.title" class="feature-detail">
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
