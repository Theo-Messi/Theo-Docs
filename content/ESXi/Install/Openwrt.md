---
title: 安装 Openwrt
head:
  - - meta
    - name: description
      content: ESXi 虚拟机 虚拟化 X86 64 PVE Openwrt
---

### 步骤 1 - 选择虚拟机选项卡，点击创建/注册虚拟机

![install Openwrt](https://i.theojs.cn/docs/20230927203810.png '创建/注册虚拟机')

### 步骤 2 -选择创建类型

- 如果有 IOS 文件可以直接选择创建新虚拟机
- 有 `OVA/OVF/VDMK` 文件可以选择直接 `从 OVA 或 OVF 文件部署虚拟机`
- 之前已经有虚拟机可以选择 `注册现有虚拟机`

![install Openwrt](https://i.theojs.cn/docs/20230927203845.png '选择创建类型')

### 步骤 3 -选择名称和客户机操作系统

- 名称随意
- 兼容性: `ESXi 8.0 虚拟机`
- 操作系统: `Linux`
- 操作系统版本: `其他 5.x 或更高版本 Linux(64 位)`

![install Openwrt](https://i.theojs.cn/docs/20230927203850.png '选择名称和客户机操作系统')

### 步骤 4 -自定义设置

- 删掉硬盘
- 删掉 CD 驱动器( `如果有 IOS 文件不需要删除` )

![install Openwrt](https://i.theojs.cn/docs/20230927203939.png '自定义设置')

### 步骤 5 -网络适配器

- 添加网络设配器，将其余三个虚拟网络添加上，每个适配器类型选择 VMXNET 3 万兆类型
- 网卡直通:添加其他设备 - PCI 设备 - 选择对应直通网卡

![install Openwrt](https://i.theojs.cn/docs/20230927204000.png '网络适配器')

### 步骤 6 -虚拟机选项

- 引导选项:UEFI 安全引导取消掉。
- 由于我们用的是 EFI 固件，引导模式默认 EFI 就可以了
- `注意:如果有 IOS 文件此步骤可以省略`

![install Openwrt](https://i.theojs.cn/docs/20230927204017.png '虚拟机选项')

### OpenWrt 扩容内存

#### 1.把固件刷入到 ESXi 里的虚拟机里

![install Openwrt](https://i.theojs.cn/docs/2022112001.png '可以看到，只有 120.5MB，确实太小了，这个时候，不要启动 OpenWRT')

![install Openwrt](https://i.theojs.cn/docs/2022112002.png '直接在硬盘那里，改容量大小，自己想改多少都行，然后保存，启动 OpenWRT')

#### 2.安装软件，登录 ssh 到 OpenWRT：

```bash
opkg update && opkg install cfdisk fdisk lsblk block-mount
```

或者在软件包里一个一个的安装也可以，安装完以后重启一下

#### 3.用命令 `cfdisk` 来把刚才多出来的空间创建出来，输入: `cfdisk`

![install Openwrt](https://i.theojs.cn/docs/2022112003.png '界面中绿色的 Free Space，用键盘上下`选中，回车，新建，写入，退出`。')

#### 4.会多一个/dev/sda3 的空间出来，这个就是刚才新建的

![install Openwrt](https://i.theojs.cn/docs/2022112004.png 'OpenWrt 扩容内存')

#### 5.格式化这个新建的空间：mkfs.ext4 /dev/sda3

#### 6.进入挂载点，新建挂载

![install Openwrt](https://i.theojs.cn/docs/2022112005.png 'OpenWrt 扩容内存')

#### 7.把刚才新建的挂载到 overlay 就可以了，重启。如果用的是 ESXi，请在 Openwrt 里点重启，不要在 ESXi 里关闭电源那样重启。

![install Openwrt](https://i.theojs.cn/docs/2022112030.png 'OpenWrt 扩容内存')

![install Openwrt](https://i.theojs.cn/docs/2022112006.png 'OpenWrt 扩容内存')

#### 8.空间变大了

![install Openwrt](https://i.theojs.cn/docs/2022112007.png 'OpenWrt 扩容内存')
