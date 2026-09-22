import { helpArticles } from './app/data/help'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-22',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint'],
  // Keep payloads inline: legacy .html routes cannot also be payload directories.
  experimental: { payloadExtraction: false },
  nitro: {
    prerender: {
      routes: ['/healthz', '/help-centre.html', ...helpArticles.map((article) => article.path)],
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
