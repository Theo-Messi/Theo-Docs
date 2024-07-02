---
title: 官改/梅林固件 常用命令集合
head:
  - - meta
    - name: description
      content: fancyss 科学上网 插件 388 386 梅林 华硕 官改 固件 clash v2ray trojan 常用命令
---

### 软件中心重置

- 开启路由器SSH功能后，通过putty、xshell等SSH软件连接路由器，直接在ssh客户端内运行下面的程序即可。

```sh
koolshare-reset
```

### 清空JFFS空间

- 注意，此操作会删除jffs分区内的所有文件，包括但不限于：软件中心、安装的证书、TrafficAnalyzer的数据库、自定义的设备图标等

```sh
kill -9 $(pidof skipd)
cd /jffs && rm -r .[a-zA-Z_]* *
reboot
```

### 删除软件中心

- 适用于官改固件刷回原厂固件，需要删除留在jffs分区内软件中心，而不删除其它文件；
- 如果是在官改固件下删除软件中心，路由器重启后软件中心会重新初始化为最初状态。

```sh
kill -9 $(pidof skipd)
cd /jffs && rm -rf .asusrouter .koolshare db ksdb config/* etc/profile
reboot
```

### 重启软件中心

- 当软件中心相关进程挂掉的时候，此时可以用ssh进入路由器后台，输入以下命令重启软件中心：

```sh
sh /koolshare/perp/perp.sh
```

### 查询坏块命令

```sh
dmesg |grep "bad block"
```
