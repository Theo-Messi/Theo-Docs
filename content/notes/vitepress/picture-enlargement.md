---
title: VitePress实现单击图片放大
head:
  - - meta
    - name: description
      content: 学习如何在 VitePress 中实现单击图片放大功能，提升网站的用户体验。
  - - meta
    - name: keywords
      content: VitePress 图片放大 功能实现 用户体验 提升
---

## 1. medium-zoom

```shell
pnpm i medium-zoom
```

### 配置index.js/index.ts

```ts
// .vitepress/theme/index.js
import { useRoute } from 'vitepress'

import DefaultTheme from 'vitepress/theme'

import { nextTick, onMounted, watch } from 'vue'

import './index.css'

import mediumZoom from 'medium-zoom'

export default {
  ...DefaultTheme,

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
```

### 配置index.css

```css
/* .vitepress/theme/index.css */
/* 图片放大 */

.medium-zoom-overlay {
  z-index: 30;
}

.medium-zoom-image--opened {
  z-index: 31;
}
```

### markdown图片配置

```md
// docs/index.md

![VitePress](path/to/file.jpg){data-zoomable}
![VitePress](path/to/file.jpg)
```

## 2. vitepress-plugin-image-viewer

::: code-group

```sh [pnpm]
pnpm add vitepress-plugin-image-viewer
# 提示：如果使用 pnpm 安装，还需要额外安装 viewerjs
pnpm add viewerjs
```

```sh [npm]
npm i vitepress-plugin-image-viewer
```

```sh [yarn]
yarn add vitepress-plugin-image-viewer
```

:::

### 配置index.js/index.ts

```ts
import { useRoute } from 'vitepress'

import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import DefaultTheme from 'vitepress/theme'

import 'viewerjs/dist/viewer.min.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // 注册全局组件，如果你不想使用也可以不添加
    ctx.app.component('vImageViewer', vImageViewer)
    // ...
  },
  setup() {
    // 获取路由
    const route = useRoute()
    // 使用
    imageViewer(route)
  }
}
```
