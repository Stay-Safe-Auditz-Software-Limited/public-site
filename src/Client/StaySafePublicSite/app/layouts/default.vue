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
            <nav class="footer-social" aria-label="Social media">
              <a
                href="https://www.facebook.com/p/Stay-Safe-Auditz-Software-Ltd-100083368899253/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (opens in a new tab)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/stay-safe-auditz-software-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-6.5c0-1.6 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4V21H9.5V9Z"
                  />
                </svg>
              </a>
            </nav>
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
            <NuxtLink to="/help-centre.html">Help centre</NuxtLink>
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
