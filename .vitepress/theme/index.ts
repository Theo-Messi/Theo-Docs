// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import googleAnalytics from 'vitepress-plugin-google-analytics'

import './styles/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp: (ctx) => {
    googleAnalytics({
      id: 'G-6QN23XNMXB'
    })
  },
  Layout
}
