---
title: PicGo/PicList + Github 搭建图床
description: 使用 PicGo/PicList 和 Github 搭建图床，实现图片上传、压缩、存储、加速与管理，提升图床效率与稳定性。
---

# PicGo/PicList + Github 搭建图床

## 准备工作

<Links
  :grid="3"
  :items="[
    {
      icon: { icon: 'cib:github', color: { light: '#000', dark: '#fff' } },
      name: '注册 GitHub 账号',
      desc: '上传图片前需先拥有一个 GitHub 仓库',
      link: 'https://github.com/'
    },
    {
      image: 'https://molunerfinn.com/PicGo/imgs/256x256--icons.png',
      name: 'PicGo',
      desc: '用于快速上传图片并获取图片 URL 链接的工具',
      link: 'https://molunerfinn.com/PicGo/'
    },
    {
      image: 'https://pichoro.msq.pub/favicon/app_icon.png',
      name: 'PicList',
      desc: '高效的云存储和图床平台管理工具，基于 PicGo 深度二次开发',
      link: 'https://piclist.cn/'
    }
  ]"
/>

## 创建新仓库

![PicGo](https://i.theojs.cn/docs/20230902143628.webp '仓库必须是 `public` 的，否则存储的图片不能正常访问。')

## 生成 Token

- <Pill icon="oui:token-key" name="生成 Token" link="https://github.com/settings/tokens" />
- 点击左侧的 `Tokens（classic）`
- 再点击 `Generate new token（classic）`

![PicGo](https://i.theojs.cn/docs/20230902144325.webp '填写`Note`，勾选`repo`，点击生成`Token`')

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

![PicGo](https://i.theojs.cn/docs/20230902150820.webp '配置 PicGo')
