export default defineNuxtConfig({
  compatibilityDate: '2026-09-22',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint'],
  nitro: {
    prerender: {
      routes: ['/healthz'],
    },
  },
  routeRules: {
    '/healthz': { prerender: true },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
