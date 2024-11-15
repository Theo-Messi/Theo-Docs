---
title: 宝塔面板部署vitepress（自动发布静态）
head:
  - - meta
    - name: description
      content: 宝塔面板部署vitepress（自动发布静态）
---

## 1.部署环境

- 服务器系统：CentOS 8.4.0（这里是指操作的系统版本）
- 宝塔面板

## 2.宝塔软件安装

### Nginx/Apache

根据个人需求任意安装一个，用于反向代理做域名绑定或80端口访问使用

![宝塔面板](https://i.theojs.cn/docs/WX20240223-222305%402x.png 'Nginx/Apache')

### Node.js版本管理器

:::tip 划重点
是Node.js版本管理器，不是PM2管理器
:::

![宝塔面板](https://i.theojs.cn/docs/WX20240223-222617%402x.png 'Node.js版本管理器')

![宝塔面板](https://i.theojs.cn/docs/WX20240223-222723%402x.png '在Node.js版本管理器中安装Node版本版本')

:::tip
命令运行版本默认状态是：未设置，这里我们需要选择一下版本，否则后面安装vitepress无法使用命令行模式。
:::

![宝塔面板](https://i.theojs.cn/docs/WX20240223-222850%402x.png 'Node.js设置')

## 3.开放8080端口

### 服务器开放端口

- [阿里云开放端口](https://help.aliyun.com/document_detail/25475.html?spm=5176.2020520101securitygroupdetail.help.dexternal.63464df5MZ0qJz)
- [腾讯云开放端口（云服务器）](https://cloud.tencent.com/document/product/213/39740)
- [腾讯云开放端口（轻量云)](https://cloud.tencent.com/document/product/1207/59924)

### 宝塔面板开放端口

宝塔面板左侧菜单栏找到【安全】点击进入，填写端口后点击【放行】

【注意】如果服务器8080端口已被占用，可使用其他端口，如：8081等...

## 4.建立网站及运行目录

![宝塔面板](https://i.theojs.cn/docs/WX20240223-223335%402x.png '添加站点')

:::tip 注意
数据库选择 【不创建】，PHP版本选择【纯静态】
:::
![宝塔面板](https://i.theojs.cn/docs/WX20240223-223817%402x.png '添加站点配置')

::: tip 注意
user.ini文件无法被批量删除，就点击文件右侧的删除按钮进行删除
:::
![宝塔面板](https://i.theojs.cn/docs/WX20240223-223941%402x.png '删除网站目录下的默认文件')

![宝塔面板](https://i.theojs.cn/docs/WX20240223-224110%402x.png '申请SSL证书')

## 5.命令行部署vitepress

### 在网站目录下打开宝塔终端并执行以下命令

```sh
# 在你的项目中安装
npm add -D vitepress

# 设置向导
npx vitepress init

# 开始写作
npm run docs:dev

# 构建静态文件（一定要构建静态文件，否则域名或IP访问403错误）
npm run docs:build
```

![宝塔面板](https://i.theojs.cn/docs/WX20240223-224612%402x.png '设置完成后回到 【网站】，打开网站设置')

在网站设置中，重新设置网站目录，定位到：`/www/wwwroot/你的网站目录/.vitepress/dist`
:::tip
注意关闭放跨站攻击
:::

## 6.关于自动构建静态

1.打开宝塔的【计划任务】 ，新建shell脚本类型计划任务，执行周期根据自己情况设置

（构建静态过程中非常消耗服务器配置，建议最短每天一次，推荐一周一次）

在计划任务中添加  cd /你的网站目录 && npm run docs:build

```sh
cd /www/wwwroot/vitepress && npm run docs:build
```
