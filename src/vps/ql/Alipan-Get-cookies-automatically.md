---
title: 自动获取-refresh_token
head:
  - - meta
    - name: keywords
      content: 阿里云盘 refresh_token 自动获取 脚本
  - - meta
    - name: description
      content: 阿里云盘自动获取refresh_token教程
---

### 自动获取

<div style="margin-top: 10px">

<Links
  l="https://www.aliyundrive.com/drive/"
  i='https://i.theovan.cn/logo/alipan.svg'
  t="登录阿里云盘"/>

</div>

```sh
# 控制台粘贴
copy(JSON.parse(localStorage.token).refresh_token); console.log(JSON.parse(localStorage.token).refresh_token);
```

![](https://github.com/mrabit/aliyundriveDailyCheck/raw/master/assets/refresh_token_1.png)
