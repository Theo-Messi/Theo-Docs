---
title: 安装 AdGuardHome
head:
  - - meta
    - name: description
      content: AdGuardHome 是一款 DNS 过滤器，支持广告拦截、隐私保护等功能
  - - meta
    - name: keywords
      content: AdGuardHome ESXi 虚拟机 虚拟化 X86 64 PVE
---

## 安装 AdGuardHome

### 新建虚拟主机

**新建exsi虚拟主机，2CPU 2G内存 10G硬盘**

![新建虚拟机](https://i.theojs.cn/docs/20231230203658.webp '新建虚拟机')

**使用ubuntu x64 镜像**

![使用ubuntu x64 镜像](https://i.theojs.cn/docs/20231230203757.webp '使用ubuntu x64 镜像')

### 官方一键安装脚本

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

### 安装完成

安装完成之后访问地址为 http://ip:3000/ ,此为ubuntu的静态IP地址+3000端口号

![AdGuardHome](https://i.theojs.cn/docs/20231230204830.webp '访问 http://ip:3000/')

## 配置 AdGuardHome

### 端口配置

- 网页管理界面监听端口为 `80`
- DNS服务器监听端口为 `53`

### 设置账号密码

![AdGuardHome](https://i.theojs.cn/docs/20231230205626.webp '设置账号密码')

### 常规设置 部分

![AdGuardHome](https://i.theojs.cn/docs/20231230205838.webp '常规设置 部分')

### DNS 设置

#### 上游 DNS 服务器

```md
tls://dot.360.cn
https://doh.360.cn/dns-query
tls://dns.pub
https://dns.pub/dns-query
tls://dns.alidns.com
https://dns.alidns.com/dns-query
tls://dns.ipv6dns.com
https://dns.ipv6dns.com/dns-query
```

#### BootStrap DNS 服务器地址

```md
1.1.1.1:53
114.114.114.114:53
119.29.29.29
223.5.5.5
180.76.76.76
2400:3200::1
2400:da00::6666
240C::6666
```

### 过滤器设置

```md
halflife
https://raw.githubusercontent.com/o0HalfLife0o/list/master/ad.txt

anti-AD
https://anti-ad.net/easylist.txt

neoHosts
https://cdn.jsdelivr.net/gh/neoFelhz/neohosts@gh-pages/full/hosts.txt

大圣净化 - 针对国内视频网站
https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts

adgk手机去广告规则
https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt

广告终结者
http://sub.adtchrome.com/adt-chinalist-easylist.txt

Adbyby
https://raw.githubusercontent.com/adbyby/xwhyc-rules/master/lazy.txt

EasyList China+EasyList
https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt

EasyPrivacy
https://easylist-downloads.adblockplus.org/easyprivacy.txt
```

## 配置 OpenWrt

### 接口 - Lan - 基本设置

**使用自定义的DNS服务器:** `AdGuardHome ip`

![AdGuardHome](https://i.theojs.cn/docs/20231230210932.webp 'Lan口设置')

### 接口 - Lan - 高级设置 - DHCP - 高级设置

**DHCP选项:** `6,+ AdGuardHome ip`

![AdGuardHome](https://i.theojs.cn/docs/20231230211121.webp 'Lan口设置')

### 接口 - Wan - 高级设置

**使用自定义的DNS服务器:** `AdGuardHome ip`

![AdGuardHome](https://i.theojs.cn/docs/20231230211412.webp 'Wan口设置')

## 扩容 AdGuardHome

### 首先使虚拟机处于关闭状态,然后点击编辑

修改内存为 25 GB 保存并开启虚拟机

![AdGuardHome](https://i.theojs.cn/docs/20231231142111.webp '扩容 AdGuardHome')

### SSH连接到 AdGuardHome

```sh
df -h
```

![AdGuardHome](https://i.theojs.cn/docs/20231231142451.webp 'SSH连接到 AdGuardHome')

### 挂载扩容硬盘

```sh
fdisk /dev/sda
d
2
n
回车(默认)
回车(默认)
y
wq
```

### 格式化硬盘

```sh
resize2fs /dev/sda2
```

### 查看结果

```sh
df -h
```
