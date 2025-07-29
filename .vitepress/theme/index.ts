/// <reference types="vite/client" />
import { useRoute } from 'vitepress'
import imageViewer from 'vitepress-plugin-image-viewer'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import * as lm from '@theojs/lumen'
import '@theojs/lumen/style'
import { Aside_Data, Footer_Data } from '../data'
import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(lm.Notice),
      'aside-ads-before': () => h(lm.Aside, { Aside_Data }),
      'layout-bottom': () => h(lm.Footer, { Footer_Data })
    })
  },

  enhanceApp: ({ app }) => {
    lm.umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'doc.theojs.cn'
    })
    app.component('Home', lm.Underline)
    app.component('Pill', lm.Pill)
    app.component('Links', lm.Links)
    app.component('Copy', lm.CopyText)
  },

  setup() {
    const route = useRoute()
    imageViewer(route, '.vp-doc', {
      navbar: true,
      toolbar: true,
      filter: (img: HTMLImageElement) => {
        const noViewer = !img.hasAttribute('data-no-viewer')
        if (noViewer) img.style.cursor = 'zoom-in'
        return noViewer
      }
    })
  }
}
