<script setup lang="ts">
const navigation = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Why Stay Safe', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <NuxtLink class="brand" to="/" aria-label="Stay Safe home">
        <span class="brand-mark" aria-hidden="true">S</span>
        <span>Stay Safe</span>
      </NuxtLink>

      <nav class="site-nav" aria-label="Primary navigation">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <NuxtLink class="button button--small button--primary" to="/contact">Talk to us</NuxtLink>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <NuxtLink class="brand" to="/" aria-label="Stay Safe home">
        <span class="brand-mark" aria-hidden="true">S</span>
        <span>Stay Safe</span>
      </NuxtLink>
      <p>Practical safety systems for teams that want to work with confidence.</p>
      <div class="footer-links">
        <NuxtLink to="/privacy">Privacy</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </footer>
  </div>
</template>
