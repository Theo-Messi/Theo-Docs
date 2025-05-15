import type { UserConfig } from 'vitepress'

const baseUrl = 'https://doc.theojs.cn'

export const transformPageData: UserConfig['transformPageData'] = (
  pageData
) => {
  // canonical URL
  const DynamicUrl = `${baseUrl}/${pageData.relativePath}`
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '')

  pageData.frontmatter.head ??= []
  pageData.frontmatter.head.push([
    'link',
    { rel: 'canonical', href: DynamicUrl }
  ])

  // Json-LD
  const isHome = pageData.relativePath === 'index.md'
  const jsonLd = isHome
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: baseUrl + '/',
        inLanguage: 'zh-Hans',
        author: {
          '@type': 'Person',
          name: 'Theo',
          url: baseUrl
        },
        publisher: {
          '@type': 'Organization',
          name: 'Theo',
          logo: {
            '@type': 'ImageObject',
            url: baseUrl + '/avatar.webp'
          }
        },
        description:
          '流媒体森林是一个全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、青云梯、HBO Max、Spotify、奈飞小铺、银河录像局）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。',
        name: 'Theo-Docs'
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: pageData.frontmatter.title || '',
        inLanguage: 'zh-Hans',
        author: {
          '@type': 'Person',
          name: 'Theo',
          url: baseUrl
        },
        publisher: {
          '@type': 'Organization',
          name: 'Theo',
          logo: {
            '@type': 'ImageObject',
            url: baseUrl + '/avatar.webp'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': DynamicUrl
        },
        description: pageData.description,
        url: DynamicUrl
      }

  pageData.frontmatter.head.push([
    'script',
    { type: 'application/ld+json' },
    JSON.stringify(jsonLd)
  ])
}
