---
title: 安装哪吒监控面板
head:
  - - meta
    - name: description
      content: 哪吒监控是一个开源、轻量、易用的服务器监控与运维工具，帮助管理员实时监控服务器状态和性能。
  - - meta
    - name: keywords
      content: 哪吒监控 面板 服务器 监控 开源 运维 工具
---

## 准备工作

搭建哪吒监控的 Dashboard，你需要：

1. 一台可以连接公网的服务器。防火墙和安全策略需放行 8008 端口，否则无法访问或接收数据。单核 512MB 内存的服务器即可满足大多数使用场景。
2. 一个已设置好 A 记录，指向 Dashboard 服务器 IP 的域名。

:::tip

如果你想使用**CDN**，请准备两个域名：

一个配置好**CDN**，用作公开访问，**CDN** 需支持 `WebSocket` 协议；

另一个域名不使用**CDN**，用作 `Agent` 与 `Dashboard` 的通信。

本文档以 `dashboard.example.com` 和 `data.example.com` 为例。
:::
<Links :items="[
{ name: 'GitHub项目 - 哪吒监控', desc:'开源、轻量、易用的服务器监控与运维工具',  image:'https://nezha.wiki/logo.png',link: 'https://github.com/naiba/nezha',alt: '哪吒监控logo' },
{ name: '官方WiKi - 哪吒监控', desc:'开源、轻量、易用的服务器监控与运维工具',  image:'https://nezha.wiki/logo.png',link: 'https://nezha.wiki/',alt: '哪吒监控logo'  },
]" />

## 在服务器中安装 Dashboard

::: code-group

```sh [国外机]
curl -L https://raw.githubusercontent.com/nezhahq/scripts/refs/heads/main/install.sh -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```

```sh [中国大陆]
curl -L https://gitee.com/naibahq/scripts/raw/main/install.sh -o nezha.sh && chmod +x nezha.sh && sudo CN=true ./nezha.sh
```

:::

**以 Docker 安装为例，安装完成后按提示输入以下信息**：

- `请输入站点标题`: - 自定义站点标题。
- `请输入暴露端口`: - 公开访问端口（默认 8008，可自定义）。
- `请指定后台语言`: - 选择语言偏好。

输入完成后，等待拉取 Docker 镜像。安装结束后，如果一切正常，你可以通过域名和端口号访问 Dashboard，例如：

`http://dashboard.example.com:8008`

如果需要再次运行安装脚本，可输入以下命令：

```sh
./nezha.sh
```

## 登录到 Dashboard 配置界面

后台管理界面的路径为 `/dashboard`，你只需访问：
`http://dashboard.example.com:8008/dashboard`

首次登录的默认用户名和密码均为 `admin`。

:::warning

默认密码为弱密码，对于高权限的面板来说，使用弱密码非常危险！

建议安装后立即进入管理页面：点击头像 → “个人信息” → “更新个人资料”修改密码。

建议密码长度至少 18 位，并混合大小写字母、数字及符号。
:::

## 安装1panel面板

[安装1panel面板](./install-1panel.md)

## 配置反向代理

- 在1panel面板中 - **网站** - **网站** - **创建网站**，选择**反向代理**,
- 域名填写公开访问域名，如 `http://cdn.example.com`
- 在下方“代理地址”中填入 `http://127.0.0.1:8008` 然后点击“保存”
- **配置** - **反向代理** - **源文件** 将配置文件替换为以下内容：

```nginx
location / {
    proxy_pass http://127.0.0.1:8008;
    proxy_set_header Host $host;
    proxy_set_header Origin https://$host;
    proxy_set_header nz-realip $http_CF_Connecting_IP;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    add_header Strict-Transport-Security "max-age=31536000";
}
location ~ ^/(ws|terminal/.+|file/.+)$ {
    proxy_pass http://127.0.0.1:8008;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $http_host;
}
```

- 点击“保存”

现在，你应该可以直接使用域名，如：http://cdn.example.com 来访问面板了

## 一键安装 Agent

哪吒监控支持在 `Windows`、`macOS` 和 `Linux` 上一键安装 `Agent`。遵循本文档的步骤，你可以轻松地在服务器上部署它。

### 准备工作

在安装前，需要提前在管理面板中设置通信域名，该域名不建议接入 CDN。本文档以示例通信域名 `data.example.com` 为例。

- 在后台管理面板点击头像，进入“系统设置”页。
- 在“Agent对接地址【域名/IP:端口】”项中填入通信域名和端口 “`data.example.com:8008`”。
- 点击“确认”保存设置。

### 一键安装步骤

- 在 `服务器` 页面中，点击 `安装命令` 并选择对应操作系统，安装命令将自动复制到你的剪贴板。
- 在被控端服务器中运行安装命令，等待安装完成后返回到 `服务器` 页面查看是否上线。
- 如果安装成功，页面中将自动弹出新的服务器，你可以点击编辑按钮为其设置名称。
