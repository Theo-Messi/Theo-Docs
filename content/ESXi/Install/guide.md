---
title: ESXi 8.0 安装指南
head:
  - - meta
    - name: description
      content: ESXi 虚拟机 虚拟化 X86 64 PVE
---

## 准备工作

- ESXi 8 安装文件
- 写盘工具
- StarWind V2V Converter 程序

### ESXi 8 安装文件

注意，你需要注册一个 `VMWare` 的 `customer connect账号`

注册登录完毕后，就可以下载 60 天试用版的 ESXi8.0

可直接下载 ISO 镜像即可，如果你需要封装驱动，那就下载 `Offline Bundle离线捆绑包`

<Links :items="[
{ name: 'ESXi 官网下载', link: 'https://www.broadcom.cn/', image: 'https://i.theojs.cn/logo/ESXi.png' },
]" />

### 写盘工具

<Box :items="[
{ name: 'Ventoy',link: 'https://github.com/ventoy/Ventoy/releases',image: 'https://i.theojs.cn/logo/ventoy.png',  tag: '官网下载' },
{ name: 'Balenaetcher',link: 'https://etcher.balena.io/', image: 'https://i.theojs.cn/logo/Balenaetcher.png',  tag: '官网下载' }
]"/>

### StarWind V2V Converter 程序

该程序用于将 OP 固件 VMDK 文件转换为 ESXi 8.0 的存储格式

如果直接用 VMDK，ESXi 8.0 将无法挂载镜像。

下载需要填写邮箱，下载地址会发送到你的邮箱里。

<Links :items="[
{ name: 'StarWind V2V Converter 官网下载', link: 'https://www.starwindsoftware.com/starwind-v2v-converter',image:'https://www.starwindsoftware.com/resource-library/wp-content/uploads/2022/02/favicon-16.png'  },
]" />

## ESXi写盘

### Ventoy 写盘

- U 盘插入 PC
- 电脑运行 Ventoy2Disk.exe
- Ventoy 配置选项中将分区类型改为 GPT,安全启动支持打勾

### Balenaetcher 写盘

- U 盘插入 PC
- 电脑运行 Balenaetcher
- 从文件烧录-选择 U 盘-现在烧录

## 主板BIOS设置

### 步骤 1 - 进入 BIOS 设置，

开机按 `del`/`esc`

### 步骤 2 - 开启 VT-x

进入 `BIOS` 后，首先打开 `处理器的虚拟化`（即 `VT-x`）。

> VT-x 是 intel 运用 Virtualization 虚拟化技术中的一个指令集。提供 X86 平台的硬件辅助虚拟化解决方案。能够将单台电脑软件环境分割为多个独立分区，每个分区均可以按照需要模拟电脑的一项技术。将多种系统整合到一台服务器或电脑中，使同一个物理平台能够同时运行多个同类或不同类的操作系统，以分别作为不同业务和应用的支撑平台。

### 步骤 3 - 开启 VT-d

> 英特尔定向 I/O 虚拟化技术 (VT-d) 是英特尔虚拟化技术 (VT) 的扩展，它向硬件提供虚拟化解决方案协助。英特尔 VT-d 能帮助用户提高系统的安全性和可靠性，并改善 I/O 设备在虚拟化环境中的性能。这些都从本质上帮助 IT 管理人员通过减少潜在的停机时间而降低总拥有成本；并通过更充分地利用数据中心资源而增大生产性吞吐量。

### 步骤 4 - 开启 AES

> **AES 指令集**：高级加密标准指令集（英特尔高级加密标准新指令，简称 AES-NI）是一个 x86 指令集架构的扩展，用于 Intel 和 AMD 微处理器，由 Intel 在 2008 年 3 月提出。该指令集的目的是改进应用程序使用 高级加密标准（AES）执行加密和解密的速度，可以提高出国留学的速度。

### 步骤 5 - 开启睿频加速技术

在 `CPU 技术设置选项`中，找到 `Intel Turbo Mode Tech` 选项，有的主板可能会显示 `Intel Turbo Boost Tech`。至于 `C-STATE` 就先不开了。

> C-STATE 是 CPU 的电源管理功能，它会根据 CPU 的负载来管理 CPU 的能耗，和睿频加速技术结合，在运行单线程应用时，C-STATE 会关闭或降低其他核心的能耗，把这些能源加到执行程序的核心上提高 CPU 的执行效率。
> C-STATE 的模式从 C0 开始，C0 表示 “正常” 的 CPU 运行模式（CPU 已 100% 激活）。C 后的数字越大，表示 CPU 进入休眠模式的程度越深。换言之，关闭的电路和时钟信号越多，完全唤醒 CPU 进入 C0 模式需要的时间越长。

### 步骤 6 - 设置 USB 启动

在 `BOOT` 里把 `U盘` 设置为第一启动项。

## ESXi 开始引导

:::tip 注意
看到跑码界面，马上按键盘上的 Shift+O,在屏幕下方删除多余命令，手工录入命令
:::

```sh
cdromBoot runweasel autoPartitionOSDataSize=4096
```

注意区分大小写。录入完成后回车继续。

这个命令的意思是安装 ESXi 时，系统占用空间为 4096MB,也就是 4GB，如果不录入该命令，ESXi8.0 默认会让 VMFSL 系统分区占用 100 多个 G，可用的 VMFS 就没多少了。当然如果你的 R1 硬盘足够大，不录入也可以

## ESXi 扫描磁盘

后续安装，ESXi 会扫描磁盘，选择硬盘，之后设置 root 账号的密码，确认安装信息，最后重启设备

## ESXi后台配置

安装完成后，会进入一个后台配置界面。

按 `F2` 进入后台配置界面，输入 root 账号密码，挑个网口作为管理口，与 PC 机连接

### 配置 - Configure Management Network

![install ESXi](https://i.theojs.cn/docs/v2-e4aff21e700228ae0ec283e9847089b1_1440w.webp '配置 - Configure Management Network')

#### 1. 选择`Network Adapters`,配置管理口

![install ESXi](https://i.theojs.cn/docs/v2-d4053e9e9c9effc2d55f8a9027c9d0b2_1440w.webp '配置管理口')

#### 2. 进入后会发现，其中一个网卡状态为 `connected` ，就是接入网线的网口

:::danger 注意
**此处只能选择一个网口作为管理口，不要选择多个**
:::

#### 3. 选择 vmnic3 网口，空格为选择或取消，配置完成回车保存，esc 退回上级菜单，有可能会提示你是否保存，选择是即可

### 配置 - IPv4 Configuration

![install ESXi](https://i.theojs.cn/docs/v2-6000431802b9b7f1ef8c2ecc11f3ff8f_1440w.webp 'IPv4 Configuration')

#### 1.选择静态 IP，配置为你网络环境中的内网网段 IP 即可

#### 2.一般配置为 `孤僻IP` ，可随意配置，网关为你路由器的 IP

![install ESXi](https://i.theojs.cn/docs/v2-42a37dc2ded65a10cadf32f33968deb5_1440w.webp '配置网络信息')

#### 3.如果将 `Openwrt` 做入 `ESXi` 中的话，就配置为 `Openwrt` 路由的 IP

比如我的固件 `Openwrt` 的默认 IP 为 `10.10.0.253` ，那么此处 `Gateway` 网关就填入 `10.10.0.253` .
最后 `esc` 退出，会弹出确认提示，Y 即可。

## ESXi前台配置

### 步骤 1 - 给电脑分配 IP

我们将网线一头插到软路由的 eth0 口，另外一端插到电脑上

因为 ESXi 没有 DHCP(Dynamic Host Configuration Protocol, 动态主机配置协议) 功能，没办法给电脑自动分配 IP 地址

这里要手动修改一下,将电脑 ip 修改为同网段下

### 步骤 2 - 访问 WEB 端

在 PC 端，输入之前后台配置的 IP 地址，访问 ESXi Web 管理端，我配置的是 10.10.0.254

### 步骤 3 - 开启自动启动策略

![install ESXi](https://i.theojs.cn/docs/v2-e508b300fc8fa1eff4e7de8b4904500a_1440w.webp '开启自动启动策略')

### 步骤 4 - 电源管理中，启用高性能

![install ESXi](https://i.theojs.cn/docs/v2-84959304493c26da1a90ca881f456064_1440w.webp '启用高性能')

### 步骤 5 - 网络设置

![install ESXi](https://i.theojs.cn/docs/v2-29987dd12070b29205393e18f227d234_1440w.webp '虚拟交换机，系统默认带了一个虚拟交换机，需要再继续添加其余三个')

![install ESXi](https://i.theojs.cn/docs/v2-8f38d0f1f3edaa89d4343e3f9dde17c2_1440w.webp '例如 vSwitch0 虚拟交换绑定的上行链路为物理网卡 0 口')

![install ESXi](https://i.theojs.cn/docs/v2-e3ebe6f441baa56cda13c3f07c2cdb45_1440w.webp '同理，vSwitch1 虚拟交换绑定的上行链路为物理网卡 1 口，按照这个逻辑，将剩余的网口一次绑定到独立的虚拟交换机上')

![install ESXi](https://i.theojs.cn/docs/20230927203137.png '每一个 vSwitch 虚拟交换中的安全选项中，都需要开启混杂模式、MAC 地址变更、伪传输。如果不开启会出现问题，造成网卡间不能通讯，网络故障等。')

![install ESXi](https://i.theojs.cn/docs/20230927203201.png '虚拟交换机维护完毕后，回到端口组，对应添加四个虚拟网络。')

![install ESXi](https://i.theojs.cn/docs/20230927203241.png)

![install ESXi](https://i.theojs.cn/docs/20230927203306.png '例如 VM Network 绑定交换机 vSwitch0,VM Network1 绑定交换机 vSwitch1。')

![install ESXi](https://i.theojs.cn/docs/20230927203344.png '最终的效果就是物理网卡 0 口，通过 vSwitch0 虚拟交换机绑定到 VM Network 虚拟网络上，最后虚拟机使用 VM Network 虚拟网络进行通信')
