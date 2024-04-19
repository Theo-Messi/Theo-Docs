---
title: VitePress 打造个人前端导航网站
head:
  - - meta
    - name: keywords
      content: VitePress,个人前端导航网站,导航网站
  - - meta
    - name: description
      content: VitePress 打造个人前端导航网站
---

### 第 1 步 - 修改index.ts

**在 `.vitepress/theme` 目录下新建 `index.ts` 文件**

<<< ../../../.vitepress/theme/index.ts

### 第 2 步 - 添加页面和样式

**在 `src` 目录下新建 `nav.md`**

<<< ../../nav.md

### 第 3 步 - **`src`目录下新建`nav`文件夹用于存放下列文件**

### 第 4 步 - **在 `src/nav` 目录下新建 `types.ts`**

<<< ../.././nav/types.ts

### 第 5 步 - **在 `src/nav` 目录下新建 `nav.scss`**

<<< ../../nav/nav.scss

### 第 6 步 - **在 `src/nav` 目录下新建 `data.ts`**

<<< ../../nav/data.ts

### 第 7 步 - **在 `.vitepress/theme/components` 目录下新建 `MNavLink.vue`**

<<< ../../../.vitepress/theme/components/MNavLink.vue

### 第 8 步 - **在 `.vitepress/theme/components` 目录下新建 `MNavLinks.vue`**

<<< ../../../.vitepress/theme/components/MNavLinks.vue
