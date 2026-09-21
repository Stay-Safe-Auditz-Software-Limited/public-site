<script setup lang="ts">
const menuOpen = ref(false)
const route = useRoute()
watch(
  () => route.path,
  () => {
    menuOpen.value = false
  },
)
const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]
useHead({ htmlAttrs: { lang: 'en-NZ' } })
</script>
<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <div class="container header-inner">
        <NuxtLink to="/" aria-label="Stay Safe Auditz Software home"><BrandLogo /></NuxtLink>
        <button
          class="menu-toggle"
          :aria-expanded="menuOpen"
          aria-controls="primary-navigation"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? 'Close' : 'Menu' }}
          <span aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span>
        </button>
        <nav
          id="primary-navigation"
          class="site-nav"
          :class="{ 'is-open': menuOpen }"
          aria-label="Primary navigation"
        >
          <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">
            {{ item.label }}
          </NuxtLink>
          <a class="mobile-login" href="https://app.auditz.io/">Log in ↗</a>
        </nav>
        <div class="header-actions">
          <a class="login-link" href="https://app.auditz.io/">
            Log in
            <span aria-hidden="true">↗</span>
          </a>
          <NuxtLink class="button button--primary button--small" to="/contact">
            Book a demo
            <SiteIcon name="arrow" />
          </NuxtLink>
        </div>
      </div>
    </header>
    <main id="main-content" tabindex="-1"><slot /></main>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div>
            <NuxtLink to="/" aria-label="Stay Safe Auditz Software home"><BrandLogo /></NuxtLink>
            <p>
              Health and safety management,
              <br />
              without the paperwork.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <NuxtLink to="/features">Features</NuxtLink>
            <NuxtLink to="/pricing">Pricing</NuxtLink>
            <NuxtLink to="/about">About Auditz</NuxtLink>
          </div>
          <div>
            <h2>Let’s talk</h2>
            <a href="mailto:staysafe@auditz.co.nz">staysafe@auditz.co.nz</a>
            <NuxtLink to="/contact">Book a demo</NuxtLink>
            <p>New Zealand & Australia</p>
          </div>
          <div>
            <h2>Already with us?</h2>
            <a href="https://app.auditz.io/">Log in to Auditz ↗</a>
            <a href="https://www.auditz.io/help-centre.html">Help centre ↗</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© {{ new Date().getFullYear() }} Stay Safe Auditz Software Ltd</span>
          <div>
            <a href="https://www.auditz.io/privacy-policy.html">Privacy policy</a>
            <a href="https://www.auditz.io/terms-of-use.html">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
