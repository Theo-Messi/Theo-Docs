---
title: 浏览器版
---

## 浏览器要求：

- Chrome 浏览器（谷歌）
- 新版 Edge 浏览器
- 国产百分浏览器-CentBrower
- 国产 360、QQ 浏览器切换到极速模式

电脑浏览器打开京东网址： [https://m.jd.com/](https://m.jd.com/)

## 步骤一

- 按 F12 打开开发者工具
- 然后点下图中的图标，切换到触屏版界面浏览

![](https://m.theovan.xyz/img/20230910183043.png)

## 步骤二

- 此时是未登录状态(**建议使用手机短信验证码登录**)，如已登录请忽略此步骤
- 使用手机短信验证码登录(此方式 cookie 有效时长大概 31 天，其他登录方式比较短)

## 步骤三

- 登录后，选择**Network**,有很多链接的话点箭头这里清空下

![](https://m.theovan.xyz/img/20230910183211.png)

## 步骤四

- 点击`我的`

![](https://m.theovan.xyz/img/20230910183240.png)

## 步骤五

- 点击`log.gif`进去
- **找到 Cookie，复制出来，新建一个 TXT 文本临时保存一下，下面需要用到 。**

![](https://m.theovan.xyz/img/20230910183306.png)

## 步骤六

- 复制 cookie
- 复制出来的 cookie 比较长，我们只需要`pt_pin=xxxx;`和  `pt_key=xxxx;`
- 部分的内容即可(注:英文引号`;`是必要的)。可以用下面的脚本，在 Chrome 浏览器按 F12，console 里面输入下面脚本按 enter 回车键

```bash
    var CV = '单引号里面放第六步拿到的完整cookie';
    var CookieValue = CV.match(/pt_pin=.+?;/) + CV.match(/pt_key=.+?;/);
    copy(CookieValue);
```

这样子整理出关键的的 cookie 已经在你的剪贴板上， 可直接粘贴

:::tip
如果需获取第二个京东账号的 cookie,不要在刚才的浏览器上面退出登录账号一(否则刚才获取的 cookie 会失效)
需另外换一个浏览器(Chrome 浏览器  `ctr+shift+n`  打开无痕模式也行),然后继续按上面步骤操作即可
:::
