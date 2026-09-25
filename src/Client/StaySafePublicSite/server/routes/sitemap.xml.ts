import { helpArticles } from '../../app/data/help'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const origin = new URL(config.public.siteUrl).origin
  const paths = [
    '/',
    '/features',
    '/pricing',
    '/about',
    '/contact',
    '/safely',
    '/privacy-policy.html',
    '/terms-of-use.html',
    '/help-centre.html',
    ...helpArticles.map((article) => article.path),
  ]
  const escapeXml = (value: string): string =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escapeXml(new URL(path, origin).href)}</loc></url>`).join('')}</urlset>`
})
