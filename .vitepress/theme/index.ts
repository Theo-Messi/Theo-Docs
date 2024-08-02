import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext, useRoute } from 'vitepress'
import { h } from 'vue'

import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocVideoLink,
  Announcement
} from 'tmfe/vue'
import { DocAsideLogo, HomeUnderline } from './components'
import '@shikijs/vitepress-twoslash/style.css'
import 'tmfe/scss/all.scss'
import 'viewerjs/dist/viewer.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
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
