import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '流媒体合租平台',
    items: [
      {
        icon: 'https://theovan.wiki/yh.png',
        title: '银河录像局',
        desc: '国内可靠的智能流媒体/AI服务合租平台',
        link: 'https://nf.video/kaIuE'
      },
      {
        icon: 'https://metshop.vip/img/simpLogo.1b5c58e1.png',
        title: '蜜糖商店',
        desc: '行业领先的流媒体账号合租服务平台',
        link: 'https://metshop.vip/?referrerUserNo=MTU51076'
      },
      {
        icon: 'data:image/png;base64,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',
        title: '奈飞小铺',
        desc: '业内最大的奈飞账号及其他流媒体服务账号合租平台',
        link: 'https://ihezu.love/UKTer6'
      }
    ]
  },
  {
    title: '优质机场推荐',
    items: [
      {
        // icon: "https://theovan.wiki/yh.png",
        title: '一元机场',
        desc: '一元机场是 2022 年创立的机场，由于价格便宜到「离谱」，现今风头正盛，可以说现在的名气不亚于当年跑路的速蛙云。甚至有好事者创立了「一元机场」的百度贴吧。',
        link: 'https://一元机场.click/#/register?code=tFcXfJEu'
      },
      {
        // icon: "https://theovan.wiki/yh.png",
        title: '飞鸟机场',
        desc: 'FlyingBird 飞鸟机场是一家成立于2022年的新机场，支持 Shadowsocks 协议，小众精品，节点不多，全 IPLC 专线机场。',
        link: 'https://fbaff01.flyb-aff01.com/auth/register?code=RZP3'
      },
      {
        // icon: "https://theovan.wiki/yh.png",
        title: 'Bridge the Wise',
        desc: '其名字来源于 People’s Daily 的名言：智者建桥，愚者建墙，他们最开始接触的中国电影并不好看，同时也很理解下载资源很不方便的奈飞，所以他们就建立了一个中转机场，只为了能够给国内的同胞们提供便捷的观看服务。',
        link: 'https://patriot.ninja/aff.php?aff=1471'
      }
    ]
  },
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      }
    ]
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com'
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai'
      }
    ]
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com'
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design'
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs'
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org'
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org'
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org'
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN'
      }
    ]
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org'
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com'
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant'
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui'
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com'
      }
    ]
  },
  {
    title: 'JavaScript 框架类库',
    items: [
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev'
      },
      {
        // icon: 'https://simpleicons.org/icons/jquery.svg',
        icon: '/icons/jquery.svg',
        title: 'jQuery API 中文文档',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://jquery.cuishifeng.cn'
      }
    ]
  },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com'
      },
      {
        icon: 'https://notes.fe-mm.com/icons/tailwindcss.png',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: '小程序相关',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        icon: '/icons/taro.svg',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://taro.jd.com'
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn'
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn'
      }
    ]
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn'
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com'
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com'
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN'
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn'
      }
    ]
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        icon: 'https://notes.fe-mm.com/icons/antv.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/'
      },
      {
        icon: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org'
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org'
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org'
      }
    ]
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com'
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev'
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com'
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build'
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn'
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io'
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs'
      }
    ]
  },
  {
    title: '站点生成器',
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org'
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN'
      }
    ]
  },
  {
    title: '图标库',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn'
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official'
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji 表情大全',
        link: ''
      }
    ]
  },
  {
    title: '前端学习资料',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN'
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com'
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6 入门教程',
        desc: '阮一峰的网络日志',
        link: 'http://es6.ruanyifeng.com'
      }
    ]
  },
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com'
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn'
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com'
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com'
      },
      {
        title: '博客园',
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: '/icons/cnblogs.svg',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com'
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn'
      }
    ]
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc'
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: 'https://v.qq.com'
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        // desc: '',
        link: 'https://www.bilibili.com'
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com'
      },
      {
        icon: '/icons/twitter.svg',
        title: 'Twitter',
        // desc: '',
        link: 'https://twitter.com'
      },
      {
        icon: '/icons/pixiv.png',
        title: 'Pixiv',
        // desc: '',
        link: 'https://www.pixiv.net'
      }
    ]
  }
]
