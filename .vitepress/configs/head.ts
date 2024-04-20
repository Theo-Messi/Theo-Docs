import type { HeadConfig } from 'vitepress'

// 判断当前环境是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development'

// 导出head配置
export const head: HeadConfig[] = [
  // 设置图标
  ['link', { rel: 'icon', href: 'https://theovan.cn/avatar.jpg' }],
  // 设置主题颜色
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
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
        '网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clash,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云,YouTube,Premium,机场,流媒体,解锁,线路,科学上网,梯子,特殊服务,出国服务,奈飞,Netflix,迪士尼,YouTube,油管,hulu,一元机场,FlyingBird,Bridge the Wise,HBO Max,Spotify,奈飞小铺,蜜糖商店,银河录像局'
    }
  ]
]
