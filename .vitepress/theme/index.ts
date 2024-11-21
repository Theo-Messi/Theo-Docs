import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { h } from 'vue'

import imageViewer from 'vitepress-plugin-image-viewer'
import {
  DocBox,
  DocLinks,
  DocBoxCube,
  DocVideoLink,
  Announcement,
  DocAsideLogo,
  HomeUnderline,
  HomeFooter,
  Twikoo,
  ShareButton,
  googleAnalytics,
  umamiAnalytics
} from '@theojs/lumen'
import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'
import '@theojs/lumen/theme'
import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h(Twikoo, { Twikoo_Data }),
      'aside-outline-before': () => h(ShareButton)
    })
  },
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-6QN23XNMXB' })
    umamiAnalytics({
      id: '775bf77b-37be-4ede-bffa-79f6cda45f94',
      src: 'https://umami.theojs.cn/script.js'
    })
    app.component('Home', HomeUnderline)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Vid', DocVideoLink)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
