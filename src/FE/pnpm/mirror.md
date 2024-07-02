---
title: pnpm 切换镜像及恢复默认源
head:
  - - meta
    - name: description
      content: pnpm npm 使用国内镜像及恢复默认源
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
