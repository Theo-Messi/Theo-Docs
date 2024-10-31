---
title: PicGo + Github 搭建图床
head:
  - - meta
    - name: description
      content: PicGo Github 图床 图片上传 图片压缩 图片存储 图片加速 图片管理 图片上传工具 图片压缩工具 图片存储工具 图片加速工具 图片管理工具 图片上传工具 图片压缩工具 图片存储工具 图片加速工具 图片管理工具
---

:::tip 准备工作

- **[注册 Github 账号](https://github.com/)**
- **[下载 PicGo ](https://molunerfinn.com/PicGo/)**
  :::

## 创建新仓库

![PicGo](https://i.theojs.cn/docs/20230902143628.png '仓库必须是 `public` 的，否则存储的图片不能正常访问。')

## 生成 Token

- [生成 Token](https://github.com/settings/tokens)
- 点击左侧的 `Tokens（classic）`
- 再点击 `Generate new token（classic）`

![PicGo](https://i.theojs.cn/docs/20230902144325.png '填写`Note`，勾选`repo`，点击生成`Token`')

:::tip 注意
**生成的 token 只会在这里显示一次，记得单独保存下来。**
:::

## 配置 PicGo

:::tip 配置 PicGo

- `图床配置名`:随意填写
- `设定仓库名`:为刚设置的存储库
- `设定分支名`:存储库的分支名
- `设置Token`:创建的 Token
- `设定存储路径`:可以设置为文件夹,如: `img/` ;也可忽略
  :::

![PicGo](https://i.theojs.cn/docs/20230902150820.png '配置 PicGo')

## 配置 [imgbot](https://github.com/apps/imgbot) 无损压缩图片

![PicGo](https://i.theojs.cn/docs/20240102215655.png '配置 [imgbot](https://github.com/apps/imgbot) 无损压缩图片')

然后选择 **Open Source** (也就是免费的那个方案)，然后点击 **Install it for free**

检查一下订单，点击 **Complete order and begin installation**

![PicGo](https://i.theojs.cn/docs/20240102215814.png '确认一下 ImgBot 可以访问的仓库 (默认 All)，以及授予给 ImgBot 的权限，点击 **Install**')

### 设置 ImgBot 频率与压缩方式

ImgBot 默认是无损压缩的，可以按需进行配置为有损压缩，对文件大小进一步压榨。配置方法是在根目录下添加 `.imgbotconfig` 文件

目前有三个配置项：

提交 PR 的频率：`"schedule"`
选项：`daily` | `weekly` | `monthly`
排除的文件：`"ignoredFiles"`

选项：被排除文件的路径，支持通配符\*
是否使用有损压缩方式 (压缩率更高)：`"aggressiveCompression"`

选项：`true` | `false`
以下是较为完整的例子：

```json
{
  "schedule": "daily", // daily|weekly|monthly
  "ignoredFiles": [
    "*.jpg", // ignore by extension
    "image1.png", // ignore by filename
    "public/special_images/*" // ignore by folderpath
  ],
  "aggressiveCompression": "true" // true|false
}
```

还有更多配置项，完整说明请见 [官方文档](https://imgbot.net/docs/#configuration)。

### Github Actions 自动合并 ImgBot 的 pr

上传图片后，很快 ImgBot 就会对图片进行压缩，并在 github 的仓库中发起一个 pull request。手动点击合并按钮对我来说实在是太麻烦了，能不能自动搞呢。有了 actions 没啥不能的，

在 github actions 配置新增一个文件 `.github/workflows/merge.yml`。

```yaml
name: Merge Imgbot

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
    name: imgbot
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

### 设置仓库 Github Actions 权限

在仓库的设置中，找到 Github Actions 选项，点击 `Actions - General` 选项卡，勾选 `Read and write permissions`

![PicGo](https://i.theojs.cn/docs/20240102223146.png)

![PicGo](https://i.theojs.cn/docs/20240102223417.png '设置仓库 Github Actions 权限')

## GitHub Proxy 加速访问(二选一)

在 PicGo 图床配置中添加如下自定义域名即可；

`https://ghp.ci/https://github.com/GitHub用户名/仓库名/raw/分支名`

例如：`https://ghp.ci/https://github.com/Theo-Messi/pic/raw/main`

## Vercel/Netlify 加速访问(二选一)

**使用 GitHub 账户登陆** [Vercel](https://vercel.com/)

![PicGo](https://i.theojs.cn/docs/20240102212030.png '添加项目')

![PicGo](https://i.theojs.cn/docs/20240102212537.png '导入图床仓库')

![PicGo](https://i.theojs.cn/docs/20240102212624.png '部署项目')

![PicGo](https://i.theojs.cn/docs/20240102213512.png '配置自定义域名')

![PicGo](https://i.theojs.cn/docs/20240102214339.png '复制域名添加到picgo')
