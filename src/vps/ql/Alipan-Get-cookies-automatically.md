---
title: 自动获取-refresh_token
head:
  - - meta
    - name: description
      content: 阿里云盘自动获取refresh_token教程
---

### 自动获取

<Links :items="[
{ name: '登录阿里云盘', icon:'https://i.theovan.cn/logo/alipan.svg',link: 'https://www.aliyundrive.com/drive/' },
]" />

```sh
# 控制台粘贴
copy(JSON.parse(localStorage.token).refresh_token); console.log(JSON.parse(localStorage.token).refresh_token);
```

![](https://github.com/mrabit/aliyundriveDailyCheck/raw/master/assets/refresh_token_1.png)
