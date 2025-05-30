import type { UserConfig } from 'vitepress'

const baseUrl = 'https://doc.theojs.cn'
const defaultOgImage = 'https://i.theojs.cn/logo/Theo-Docs-og.webp'

export const transformPageData: UserConfig['transformPageData'] = (pageData) => {
  // canonical URL
  const DynamicUrl = `${baseUrl}/${pageData.relativePath}`.replace(/index\.md$/, '').replace(/\.md$/, '')

  pageData.frontmatter.head ??= []

  // 过滤掉已有的 canonical 和 JSON-LD script，避免重复
  pageData.frontmatter.head = pageData.frontmatter.head.filter(
    (item) =>
      !(
        (item[0] === 'link' && item[1]?.rel === 'canonical') ||
        (item[0] === 'script' && item[1]?.type === 'application/ld+json')
      )
  )

  // 添加 canonical 链接
  pageData.frontmatter.head.push(['link', { rel: 'canonical', href: DynamicUrl }])

  // 提取 og:image，没有则用默认
  const ogImageEntry = pageData.frontmatter.head.find((item) => item[0] === 'meta' && item[1]?.property === 'og:image')
  const ogImage = ogImageEntry?.[1]?.content || defaultOgImage

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
          '全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、青云梯、FlyingBird - 飞鸟机场、飞兔云、TNT Cloud、Totoro Cloud - 龙猫云、奈飞小铺、银河录像局、蜜糖商店）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。',
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
        mainEntityOfPage: DynamicUrl,
        description: pageData.description || '',
        url: DynamicUrl,
        image: ogImage
      }

  // 添加 JSON-LD
  pageData.frontmatter.head.push(['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)])
}
