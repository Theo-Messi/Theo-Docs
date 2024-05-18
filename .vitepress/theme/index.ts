// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import Layout from './Layout.vue'
import { inject } from '@vercel/analytics'

import '@shikijs/vitepress-twoslash/style.css'
import './styles/index.css'

inject()

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }: EnhanceAppContext, ctx) => {
    app.use(TwoslashFloatingVue)
    googleAnalytics({ id: 'G-6QN23XNMXB' })
  },
  Layout
}
