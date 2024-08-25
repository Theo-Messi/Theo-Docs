---
title: VitePress实现单击图片放大
head:
  - - meta
    - name: description
      content: VitePress实现单击图片放大
---

## 1. medium-zoom

```shell
pnpm i medium-zoom
```

### 配置index.js/index.ts

```ts
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

import './index.css'

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
import DefaultTheme from 'vitepress/theme'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import { useRoute } from 'vitepress'

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
