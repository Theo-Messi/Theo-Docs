// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { inject } from '@vercel/analytics'
import AsideSponsors from './components/pendant.vue'
import { h } from 'vue'

import '@shikijs/vitepress-twoslash/style.css'
import './styles/index.css'

inject()

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(AsideSponsors)
    })
  },
  enhanceApp: ({ app }: EnhanceAppContext, ctx) => {
    app.use(TwoslashFloatingVue)
    googleAnalytics({ id: 'G-6QN23XNMXB' })
  }
}
