---
title: 安装 Windows 11
head:
  - - meta
    - name: description
      content: ESXi 虚拟机 虚拟化 X86 64 PVE Openwrt Windows11 Windows10 Windows12
---

<Links :items="[
{ name: '官网下载 Windows 11', icon:'logos:microsoft-windows-icon', color:'#0078D6', link: 'https://www.microsoft.com/zh-cn/software-download/windows11' },
]" />

## 选择创建新的虚拟机

![install Windows11](https://i.theojs.cn/docs/20240421192959.png '创建新的虚拟机')

![install Windows11](https://i.theojs.cn/docs/20240421193033.png '创建新的虚拟机')

此选项将指导您完成创建新虚拟机的过程。您可以自定义处理器、内存、网络连接和存储。创建之后您需要安装客户机操作系统。

![install Windows11](https://i.theojs.cn/docs/20240421193110.png '填写虚拟机的相关信息')

![install Windows11](https://i.theojs.cn/docs/20240421193200.png '选择虚拟机存储位置')

![install Windows11](https://i.theojs.cn/docs/20240421193238.png '配置虚拟机的内存，CPU等')

## 开启虚拟机

![install Windows11](https://i.theojs.cn/docs/20240421193304.png)

![install Windows11](https://i.theojs.cn/docs/20240421193558.png)

![install Windows11](https://i.theojs.cn/docs/20240421193618.png)

::: tip 全新安装Windows 11跳过TPM检查
**如果你是从微软官方下载的 ISO 镜像则在 `提示需要输入密钥阶段` 进入到命令提示符**

在 Windows 11 安装界面按 `Shift + F10` 打开命令行界面

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
![install Windows11](https://i.theojs.cn/docs/20240421194515.png)

![install Windows11](https://i.theojs.cn/docs/20240421194619.png)

![install Windows11](https://i.theojs.cn/docs/20240421194638.png '选择自定义')

![install Windows11](https://i.theojs.cn/docs/20240421194724.png '直接下一步系统会自动分区 安装完会自动重启即可')
