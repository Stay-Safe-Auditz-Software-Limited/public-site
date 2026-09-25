import { helpArticles } from './app/data/help'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-22',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint'],
  // Fallback documents stay out of search; real pages override this via usePageSeo.
  app: { head: { meta: [{ name: 'robots', content: 'noindex, nofollow' }] } },
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.auditz.io',
      siteIndexable: process.env.NUXT_PUBLIC_SITE_INDEXABLE !== 'false',
    },
  },
  // Keep payloads inline: legacy .html routes cannot also be payload directories.
  experimental: { payloadExtraction: false },
  nitro: {
    prerender: {
      routes: [
        '/healthz',
        '/sitemap.xml',
        '/robots.txt',
        '/help-centre.html',
        ...helpArticles.map((article) => article.path),
      ],
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
