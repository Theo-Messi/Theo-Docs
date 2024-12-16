import { useRoute } from 'vitepress'

import imageViewer from 'vitepress-plugin-image-viewer'
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import {
  Announcement,
  DocAsideLogo,
  DocBox,
  DocBoxCube,
  DocLinks,
  DocPill,
  DocVideoLink,
  HomeFooter,
  HomeUnderline,
  ShareButton,
  Twikoo,
  googleAnalytics,
  umamiAnalytics
} from '@theojs/lumen'
import '@theojs/lumen/theme'

import { Aside_Data, Footer_Data, Twikoo_Data } from '../data'

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
    app.component('Pill', DocPill)
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
