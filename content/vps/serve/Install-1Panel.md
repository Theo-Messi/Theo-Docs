---
title: 安装 1Panel 面板
head:
  - - meta
    - name: description
      content: 1Panel 是一个现代化、开源的 Linux 服务器运维管理面板。
---

## 产品介绍

1Panel 是一个现代化、开源的 Linux 服务器运维管理面板。

![1Panel](https://i.theojs.cn/docs/overview.png '1Panel - 服务器运维管理面板')

### 产品优势

- **高效管理**：用户可以通过 Web 图形界面轻松管理 Linux 服务器，实现主机监控、文件管理、数据库管理、容器管理等功能；
- **快速建站**：深度集成开源建站软件 WordPress 和 Halo，域名绑定、SSL 证书配置等操作一键搞定；
- **应用商店**：精选上架各类高质量的开源工具和应用软件，协助用户轻松安装并升级；
- **安全可靠**：基于容器管理并部署应用，实现最小的漏洞暴露面，同时提供防火墙和日志审计等功能；
- **一键备份**：支持一键备份和恢复，用户可以将数据备份到各类云端存储介质，永不丢失。

## 在线安装

::: tip **安装前请确保您的系统符合安装条件**：

- **操作系统**：支持主流 Linux 发行版本（基于 Debian / RedHat，包括国产操作系统）；
- **服务器架构**：x86_64、aarch64、armv7l、ppc64le、s390x；
- **内存要求**：建议可用内存在 1GB 以上；
- **浏览器要求**：请使用 Chrome、FireFox、IE10+、Edge等现代浏览器；
- **可访问互联网**。
  :::

::: code-group

```sh [RedHat / CentOS]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```

```sh [Ubuntu]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

```sh [Debian]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

:::

<Links
  :items="[
    {
      name: '1Panel GitHub release',
      desc: '现代化、开源的 Linux 服务器运维管理面板。',
      image: 'https://www.1panel.wiki/favicon.png',
      link: 'https://github.com/1Panel-dev/1Panel/releases'
    }
  ]"
/>

安装成功后，控制台会打印面板访问信息，可通过浏览器访问 1Panel：`http://目标服务器IP地址:目标端口/安全入口`

- 如果使用的是 `云服务器` ，请至 `安全组` 开放 `目标端口` 。
- `ssh` 登录 `1Panel` 服务器后，执行 `1pctl user-info` 命令可获取 `安全入口（entrance）`

安装成功后，可使用 `1pctl` 命令行工具来维护 1Panel

## 阿里云镜像安装

### 登录阿里云官方网站

在您的浏览器中打开 [阿里云的官方网站](https://www.aliyun.com) 并登录您的账号。

### 选择 ECS 实例

在阿里云管理控制台中，点击左侧菜单栏的 云服务器 ECS 选项。

### 创建 ECS 实例

点击页面上方的 创建实例 按钮，并按照以下步骤进行配置：

- 地域及可用区：选择适合您的地理位置和可用区域。
- 实例配置：选择适合您需求的实例规格和网络类型。
- 镜像：点击 云市场镜像 选项卡，然后在搜索框中输入 1Panel 并选择镜像。
- 存储：配置系统盘和数据盘的大小和类型。
- 网络和安全组：根据您的需求配置网络和安全组。
- 其他选项：根据您的需求配置其他选项。
- 确认订单：确认您的配置信息并点击"立即购买"按钮。

### 等待实例创建完成

等待片刻，直到 ECS 实例创建完成。您可以在 ECS 实例列表中看到新创建的实例。

### 登录 ECS 实例

点击 ECS 实例列表中对应实例的 远程连接 按钮，选择 立即登录，然后输入登录密码。

### 1Panel 使用步骤

#### 安全组放行 8090 端口

端口放行教程：https://help.aliyun.com/document_detail/25471.html

#### 获取面板用户信息

输入获取默认密码命令：1pctl user-info
输入完，回车即可获取用户信息

![1Panel](https://i.theojs.cn/docs/%25E7%2594%25A8%25E6%2588%25B7%25E4%25BF%25A1%25E6%2581%25AF.png '获取面板用户信息')

#### 访问面板

通过 http://服务器外网IP:8090/安全入口 访问面板管理页面输入帐号密码，

如：http://172.16.10.1:8090/mm4h9iucdn

#### 面板设置

修改面板默认帐号密码
开始使用面板

## 在线升级

登录 1Panel Web 控制台，在页面右下角点击 `检查更新` 进行在线升级。

![1Panel](https://i.theojs.cn/docs/%25E6%25A3%2580%25E6%259F%25A5%25E6%259B%25B4%25E6%2596%25B0.png '在线升级')

## 命令行工具

### 1pctl

`1Panel` 默认内置了命令行运维工具 `1pctl`，通过执行 `1pctl help`，可以查看相关的命令说明。

```sh
Usage:
  1pctl [COMMAND] [ARGS...]
  1pctl --help

Commands:
  status              查看 1Panel 服务运行状态
  start               启动 1Panel 服务
  stop                停止 1Panel 服务
  restart             重启 1Panel 服务
  uninstall           卸载 1Panel 服务
  user-info           获取 1Panel 用户信息
  listen-ip           切换 1Panel 监听 IP
  version             查看 1Panel 版本信息
  update              修改 1Panel 系统信息
  reset               重置 1Panel 系统信息
  restore             恢复 1Panel 服务及数据
```

### 1pctl reset

重置 `1Panel` 系统信息，包括取消安全入口登录，取消两步验证等

```sh
Usage:
  1pctl reset [COMMAND] [ARGS...]
  1pctl reset --help

Commands:
  domain              取消 1Panel 访问域名绑定
  entrance            取消 1Panel 安全入口
  https               取消 1Panel https 方式登录
  ips                 取消 1Panel 授权 IP 限制
  mfa                 取消 1Panel 两步验证
```

### 1pctl listen-ip

修改 `1Panel` 监听 IP

```sh
Usage:
  1pctl listen-ip [COMMAND] [ARGS...]
  1pctl listen-ip --help

Commands:
  ipv4                监听 IPv4
  ipv6                监听 IPv6
```

### 1pctl update

修改 `1Panel` 系统信息

```sh
Usage:
  1pctl update [COMMAND] [ARGS...]
  1pctl update --help

Commands:
  username            修改面板用户
  password            修改面板密码
  port                修改面板端口
```

### 1panel app

应用商店相关命令，包括初始化应用等

```sh
Usage:
  1panel app [COMMAND] [ARGS...]
  1panel app --help

Commands:
  init                初始化应用
```
