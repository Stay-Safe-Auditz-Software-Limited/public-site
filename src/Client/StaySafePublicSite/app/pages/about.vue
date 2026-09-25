<script setup lang="ts">
usePageSeo({
  title: 'About Auditz | Stay Safe Auditz Software',
  description:
    'Auditz helps businesses across New Zealand and Australia replace paper-based health and safety systems with organised digital processes.',
})
</script>
<template>
  <div>
    <section class="container page-hero">
      <p class="eyebrow">STAY SAFE AUDITZ SOFTWARE</p>
      <h1>
        A simpler way
        <br />
        <span>to manage safety.</span>
      </h1>
      <p>
        Auditz helps businesses across New Zealand and Australia move away from paper-based health
        and safety systems and formalise their processes.
      </p>
      <p>
        From training registers and equipment maintenance to document control and meeting minutes,
        our focus is making everyday administration easier.
      </p>
      <NuxtLink to="/features" class="button button--primary">
        Explore Auditz
        <SiteIcon name="arrow" />
      </NuxtLink>
    </section>
    <DemoCta />
  </div>
</template>
