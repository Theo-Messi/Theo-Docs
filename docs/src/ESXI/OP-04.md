---
title: OpenWrt扩容内存
---

## 1.把固件刷入到 ESXi 里的虚拟机里

可以看到，只有 120.5MB，确实太小了，这个时候，不要启动 OpenWRT

![](https://m.theovan.xyz/img/2022112001.png)

直接在硬盘那里，改容量大小，自己想改多少都行，然后保存，启动 OpenWRT

![](https://m.theovan.xyz/img/2022112002.png)

## 2.安装软件，登录 ssh 到 OpenWRT：

```bash
opkg update && opkg install cfdisk fdisk lsblk block-mount
```

或者在软件包里一个一个的安装也可以，安装完以后重启一下

## 3.用命令`cfdisk`来把刚才多出来的空间创建出来，输入:`cfdisk`

会出现下面的界面，绿色的 Free Space，用键盘上下选中，回车，新建，写入，退出。
![](https://m.theovan.xyz/img/2022112003.png)

## 4.会多一个/dev/sda3 的空间出来，这个就是刚才新建的

![](https://m.theovan.xyz/img/2022112004.png)

## 5.格式化这个新建的空间：mkfs.ext4 /dev/sda3

## 6.进入挂载点，新建挂载

![](https://m.theovan.xyz/img/2022112005.png)

## 7.把刚才新建的挂载到 overlay 就可以了，重启。如果用的是 ESXi，请在 Openwrt 里点重启，不要在 ESXi 里关闭电源那样重启。

![](https://m.theovan.xyz/img/2022112030.png)
![](https://m.theovan.xyz/img/2022112006.png)

## 8.空间变大了

![](https://m.theovan.xyz/img/2022112007.png)
