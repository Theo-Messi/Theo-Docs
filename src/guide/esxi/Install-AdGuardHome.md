---
title: 安装 AdGuardHome
head:
  - - meta
    - name: keywords
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
  - - meta
    - name: description
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
---

## 新建虚拟主机

**新建exsi虚拟主机，2CPU 2G内存 10G硬盘**

![](https://m.theovan.xyz/img/20231230203658.png)

**使用ubuntu x64 镜像**

![](https://m.theovan.xyz/img/20231230203757.png)

## 官方一键安装脚本

::: code-group

```sh [安装]
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

```sh [重装]
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v -r
```

```sh [卸载]
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v -u
```

:::

:::tip 使用此方式安装成功后，默认就是开机自启 #以下为一些操作指令

```sh
sudo /opt/AdGuardHome/AdGuardHome -s start|stop|restart|status|install|uninstall
```

:::

## 安装完成

安装完成之后访问地址为 http://ip:3000/ ,此为ubuntu的静态IP地址+3000端口号

![](https://m.theovan.xyz/img/20231230204830.png)
