// .vitepress/theme/index.js
import { useData, useRoute } from 'vitepress'

import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // ...
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = useData()
    const route = useRoute()

    // 评论组件 - https://giscus.app/
    giscusTalk(
      {
        repo: 'xxxxxx/xxxxxx', //仓库地址
        repoId: 'xxxxxx', //仓库ID
        category: 'General', // 默认: `General`
        categoryId: 'xxxxxx', //分类ID
        mapping: 'title', // 默认: `pathname`
        strict: '0',
        reactionsEnabled: '0',
        emitMetadata: '0',
        inputPosition: 'top', // 默认: `top`
        lang: 'zh-CN' // 默认: `zh-CN`
      },
      {
        frontmatter,
        route
      }
    )
  }
}
