import type { HeadConfig } from 'vitepress'

// 判断当前环境是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development'

// 导出head配置
export const head: HeadConfig[] = [
  // 设置图标
  ['link', { rel: 'icon', href: 'https://theovan.xyz/avatar.jpg' }],
  // 设置主题颜色
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  // 设置作者
  ['meta', { name: 'author', content: 'Theo-messi' }],
  // 版权所有
  ['meta', { name: 'copyright', content: 'Theo-messi' }],
  // 设置og类型
  ['meta', { name: 'og:type', content: 'website' }],
  // 设置og语言
  ['meta', { name: 'og:locale', content: 'cn' }],
  // 设置og站点名称
  ['meta', { name: 'og:site_name', content: 'Theo Docs' }],
  // 设置og图片
  ['meta', { name: 'og:image', content: 'https://theovan.xyz/avatar.png' }],
  // 设置百度收录
  ['meta', { name: 'baidu-site-verification', content: 'codeva-B6BrBqHfK6' }],
  // 设置站点SEO
  [
    'meta',
    {
      name: 'keywords',
      content:
        '网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clash,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云,YouTube,Premium,机场,流媒体,解锁,线路,科学上网,梯子,特殊服务,出国服务,奈飞,Netflix,迪士尼,YouTube,油管,hulu,一元机场,FlyingBird,Bridge the Wise,HBO Max,Spotify,奈飞小铺,蜜糖商店,银河录像局'
    }
  ]
]
