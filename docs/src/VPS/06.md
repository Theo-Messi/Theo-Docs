---
title: 安装哪吒面板
---

## 准备工作

开始之前，请先确定你搭建探针的域名

比如说`tz.llxx.cc`作为面板的域名，还有一个`tzz.llxx.cc`是用来记录面板服务器的 IP

:::tip 准备工作

1. 连接公网的 VPS
2. 防火墙和安全策略需要放行`8008` 和 `5555` 端口
3. 指向服务器 ip 的域名并设置好 A 记录
4. Github 账号
5. 宝塔面板
6. 一个域名
   :::

**项目地址：<https://github.com/naiba/nezha>**

## 获取 Github 的 Client ID 和密钥

哪吒监控接入 Github、Gitlab、Jihulab、Gitee 作为后台管理员账号

- 首先我们需要新建一个验证应用，以 Github 为例
- 登录 Github 后，打开 <https://github.com/settings/developers>
- 依次选择“OAuth Apps” - “New OAuth App”
  - `Application name` - 随意填写
  - `Homepage URL` - 填写面板的访问域名，如："<http://cdn.example.com>"
  - `Authorization callback URL` - 填写回调地址，如："<http://cdn.example.com/oauth2/callback>"
- 点击 “Register application”
- 保存页面中的 Client ID，然后点击 “Generate a new client secret“，创建一个新的 Client Secret，新建的密钥仅会显示一次，请妥善保存
- JihuLab 的应用创建入口为：https://jihulab.com/-/profile/applications
- `Redirect URL` 中应填入回调地址
- 在下方`范围`中勾选 `read_user` 和 `read_api`
- 创建完成后，保存好应用程序 ID 和密码

## 安装宝塔

::: code-group

```sh [Centos]
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

```sh [Ubuntu/Deepin]
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
```

```sh [Debian]
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh ed8484bec
```

:::

## 安装监控

### 新建 OAuth App

- 打开：https://github.com/settings/developers
- 点击 New OAuth App 按钮。
- 记录下 OAuth Apps 的 Client ID 和 Client secrets
- 记录下 OAuth 应用程序的客户端 ID 和客户端密钥

### 放行端口，解析域名

在你的服务器上开放`8088`和`5555`端口。并且解析两个域名到服务器！

### 执行脚本

::: code-group

```sh [国外机]
curl -L https://raw.githubusercontent.com/naiba/nezha/master/script/install.sh  -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```

```sh [国内机]
curl -L https://cdn.jsdelivr.net/gh/naiba/nezha@master/script/install.sh -o nezha.sh && chmod +x nezha.sh && sudo CN=true ./nezha.sh
```

:::

:::tip 等待 Docker 安装完毕后，分别输入以下值

- `OAuth提供商` - Github，Gitlab，Jihulab，Gitee 中选择一个
- `Client ID` - 之前保存的 Client ID
- `Client Secret` - 之前保存的密钥
- `用户名` - OAuth 提供商中的用户名
- `站点标题` - 自定义站点标题
- `访问端口` - 公开访问端口，可自定义，默认 8008
- `Agent的通信端口` - Agent 与 Dashboard 的通信端口，默认 5555
  :::
- 输入完成后，等待拉取镜像
  安装结束后，如果一切正常，此时你可以访问域名+端口号，如 “[http://cdn.example.com:8008](http://cdn.example.com:8008/)” 来查看面板
- 将来如果需要再次运行脚本，可以运行：

```sh
./nezha.sh
```

## 配置反向代理

- 在宝塔面板中新建一个站点，域名填写公开访问域名，如 “[http://cdn.example.com](http://cdn.example.com/)“ ，然后点击“设置”进入站点设置选项，选择“反向代理” - “新建反向代理”
- 自定义一个代理名称，在下方“目标 URL”中填入 `http://127.0.0.1` 然后点击“保存”
- 打开刚刚新建的反向代理右边的“配置文件”，将配置文件替换为以下内容：

<<< @/code/bt.nginx

- 点击“保存”

现在，你应该可以直接使用域名，如：“[http://cdn.example.com](http://cdn.example.com/)“ 来访问面板了

## 安装 Agent

目前哪吒监控已支持在 Windows 和 Linux 上一键安装 Agent，遵循本文档的步骤，你可以很轻松的在服务器上部署它

### 准备工作

你需要提前在管理面板中设置好通信域名，此域名不可以接入 CDN，这里以前面提到过的示例通信域名 “data.example.com” 来做演示
进入后台管理面板，转到“设置”页，在“未接入 CDN 的面板服务器域名/IP”项中填入通信域名，然后点击"保存"

### 在 Linux 中一键安装 (Ubuntu、Debian、CentOS)

- 首先在管理面板中添加一台服务器
- 点击新添加的服务器旁，绿色的 Linux 图标按钮，复制一键安装命令
- 在被控端服务器中运行复制的一键安装命令，等待安装完成后返回到 Dashboard 主页查看服务器是否上线

### 在 Windows 中一键安装

- 首先在管理面板中添加一台服务器
- 点击新添加的服务器旁，绿色的 Windows 图标按钮，复制一键安装命令
- 进入 Windows 服务器，运行 PowerShell，在 PowerShell 中运行复制的安装命令
- 如遇到确认「执行策略变更」请选择 Y
- 等待安装完成后返回 Dashboard 主页查看服务器是否上线

### 其他方式安装 Agent

- 首先在管理面板中添加一台服务器
- 在被控服务器中，运行脚本（位于中国大陆的服务器请使用镜像）：
  ::: code-group

```sh [国外机]
curl -L https://raw.githubusercontent.com/naiba/nezha/master/script/install.sh  -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```

```sh [国内机]
curl -L https://cdn.jsdelivr.net/gh/naiba/nezha@master/script/install.sh -o nezha.sh && chmod +x nezha.sh && sudo CN=true ./nezha.sh
```

- 选择“安装监控 Agent”
- 输入通信域名，如：”data.example.com“
- 输入面板通信端口（RPC 端口），默认为 5555
- 输入 Agent 密钥，Agent 密钥在管理面板中添加服务器时生成，可以在管理面板中的“主机”页中找到
- 等待安装完成后返回 Dashboard 主页查看服务器是否上线
