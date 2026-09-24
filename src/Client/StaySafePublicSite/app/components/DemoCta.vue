<template>
  <section class="cta-wrap">
    <div class="container cta">
      <div>
        <p class="eyebrow">LESS PAPERWORK. MORE CLARITY.</p>
        <h2>Make your next safety step a simple one.</h2>
        <p>See how Auditz could work for your business.</p>
      </div>
      <div class="cta-actions">
        <NuxtLink to="/contact" class="button button--primary">
          Book a demo
          <SiteIcon name="arrow" />
        </NuxtLink>
        <NuxtLink to="/pricing" class="button button--secondary">Sign up now</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-actions {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  gap: 12px;
}
.button--secondary:hover {
  background: var(--surface);
  border-color: var(--ink);
}
</style>
