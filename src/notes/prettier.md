---
title: 为项目添加 Prettier 格式化代码
head:
  - - meta
    - name: description
      content: 记录为项目添加 Prettier 格式化代码的过程
---

## 安装 Prettier

::: code-group

```shell [pnpm]
pnpm add --save-dev --save-exact prettier
```

```shell [npm]
npm install --save-dev --save-exact prettier
```

```shell [yarn]
yarn add --dev --exact prettier
```

:::

## 创建 Prettier 配置文件

新建`.prettierrc.yml` 配置如下

```yaml
semi: false
singleQuote: true
printWidth: 80
trailingComma: none
```

## 创建 Prettier 忽略文件

新建 `.prettierignore` 配置如下

```
\*.vue
dist
pnpm-lock.yaml
cache
template
temp
!CHANGELOG.md
.temp
```

## 使用 Prettier 格式化所有文件

::: code-group

```shell [pnpm]
pnpm exec prettier . --write
```

```shell [npm]
npx prettier . --write
```

```shell [yarn]
yarn prettier . --write
```

:::

## 配置 commit 自动格式化

#### **安装 `simple-git-hooks` 和 `lint-staged` 插件**

```zsh
pnpm install simple-git-hooks lint-staged
```

#### **配置 `package.json`**

```json
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": [
      "prettier --write --ignore-unknown"
    ]
  }
```
