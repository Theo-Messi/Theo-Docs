---
title: 提示检测非法关键词
head:
  - - meta
    - name: description
      content: fancyss 科学上网 插件 388 386 梅林 华硕 官改 固件 clash v2ray trojan 非法关键词
---

## 提示检测非法关键词

如果提示检测到离线安装包名有非法关键词，开启路由器的 SSH 功能，登录并输入以下命令后，再进行离线安装。(arm380/X7.x 版本固件需要请将软件中心更新到 1.4.8 及以上)

```sh
sed -i 's/\tdetect_package/\t# detect_package/g' /koolshare/scripts/ks_tar_install.sh
```

**如果更新了梅林 386 改版固件，状态出现双:x:的，请使用离线装功能覆盖安装一次科学上网插件。**
