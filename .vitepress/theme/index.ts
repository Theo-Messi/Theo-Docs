/// <reference types="vite/client" />
import { useRoute } from 'vitepress'

import imageViewer from 'vitepress-plugin-image-viewer'
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import { Aside, Footer, Links, Notice, Pill, Underline, umamiAnalytics } from '@theojs/lumen'
import '@theojs/lumen/style'

import { Aside_Data, Footer_Data } from '../data'

import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Notice),
      'aside-ads-before': () => h(Aside, { Aside_Data }),
      'layout-bottom': () => h(Footer, { Footer_Data })
    })
  },

  enhanceApp: ({ app }) => {
    umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'doc.theojs.cn'
    })
    app.component('Home', Underline)
    app.component('Pill', Pill)
    app.component('Links', Links)
  },

  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
