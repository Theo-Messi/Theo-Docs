---
title: VitePress实现单击图片放大
---

## 安装medium-zoom

```shell
pnpm i medium-zoom
```

## 配置index.js/index.ts

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
      // mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
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

## 配置index.css

```css
/* .vitepress/theme/index.css */

.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}
```

## markdown图片配置

```md
// docs/index.md

![](path/to/file.jpg){data-zoomable}
```

## 或者全局启用

```js
// .vitepress/theme/index.js

...
mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
...
```
