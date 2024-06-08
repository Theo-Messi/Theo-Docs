// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext, useRoute } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { inject } from '@vercel/analytics'
import AsideSponsors from './components/pendant.vue'
import { h, onMounted, watch, nextTick } from 'vue'
import mediumZoom from 'medium-zoom'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
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
    app.use(NolebaseGitChangelogPlugin, {
      mapAuthors: [
        {
          name: 'Theo',
          username: 'Theo-messi',
          mapByNameAliases: ['Theo', 'vanhiupun'],
          mapByEmailAliases: ['fanxiaobin422@gmail.com', 'fanxiaobin422@sina.com', '771720405@qq.com']
        },
        {
          name: 'dependabot',
          username: 'dependabot',
          mapByEmailAliases: ['49699333+dependabot[bot]@users.noreply.github.com']
        }
      ]
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
