import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext, useRoute } from 'vitepress'
import { h } from 'vue'
import { inject } from '@vercel/analytics'

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import DocAsideLogo from './components/DocAsideLogo.vue'
import HomeUnderline from './components/HomeUnderline.vue'
import DocBox from './components/DocBox.vue'
import DocLinks from './components/DocLinks.vue'
import DocBoxCube from './components/DocBoxCube.vue'
import DocVideoLink from './components/DocVideoLink.vue'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'

import '@shikijs/vitepress-twoslash/style.css'
import './styles/index.scss'
import 'viewerjs/dist/viewer.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

inject()

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(DocAsideLogo)
    })
  },
  enhanceApp: ({ app }: EnhanceAppContext, ctx) => {
    googleAnalytics({ id: 'G-6QN23XNMXB' })
    app.component('vImageViewer', vImageViewer)
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('VideoLink', DocVideoLink)
    app.use(TwoslashFloatingVue)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
