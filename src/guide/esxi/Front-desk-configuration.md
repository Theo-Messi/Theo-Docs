---
title: ESXI前台配置
---

## 步骤 1 - 给电脑分配 IP

我们将网线一头插到软路由的 eth0 口，另外一端插到电脑上

因为 ESXi 没有 DHCP(Dynamic Host Configuration Protocol, 动态主机配置协议) 功能，没办法给电脑自动分配 IP 地址

这里要手动修改一下,将电脑 ip 修改为同网段下

## 步骤 2 - 访问 WEB 端

在 PC 端，输入之前后台配置的 IP 地址，访问 ESXI Web 管理端，我配置的是 10.10.0.254

## 步骤 3 - 开启自动启动策略

![](https://m.theovan.xyz/img/v2-e508b300fc8fa1eff4e7de8b4904500a_1440w.webp)

## 步骤 4 - 电源管理中，启用高性能

![](https://m.theovan.xyz/img/v2-84959304493c26da1a90ca881f456064_1440w.webp)

## 步骤 5 - 网络设置

#### 1. 虚拟交换机，系统默认带了一个虚拟交换机，需要再继续添加其余三个

![](https://m.theovan.xyz/img/v2-29987dd12070b29205393e18f227d234_1440w.webp)

#### 2. 例如 vSwitch0 虚拟交换绑定的上行链路为物理网卡 0 口

![](https://m.theovan.xyz/img/v2-8f38d0f1f3edaa89d4343e3f9dde17c2_1440w.webp)

#### 3. 同理，vSwitch1 虚拟交换绑定的上行链路为物理网卡 1 口，按照这个逻辑，将剩余的网口一次绑定到独立的虚拟交换机上

![](https://m.theovan.xyz/img/v2-e3ebe6f441baa56cda13c3f07c2cdb45_1440w.webp)

#### 4. 每一个 vSwitch 虚拟交换中的安全选项中，都需要开启混杂模式、MAC 地址变更、伪传输。如果不开启会出现问题，造成网卡间不能通讯，网络故障等。

![](https://m.theovan.xyz/img/20230927203137.png)

#### 5. 虚拟交换机维护完毕后，回到端口组，对应添加四个虚拟网络。

![](https://m.theovan.xyz/img/20230927203201.png)

#### 6. 例如 VM Network 绑定交换机 vSwitch0,VM Network1 绑定交换机 vSwitch1。

![](https://m.theovan.xyz/img/20230927203241.png)
![](https://m.theovan.xyz/img/20230927203306.png)

#### 7. 最终的效果就是物理网卡 0 口，通过 vSwitch0 虚拟交换机绑定到 VM Network 虚拟网络上，最后虚拟机使用 VM Network 虚拟网络进行通信

![](https://m.theovan.xyz/img/20230927203344.png)
