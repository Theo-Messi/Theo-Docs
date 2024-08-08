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
  Announcement,
  DocAsideLogo,
  HomeUnderline
} from '@theo-messi/tm-fe'
import { Aside_Data } from '../data/AsideData'
import '@shikijs/vitepress-twoslash/style.css'
import '@theo-messi/tm-fe/theme'
import 'viewerjs/dist/viewer.min.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data })
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
