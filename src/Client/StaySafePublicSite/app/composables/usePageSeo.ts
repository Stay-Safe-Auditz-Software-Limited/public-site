interface PageSeo {
  title: string | (() => string)
  description: string | (() => string)
}

export const usePageSeo = (metadata: PageSeo): void => {
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl.replace(/\/$/, '')
  const canonical = computed(() => {
    const path = route.path === '/privacy' ? '/privacy-policy.html' : route.path
    return `${siteUrl}${path === '/' ? '/' : path.replace(/\/$/, '')}`
  })
  useSeoMeta({
    ...metadata,
    robots:
      import.meta.dev || String(config.public.siteIndexable) === 'false'
        ? 'noindex, nofollow'
        : 'index, follow',
    ogTitle: metadata.title,
    ogDescription: metadata.description,
    ogUrl: () => canonical.value,
    ogType: 'website',
    ogSiteName: 'Stay Safe Auditz Software',
    ogLocale: 'en_NZ',
    ogImage: `${siteUrl}/images/laptop-phone-clean.png`,
    ogImageAlt: 'Auditz health and safety software on laptop and mobile',
    twitterCard: 'summary_large_image',
    twitterTitle: metadata.title,
    twitterDescription: metadata.description,
    twitterImage: `${siteUrl}/images/laptop-phone-clean.png`,
  })
  useHead(() => ({ link: [{ rel: 'canonical', href: canonical.value }] }))
}
