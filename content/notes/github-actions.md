---
title: GitHub Actions 工作流程
head:
  - - meta
    - name: description
      content: 整理 GitHub Actions 工作流程，帮助您高效自动化项目构建、测试与部署过程。
  - - meta
    - name: keywords
      content: GitHub Actions 工作流程 自动化 项目构建 测试 部署 自动化工作流
---

## 自动化部署到腾讯云 COS

### 获取 API 密钥

**腾讯云控制台 - 访问管理 - 创建 API 密钥或者子用户**

- 子用户权限策略 - `QcloudCOSDataFullControl`
- 获取 `SecretId` 和 `SecretKey`

### 获取 COS 桶信息

**腾讯云控制台 - 对象存储 - 存储桶 - 基本配置**

- 空间名（Bucket） - xxx-xxxxxx
- 所属地域（Region） - ap-shanghai

### 配置 Secrets

**GitHub 仓库 - Settings - Secrets**

添加上文创建的 `SecretId` `SecretKey` `Bucket` `Region`

### 创建workflow

**GitHub 仓库 - Actions - Set up a workflow yourself**

- 创建 `sync.yml`
- 提交sync.yml后,检测到 push 后将会自动 Upload 到腾讯云 COS

```yaml
name: sync to cos

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Install coscmd
        run: sudo pip install coscmd
      - name: Configure coscmd
        env:
          SECRET_ID: ${{ secrets.SecretId }}
          SECRET_KEY: ${{ secrets.SecretKey }}
          BUCKET: ${{ secrets.Bucket }}
          REGION: ${{ secrets.Region }}
        run: coscmd config -a $SECRET_ID -s $SECRET_KEY -b $BUCKET -r $REGION
      - name: Upload
        run: coscmd upload -rfs --delete ./ / --ignore "./.git/*"
```

## Fork 仓库后定时拉取原项目 Commits

```yaml
name: Merge-upstream

on:
  push:
    branches:
      - master
  schedule:
    - cron: 40 16 * * *

jobs:
  merge:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@master
        with:
          ref: master
          fetch-depth: 0
          lfs: true

      - name: Set git identity
        run: |
          git config --global user.email "xxx@xxx.com"
          git config --global user.name "xxxxx"
      - name: Load upstream commits
        run: git pull https://github.com/xxxxxx/xxxxxx.git --no-edit --strategy-option ours

      - name: Push Commits
        env:
          DOWNSTREAM_BRANCH: master
        run: git push origin $DOWNSTREAM_BRANCH
```

## 自动同步 fork 上游仓库

修改以下git config信息和upstream上游仓库,并设置cron定时同步或本人star仓库触发同步.

```yaml
name: Merge upstream branches
on:
  push:
  schedule:
    - cron: '0 18 * * *'
  watch:
    types: [started]
jobs:
  merge:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - uses: actions/checkout@v2.3.5
      - name: Merge upstream
        run: |
          git config --global user.name 'name'
          git config --global user.email 'name@email.com'
          git pull --unshallow
          git remote add upstream https://github.com/xxxxx/xxxxx.git
          git fetch upstream
          git checkout main
          git merge --no-edit upstream/main
          git push origin main
          git fetch upstream --tags
          git push --tags
```

## 自动构建和上传镜像

```yaml
name: Build and push Docker images for ubuntu

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Build and push Docker images
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: stilleshan/xxxxx
          tags: latest
          path: xxxx/
```

## 自动合并拉取请求

将其中的 `imgbot[bot]` 修改成需要自动合并的作者

```yaml
name: Merge pull request

on:
  pull_request:
    types:
      - opened
      - ready_for_review
  pull_request_review:
    types:
      - submitted
  status: {}

jobs:
  imgbot:
    name: Merge pull request
    runs-on: ubuntu-latest
    permissions: write-all
    if: ${{ github.actor == 'imgbot[bot]' && github.event_name == 'pull_request'}}
    steps:
      - name: Enable auto-merge for imgbot PRs
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
