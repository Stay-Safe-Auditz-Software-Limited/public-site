import { helpArticles } from './app/data/help'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-22',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint'],
  // Fallback documents stay out of search; real pages override this via usePageSeo.
  app: {
    head: {
      meta: [{ name: 'robots', content: 'noindex, nofollow' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      // Approved Google Analytics tag; exclude development and staging builds.
      script:
        process.env.NODE_ENV === 'production' && process.env.NUXT_PUBLIC_SITE_INDEXABLE !== 'false'
          ? [
              {
                key: 'google-tag-loader',
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-ZN2LT663XP',
              },
              {
                key: 'google-tag-config',
                innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZN2LT663XP');`,
              },
            ]
          : [],
    },
  },
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
