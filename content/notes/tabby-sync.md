---
title: Tabby 配置同步（第三方插件+gist）
head:
  - - meta
    - name: description
      content: Tabby 配置同步（第三方插件+gist）
---

## 安装插件

首先，到 `Tabby` 扩展界面安装 `cloud-settings-sync`

![Tabby](https://i.theojs.cn/docs/202404281755529.webp '安装插件')

## 新建 Github token

访问 **Github token** 页面 <Pill name="生成 Token" link="https://github.com/settings/tokens" icon="oui:token-key"  />

![Tabby](https://i.theojs.cn/docs/202404281757509.webp '新建 Github token')

![Tabby](https://i.theojs.cn/docs/202404281758078.webp '勾选 gist 保存')

## 配置 cloud-settings-sync

![Tabby](https://i.theojs.cn/docs/202404281801350.webp '配置 cloud-settings-sync')

如上图，粘贴 `github token` 后，点击测试，就能自动创建 `gist` 了。

测试没问题后，手动打开同步，上传完工。

其他平台只要安装相同的插件，并设置一下 `github token` 与 `gist id`，就可以下载配置了。
