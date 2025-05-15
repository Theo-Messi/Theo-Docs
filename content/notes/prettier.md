---
title: 为项目添加 Prettier 及规范提交信息工具
head:
  - - meta
    - name: description
      content: 记录为项目添加 Prettier 格式化代码及规范提交信息工具的过程，提升代码一致性和提交规范。
  - - meta
    - name: keywords
      content: Prettier 格式化代码 项目设置 代码风格 提交信息规范 commitizen cz-vinyl commitlint
---

## 1. 配置 Prettier 格式化代码

### 安装 Prettier 及相关插件

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

### Prettier 配置

新建 `.prettierrc.yaml` 配置如下

<<< @/../.prettierrc.yaml

### 创建 Prettier 忽略文件

新建 `.prettierignore` 配置如下

<<< @/../.prettierignore{md}

### 使用 Prettier 格式化所有文件

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

### 配置 commit 自动格式化

#### 安装 simple-git-hooks 和 lint-staged 插件

```zsh
pnpm install simple-git-hooks lint-staged
```

#### 配置 package.json 示例

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

## 2. 安装 cz-vinyl 和 commitizen 并配置

::: code-group

```shell [pnpm]
pnpm add --save-dev cz-vinyl commitizen
# 或者本地全局安装
pnpm add -g cz-vinyl commitizen
```

```shell [npm]
npm install --save-dev cz-vinyl commitizen
# 或者本地全局安装
npm install -g cz-vinyl commitizen
```

```shell [yarn]
yarn add --dev cz-vinyl commitizen
# 或者本地全局安装
yarn global add cz-vinyl commitizen
```

:::

:::details 查看本地全局安装配置

1. 在用户主目录创建 `.czrc` 配置文件，指定适配器路径

```sh
echo '{ "path": "cz-vinyl" }' > ~/.czrc
```

2. 给 `cz` 命令设置别名，指向 `git-cz`（cz-vinyl 的执行命令）：

```sh
echo 'alias cz="git-cz"' >> ~/.zshrc
source ~/.zshrc
```

这样你可以直接通过 `cz` 命令启动交互式提交

:::

### 配置 package.json 示例

```json
{
  "config": {
    "commitizen": {
      "path": "cz-vinyl"
    }
  },
  "scripts": {
    "cz": "git-cz"
  }
}
```

### cz-vinyl 选项配置示例

```ts [czvinyl.config.ts]
import type { CzVinylConfig } from 'cz-vinyl'

const config: CzVinylConfig = {
  headerFormat: '{type}{scope}: {subject}',
  bodyFormat: '{body}',
  commitTypes: [
    { value: 'feat', description: '新增功能' },
    { value: 'fix', description: '修复缺陷' },
    { value: 'docs', description: '文档更新' },
    { value: 'style', description: '代码格式（不影响功能，例如空格、分号等）' },
    {
      value: 'refactor',
      description: '重构代码（既不是新增功能，也不是修复 bug）'
    },
    { value: 'perf', description: '性能优化' },
    { value: 'test', description: '增加测试' },
    { value: 'chore', description: '构建过程或辅助工具变动' }
  ],
  maxCommitLineWidth: 72,
  typeQuestion: '请选择提交类型:',
  scopeQuestion: '请选择修改范围（可选）:',
  skipScope: false,
  scopes: ['', 'types', 'hooks', 'utils', 'components', 'views', 'store'],
  ticketIdQuestion: '请输入关联的任务号（可选）:',
  skipTicketId: true,
  subjectQuestion: '请简要描述提交内容（必填）:',
  subjectMaxLength: 50,
  subjectMinLength: 5,
  bodyQuestion: '请输入详细描述（可选）:',
  skipBody: true,
  skipBreakingChanges: true,
  issuesQuestion: '请输入要关闭的issue（可选，例如:#1）:',
  skipIssues: false,
  openAiToken: null
}

export default config
```

## 3. 安装及配置 commitlint 校验工具

### 安装 commitlint 及 Husky 集成

::: code-group

```shell [pnpm]
pnpm add --save-dev @commitlint/cli @commitlint/config-conventional @commitlint/types husky
pnpm husky install

# 在package.json中配置脚本
npm pkg set scripts.commitlint="commitlint --edit"
echo "pnpm commitlint \${1}" > .husky/commit-msg
```

```shell [npm]
npm install --save-dev @commitlint/cli @commitlint/config-conventional @commitlint/types husky
npx husky install

# 在package.json中配置脚本
npm pkg set scripts.commitlint="commitlint --edit"
echo "npm run commitlint \${1}" > .husky/commit-msg
```

```shell [yarn]
yarn add --dev @commitlint/cli @commitlint/config-conventional @commitlint/types husky
yarn husky install

# 在package.json中配置脚本
npm pkg set scripts.commitlint="commitlint --edit"
echo "yarn commitlint \${1}" > .husky/commit-msg
```

:::

### commitlint 配置示例

新建 `commitlint.config.ts` 文件
::: code-group

```ts [commitlint.config.ts]
import type { UserConfig } from '@commitlint/types'

const config: UserConfig = {
  extends: ['@commitlint/config-conventional']
}

export default config
```

```js [commitlint.config.js]
export default { extends: ['@commitlint/config-conventional'] }
```

:::

### CI 校验提交信息

GitHub Actions 示例，自动检查提交信息规范

```yml [.github/workflows/commitlint.yml]
name: CI

on: [push, pull_request]

jobs:
  commitlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install required dependencies
        run: |
          sudo apt update
          sudo apt install -y sudo
          sudo apt install -y git curl
          curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash -
          sudo DEBIAN_FRONTEND=noninteractive apt install -y nodejs
      - name: Print versions
        run: |
          git --version
          node --version
          npm --version
          npx commitlint --version
      - name: Install commitlint
        run: |
          npm install conventional-changelog-conventionalcommits
          npm install commitlint@latest

      - name: Validate current commit (last commit) with commitlint
        if: github.event_name == 'push'
        run: npx commitlint --last --verbose

      - name: Validate PR commits with commitlint
        if: github.event_name == 'pull_request'
        run: npx commitlint --from ${{ github.event.pull_request.base.sha }} --to ${{ github.event.pull_request.head.sha }} --verbose
```
