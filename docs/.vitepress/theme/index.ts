// .vitepress/theme/index.ts */
import { h, watch, onMounted, nextTick } from 'vue'
import { useData, EnhanceAppContext, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { inject } from '@vercel/analytics'

inject()
import './custom.css'
import './custom-blocks.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'
import './index.css'

let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  setup() {
    // 获取当前路由
    const route = useRoute()
    // 初始化缩放
    const initZoom = () => {
      // 设置图片缩放
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
      // 设置图片缩放
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    // 组件加载完成时执行
    onMounted(() => {
      initZoom()
    })
    // 监听路由变化，当路由变化时执行initZoom函数
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
