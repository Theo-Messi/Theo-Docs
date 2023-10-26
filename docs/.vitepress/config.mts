import { defineConfig } from 'vitepress'
import { algolia, head } from './configs'
import locales from './locales'

// 导出默认配置
export default defineConfig({
  locales: locales.locales,
  themeConfig: {
    // algolia搜索
    algolia
  },
  // 源目录
  srcDir: 'src',

  // 网站头部
  head,

  // 站点地图
  sitemap: {
    hostname: 'https://theovan.xyz',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  }
})
