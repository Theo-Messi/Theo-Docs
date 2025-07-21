import type { UserConfig } from 'vitepress'

const baseUrl = 'https://doc.theojs.cn'
const defaultOgImage = 'https://i.theojs.cn/logo/Theo-Docs-og.webp'

export const transformPageData: UserConfig['transformPageData'] = (pageData) => {
  // head is an array
  pageData.frontmatter.head ??= []

  // canonical URL
  const DynamicUrl = `${baseUrl}/${pageData.relativePath}`.replace(/index\.md$/, '').replace(/\.md$/, '')

  // title
  const title = pageData.frontmatter?.hero?.name || pageData.title || 'Theo Docs'

  // description
  const description = pageData.frontmatter?.hero?.tagline || pageData.description || ''

  // modified_time
  const modified_time = pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : new Date().toISOString()

  // og:image
  const ogImageEntry = pageData.frontmatter.head.find((item) => item[0] === 'meta' && item[1]?.property === 'og:image')
  const ogImage = ogImageEntry?.[1]?.content || defaultOgImage

  // json-ld
  const isHome = pageData.relativePath === 'index.md'
  const jsonLd = isHome
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: baseUrl + '/',
        inLanguage: 'zh-Hans',
        author: { '@type': 'Person', name: 'Theo', url: baseUrl },
        publisher: {
          '@type': 'Organization',
          name: 'Theo',
          logo: { '@type': 'ImageObject', url: baseUrl + '/avatar.webp' }
        },
        description: description,
        name: title
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        inLanguage: 'zh-Hans',
        author: { '@type': 'Person', name: 'Theo', url: baseUrl },
        publisher: {
          '@type': 'Organization',
          name: 'Theo',
          logo: { '@type': 'ImageObject', url: baseUrl + '/avatar.webp' }
        },
        mainEntityOfPage: DynamicUrl,
        description: description,
        url: DynamicUrl,
        image: ogImage
      }

  // add head
  pageData.frontmatter.head.push(
    ['link', { rel: 'canonical', href: DynamicUrl }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:url', content: DynamicUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'twitter:title', content: title }],
    ['meta', { property: 'twitter:image', content: ogImage }],
    ['meta', { property: 'twitter:description', content: description }],
    ['meta', { property: 'article:published_time', content: '2020-07-21T08:17:36.000Z' }],
    ['meta', { property: 'article:modified_time', content: modified_time }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)]
  )
}
