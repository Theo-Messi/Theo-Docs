---
title: pnpm 安装 | 快速管理 Node.js 包
head:
  - - meta
    - name: description
      content: 学习如何安装 pnpm，提升 Node.js 包管理效率，快速安装和管理依赖。
  - - meta
    - name: keywords
      content: pnpm 安装 Node.js 包管理 快速安装 依赖管理
---

![pnpm](https://i.theojs.cn/docs/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg 'pnpm')

## 安装

::: code-group

```bash [Windows]
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

```bash [NPM]
npm install -g pnpm
```

```bash [HomeBrew]
brew install pnpm
```

:::

## 更新

```bash
pnpm up                //更新所有依赖项
pnpm upgrade 包        //更新包
pnpm upgrade 包 --global   //更新全局包
```

## 设置存储路径

```bash
pnpm config set store-dir /path/to/.pnpm-store
```
