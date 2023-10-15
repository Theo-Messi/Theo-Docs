---
title: 插件版
---

## 浏览器要求：

- Chrome 浏览器（谷歌）
- 新版 Edge 浏览器
- 国产百分浏览器-CentBrower

电脑浏览器打开京东网址： [https://m.jd.com/](https://m.jd.com/)

## Chrome 类浏览器安装**EditThisCookie**插件

- Chrome 插件商店搜[`EditThisCookie`](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?utm_source=chrome-ntp-icon)进行安装
- 仅使用百分浏览器，谷歌浏览器测试过，其他谷歌类浏览器请自行测试。
- 无法登录 Chrome 插件商店或者打不开网址建议使用 Edge Chrome 版。

## Edge Chrome 浏览器安装 Cookie Editor 插件

- Edge 插件商店搜[`Cookie Editor`](https://microsoftedge.microsoft.com/addons/detail/cookie-editor/ajfboaconbpkglpfanbmlfgojgndmhmc?hl=zh-CN)  完成插件安装

## 现在点击回到京东触屏版

- 点击`EditThisCookie/Cookie Editor`，
- 点击搜索，输入`key`或`pin`，
- 如下图所示的`pt\_key`，复制`pt\_key`的`value`值。此插件可以看到 Cookie 的有效期。

![](https://m.theovan.xyz/img/20230910183701.png)

## 按照以下格式形成自己的 jd_cookie

- `pt_key`=复制插件搜索出来的 key 值
- `pt_pin`=复制插件搜索出来的 pin 值
- 后面的英文引号`;`是必须要的

参考京东 cookie 具体示例：
 `pt_key=jdDC2F833333EFDGTCE5BD4AD1A952D4F4DF84A46052;pt_pin=jd_123456;`

:::tip
如果需获取第二个京东账号的 cookie,不要在刚才的浏览器上面退出登录账号一(否则刚才获取的 cookie 会失效)
需另外换一个浏览器(Chrome 浏览器  `ctr+shift+n`  打开无痕模式也行),然后继续按上面步骤操作即可
:::
