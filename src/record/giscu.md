---
title: VitePress 添加 Giscu评论
---

## 安装

::: code-group

```sh [npm]
npm i vitepress-plugin-comment-with-giscus
```

```sh [pnpm]
pnpm i vitepress-plugin-comment-with-giscus
```

```sh [yarn]
yarn add vitepress-plugin-comment-with-giscus
```

:::

## 创建 index 文件

在`.vitepress/theme` 下创建`index.js` 或者`index.ts`文件

## 配置 index.ts

<<< @/code/giscus.ts

## giscus 获取参数

[giscus 配置获取](https://giscus.app/zh-CN)

## 拓展使用

如果文章前言添加以下代码，则不会生成评论区

```md
---
comment: false
---
```
