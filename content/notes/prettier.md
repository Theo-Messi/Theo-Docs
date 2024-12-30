---
title: 为项目添加 Prettier 格式化代码
head:
  - - meta
    - name: description
      content: 记录为项目添加 Prettier 格式化代码的过程
---

## 安装 Prettier 及插件

::: code-group

```shell [pnpm]
pnpm add --save-dev --save-exact prettier @trivago/prettier-plugin-sort-imports prettier-plugin-jsdoc prettier-plugin-packagejson prettier-plugin-sort-json
```

```shell [npm]
npm install --save-dev --save-exact prettier @trivago/prettier-plugin-sort-imports prettier-plugin-jsdoc prettier-plugin-packagejson prettier-plugin-sort-json
```

```shell [yarn]
yarn add --dev --exact prettier @trivago/prettier-plugin-sort-imports prettier-plugin-jsdoc prettier-plugin-packagejson prettier-plugin-sort-json
```

:::

## Prettier 配置

新建 `.prettierrc.yaml` 配置如下

<<< @/../.prettierrc.yaml

## 创建 Prettier 忽略文件

新建 `.prettierignore` 配置如下

<<< @/../.prettierignore

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
{
  "lint-staged": {
    "*": ["prettier --write --ignore-unknown"]
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  }
}
```
