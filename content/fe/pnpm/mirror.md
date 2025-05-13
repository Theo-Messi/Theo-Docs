---
title: pnpm 切换镜像及恢复默认源 | 使用国内镜像加速安装
head:
  - - meta
    - name: description
      content: 学习如何使用 pnpm 切换国内镜像源，提升 Node.js 包管理速度，并恢复到默认源。
  - - meta
    - name: keywords
      content: pnpm 镜像切换 恢复默认源 npm 国内镜像 包管理 加速安装
---

### 验证当前NPM源地址

```sh
pnpm config get registry
```

### 国内镜像

::: code-group

```sh [腾讯云]
pnpm config set registry http://mirrors.cloud.tencent.com/npm/
```

```sh [淘宝]
pnpm config set registry https://registry.npmmirror.com
```

```sh [华为云]
pnpm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

:::

### 恢复默认源

```sh
pnpm config set registry=https://registry.npmjs.org
```

### 通过使用淘宝定制的cnpm安装

```sh
pnpm install -g cnpm --registry=https://registry.npmmirror.com   # 安装cnpm
cnpm install xxx    # 使用cnpm
```
