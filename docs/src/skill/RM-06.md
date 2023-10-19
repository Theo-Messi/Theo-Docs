---
title: pnpm 安装与使用
---

---

![](https://m.theovan.xyz/img/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg)

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

## 使用

### 设置源

```bash
# 查看源
pnpm config get registry
# 切换淘宝源
pnpm config set registry http://registry.npm.taobao.org
```

### 安装包

```bash
pnpm install [包]
pnpm i [包]
pnpm add [包]    # -S  默认写入dependencies
pnpm add -D     # -D devDependencies
pnpm add -g     # 全局安装
```

### 移除包

```bash
pnpm remove 包                            //移除包
pnpm remove 包 --global                   //移除全局包
```

### 更新

```bash
pnpm up                //更新所有依赖项
pnpm upgrade 包        //更新包
pnpm upgrade 包 --global   //更新全局包
```

### 设置存储路径

```bash
pnpm config set store-dir /path/to/.pnpm-store
```
