// .vitepress/theme/index.ts */
import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'

import './styles/index.scss'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-6QN23XNMXB'
    })
  }
}
