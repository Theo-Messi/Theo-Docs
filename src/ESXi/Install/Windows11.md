---
title: 安装 Windows 11
head:
  - - meta
    - name: keywords
      content: ESXi 虚拟机 虚拟化 X86 64 PVE Openwrt Windows11 Windows10 Windows12
  - - meta
    - name: description
      content: ESXi 虚拟机 虚拟化 X86 64 PVE Openwrt Windows11 Windows10 Windows12
---

<Links 
  l="https://www.starwindsoftware.com/starwind-v2v-converter"
  i='<svg t="1719407269517" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6517" ><path d="M74.873 70.383h416.025q4.424 0 4.424 4.424v416.025q0 4.423-4.424 4.423H74.873q-4.424 0-4.424-4.423V74.807q0-4.424 4.424-4.424z" fill="#0099FF" p-id="6518"></path><path d="M530.536 70.383h421.157q1.858 0 1.858 1.858v421.156q0 1.858-1.858 1.858H530.536q-1.858 0-1.858-1.858V72.241q0-1.858 1.858-1.858z" fill="#00D9FC" p-id="6519"></path><path d="M74.873 528.745h416.025q4.424 0 4.424 4.423v416.025q0 4.424-4.424 4.424H74.873q-4.424 0-4.424-4.424V533.168q0-4.423 4.424-4.423z" fill="#0053FF" p-id="6520"></path><path d="M530.536 528.745h421.157q1.858 0 1.858 1.858v421.156q0 1.858-1.858 1.858H530.536q-1.858 0-1.858-1.858V530.603q0-1.858 1.858-1.858z" fill="#00B1EF" p-id="6521"></path></svg>'
  t="官网下载 Windows 11 "
/>

## 选择创建新的虚拟机

![](https://i.theovan.cn/docs/20240421192959.png)

![](https://i.theovan.cn/docs/20240421193033.png)

此选项将指导您完成创建新虚拟机的过程。您可以自定义处理器、内存、网络连接和存储。创建之后您需要安装客户机操作系统。

填写虚拟机的相关信息

![](https://i.theovan.cn/docs/20240421193110.png)

选择虚拟机存储位置

![](https://i.theovan.cn/docs/20240421193200.png)

配置虚拟机的内存，CPU等

![](https://i.theovan.cn/docs/20240421193238.png)

## 开启虚拟机

![](https://i.theovan.cn/docs/20240421193304.png)

![](https://i.theovan.cn/docs/20240421193558.png)

![](https://i.theovan.cn/docs/20240421193618.png)

::: tip 全新安装Windows 11跳过TPM检查
**如果你是从微软官方下载的 ISO 镜像则在`提示需要输入密钥阶段`进入到命令提示符**

在 Windows 11 安装界面按`Shift + F10`打开命令行界面

1. **命令模式**

```sh
REG ADD HKLM\SYSTEM\Setup\LabConfig /v BypassTPMCheck /t REG_DWORD /d 1
REG ADD HKLM\SYSTEM\Setup\LabConfig /v BypassSecureBootCheck /t REG_DWORD /d 1
```

2. **注册表模式**

输入 `regedit` 进入注册表编辑器，然后定位到如下位置 `HKEY_LOCAL_MACHINE\SYSTEM\Setup`，创建一个名为 `“LabConfig”` 的项，接着在 `“LabConfig”` 下创建两个 `DWORD` 值：

键名 `“BypassTPMCheck”`，赋值 `“00000001”`

键名 `“BypassSecureBootCheck”`，赋值 `“00000001”`

**保存退出后，无法安装的提示就消失了。**
:::
![](https://i.theovan.cn/docs/20240421194515.png)

![](https://i.theovan.cn/docs/20240421194619.png)

选择自定义

![](https://i.theovan.cn/docs/20240421194638.png)

直接下一步系统会自动分区

![](https://i.theovan.cn/docs/20240421194724.png)

安装完会自动重启即可
