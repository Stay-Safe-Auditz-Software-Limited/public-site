export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  if (import.meta.dev || String(config.public.siteIndexable) === 'false') {
    return 'User-agent: *\nDisallow: /\n'
  }
  return `User-agent: *\nAllow: /\nDisallow: /healthz\nSitemap: ${new URL('/sitemap.xml', config.public.siteUrl).href}\n`
})
