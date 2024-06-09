---
title: 使用 Vercel CLI
head:
  - - meta
    - name: keywords
      content: Vercel CLI
  - - meta
    - name: description
      content: Vercel CLI
---

### 安装

::: code-group

```sh [pnpm]
pnpm i -g vercel
```

```sh [yarn]
yarn global add vercel
```

```sh [npm]
npm i -g vercel
```

:::

### 更新

::: code-group

```sh [pnpm]
pnpm i -g vercel@latest
```

```sh [yarn]
yarn global add vercel@latest
```

```sh [npm]
npm i -g vercel@latest
```

:::

## 登录 Vercel

安装完 CLI 后，你需要登录到你的 Vercel 账户。
登录命令：在终端运行以下命令

```sh
vercel login
```

## 使用 Vercel CLI

- 进入你的项目目录：`cd path/to/your/project`
- 运行部署命令：`vercel`

#### 查看部署历史

```sh
vercel ls [project-name]
```

#### 查看部署详情

```sh
vercel inspect [deployment-url]
```

#### 查看实时日志

```sh
vercel logs [deployment-url]
```

#### 其他常用命令

- `vercel env`：管理环境变量。
- `vercel domains`：管理域名。
- `vercel secrets`：管理机密信息。
- `vercel help`：获取更多帮助信息。

## 使用 Vercel CLI 部署项目

### 1. 本地 Build 部署到 Vercel

```sh
vercel build
vercel deploy --prebuilt
```

### 2. 本地 Build 部署后正式上线

```sh
vercel build --prod
vercel deploy --prod --prebuilt
```

### 3. Vercel Build

```sh
vercel deploy
```

### 4. Vercel Build 后正式上线

```sh
vercel deploy --prod
```
