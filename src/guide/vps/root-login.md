---
title: 开启 Root 登陆
---

### 取得 Root 权限

先从浏览器打开或者 SSH 工具连接服务器，登陆成功之后输入一下命令

```bash
sudo -i #切换到root
passwd #修改密码
```

### 修改 ssh 配置文件

```bash
vi /etc/ssh/sshd_config #编辑文件
PermitRootLogin yes #默认为no，需要开启root用户访问改为yes
PasswordAuthentication yes #默认为no，改为yes开启密码登陆
```

:::tip
按`i`进入编辑模式，按`esc`退出，输入`:wq`保存
:::

### 重启服务器

```bash
reboot    #重启服务器
```
