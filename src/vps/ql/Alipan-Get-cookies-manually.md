---
title: 手动获取-refresh_token
head:
  - - meta
    - name: description
      content: 阿里云盘 refresh_token 手动获取
---

### 手动获取

<Links :items="[
{ name: '登录阿里云盘', icon:'https://i.theojs.cn/logo/alipan.svg',link: 'https://www.aliyundrive.com/drive/' },
]" />

- 在`开发者工具` -> `Application` -> `Local Storage` 中的 `token` 字段中找到。
- 注意：不是复制整段 `JSON` 值，而是 `JSON` 里 `refresh_token` 字段的值，如下图所示红色部分：

![aliyundrive](https://github.com/mrabit/aliyundriveDailyCheck/raw/master/assets/refresh_token_2.png '手动获取-refresh_token')
