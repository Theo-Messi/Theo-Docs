---
title: 固件平台介绍
head:
  - - meta
    - name: description
      content: 华硕路由器固件平台介绍，包含hnd、axhnd、axhnd.675x、p1axhnd.675x等平台的介绍
  - - meta
    - name: keywords
      content: fancyss 科学上网 插件 388 386 梅林 华硕 官改 固件 clash v2ray trojan
---

从2016年华硕发布RT-AC86U后，华硕的博通机型进入了新一台的平台，为==hnd==平台的机型，hnd是英文==high end==的简称，hnd机型最大的特点就是固件的后缀是.w，其次是固件的内核比较新（> 4.1）；

## hnd

hnd平台主要使用博通BCM4906/4908作为CPU，wifi芯片主要使用BCM4365E（2G），BCM4366E（2G/5G）这类WiFi5芯片，固件封装上采用了.w格式，固件rootfs分区为UBI分区，其余分区仍然为JFFS2分区格式。hnd平台的linux内核为：4.1.27。

## axhnd

在进入WiFi6时代后，华硕就开始使用==hnd==平台的升级版本：==axhnd==平台，axhnd平台就是在原来的hnd平台基础上引入WiFi6支持。所以，axhnd平台的路由器通过更换WiFi芯片，引入BCM43684 Wi-Fi芯片实现Wi-Fi 6的支持。axhnd平台的linux内核为：4.1.51。

## axhnd.675x

然后为了引入armv7 SoC BCM675x的支持，使用了==axhnd.675x==平台，axhnd.675x平台最大的特点就是不在使用独立的CPU，而是使用了armv7的SoC，该SoC会同时兼具CPU的数据处理和WiFi芯片的任务，比如BCM6750 SoC，其不仅能提供1条2x2 Wi-Fi 6空间流，同时还内置了一颗三核心的ARM-A7核心。axhnd.675x平台另一个特点就是其固件分区（bootfs，rootfs）是纯UBI格式的，固件分区不再含有任何JFFS2格式的分区了。axhnd平台的linux内核为：4.1.52。

## p1axhnd.675x

该平台的特点就是axhnd和axhnd.675x综合体，p1axhnd.675x和axhnd一样采用独立CPU而不是axhnd.675x的SoC，p1axhnd.675x和axhnd.675x一样，采用了纯UBI格式的固件分区。p1axhnd.675x平台的linux内核和axhnd.675x一样，为：4.1.52。目前华硕有两款机型是p1axhnd.675x平台：RT-AX86U和RT-AX68U，情况如下表。

| p1axhnd.675x机型 |   CPU   |             2.4G             |              5.2G               | 无线规格 |
| :--------------: | :-----: | :--------------------------: | :-----------------------------: | :------: |
|     RT-AX86U     | BCM4908 | BCM6710 (3\*3@40MHz 861Mbps) | BCM43684 (4\*4@160mHZ 4804Mbps) |  AX5700  |
|     RT-AX68U     | BCM4906 | BCM6710 (3\*3@40MHz 861Mbps) |  BCM6710 (3\*3@80MHz 1800Mbps)  |  AX2700  |
