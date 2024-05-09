import type { HeadConfig } from 'vitepress'

// 判断当前环境是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development'

// 导出head配置
export const head: HeadConfig[] = [
  // 设置网站图标
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  // 设置 msapplication-TileColor 的值，适用于微软应用商店
  ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
  // 设置 msapplication-TileImage 的值，适用于微软应用Store
  [
    'meta',
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
  ],
  // 设置 manifest 的值，适用于PWA（Progressive Web App）
  ['meta', { name: 'manifest', href: '/manifest.json' }],
  // 设置 apple-touch-icon 的值，适用于不同尺寸的苹果图标
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
  ],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/apple-icon-114x114.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/apple-icon-120x120.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/apple-icon-144x144.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/apple-icon-152x152.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-icon-180x180.png'
    }
  ],
  // 设置 icon 的值，适用于PWA（Progressive Web App）
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/android-icon-192x192.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/android-icon-32x32.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/android-icon-96x96.png'
    }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/android-icon-16x16.png'
    }
  ],
  // 设置作者
  ['meta', { name: 'author', content: 'Theo-messi' }],
  // 版权所有
  ['meta', { name: 'copyright', content: 'Theo-messi' }],
  // 设置og类型
  ['meta', { name: 'og:type', content: 'website' }],
  // 设置og语言
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  // 设置og站点名称
  ['meta', { name: 'og:site_name', content: 'Theo Docs' }],
  // 设置页面的元描述标签，用于搜索引擎显示摘要
  [
    'meta',
    {
      name: 'og:description',
      content:
        '流媒体森林是一个全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、一元机场、Bridge the Wise、HBO Max、Spotify、奈飞小铺、蜜糖商店、银河录像局）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。'
    }
  ],
  // 设置og图片
  ['meta', { name: 'og:image', content: 'https://theovan.cn/avatar.png' }],
  // 设置robots元标签，指定搜索引擎是否索引、跟随此站点
  ['meta', { name: 'robots', content: 'index, follow' }],
  // 设置evisit-after元标签，指定搜索引擎跟踪此站点的时间为1天
  ['meta', { name: 'evisit-after', content: '1 day' }],
  // 创建一个数组，其中包含两个元素，分别是meta和description
  ['meta', { name: 'description', content: 'zh-CN' }],
  // 设置百度收录
  ['meta', { name: 'baidu-site-verification', content: 'codeva-B6BrBqHfK6' }],
  // 设置站点SEO
  [
    'meta',
    {
      name: 'keywords',
      content:
        '网络技术,VPS,ESXi,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clash,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云,YouTube,Premium,机场,流媒体,解锁,线路,科学上网,梯子,特殊服务,出国服务,奈飞,Netflix,迪士尼,YouTube,油管,hulu,一元机场,FlyingBird,Bridge the Wise,HBO Max,Spotify,奈飞小铺,蜜糖商店,银河录像局'
    }
  ]
]
