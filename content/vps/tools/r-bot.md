---
title: 一键脚本部署甲骨文云开ARM机器
description: 使用一键脚本在VPS上部署并刷甲骨文云（Oracle Cloud）的ARM机器。
---

# 一键脚本部署甲骨文云开ARM机器

## 准备工作

<Links
  :grid="3"
  :items="[
    {
      icon: { icon: 'cib:github', color: { light: '#000', dark: '#fff' } },
      name: 'R探长 Bot',
      desc: '在 GitHub 上查看 Oracle / Azure 云管理工具源码',
      link: 'https://github.com/semicons/java_oci_manage'
    },
    {
      icon: 'logos:telegram',
      name: 'R探长',
      desc: 'Telegram 频道，分享 Oracle / Azure 云相关资源',
      link: 'https://t.me/agentONE_R'
    },
    {
      icon: 'logos:telegram',
      name: 'R探长小助理',
      desc: 'Telegram 智能 Bot，支持自动开通与查询服务',
      link: 'https://t.me/radiance_helper_bot'
    }
  ]"
/>

- **VPS 系统：** VPS（可以科学上网）推荐系统 Ubuntu、Debian
- **端口检查：** 确保 VPS 的 `9527` 端口开放！可以通过 <Pill image="https://csstools.chinaz.com/favicon.ico" name="端口扫描" link="https://tool.chinaz.com/port" /> 检测

## 获取 VPS INFO

1. 打开 Telegram，关注机器人并发送`/start`

2. 发送指令 `/raninfo`，两次确认后获取 VPS 标识。

![一键脚本部署开ARM机器](https://i.theojs.cn/docs/202309032107312.webp '获取 VPS INFO')

## 获取甲骨文 API 密钥

1. 登录甲骨文，访问会员中心。
2. 找到 API 密钥并添加，下载 `.pem` 文件并妥善保存。

![一键脚本部署开ARM机器](https://i.theojs.cn/docs/20230903211053.webp '下载甲骨文 API 密钥')

3. 点击添加，会弹出 “配置文件预览” 的窗口，我们需要记录里面的：“配置文件预览”！

![一键脚本部署开ARM机器](https://i.theojs.cn/docs/202309032112188.webp '配置文件预览')

## VPS 端部署

### 更新及安装组件

```bash
# 更新软件包索引，安装必要组件
sudo apt update -y               #Debian/Ubuntu 命令
sudo apt install -y curl tar wget   #Debian/Ubuntu 命令
```

### Linux 一键安装/更新

- 运行完后使用 `bash sh_java_oci.sh` 可重启运行
- 脚本并未创建文件夹 可手动创建文件夹方便管理 如：`mkdir rbot && cd rbot`

```bash
wget -O gz_client_bot.tar.gz  https://github.com/semicons/java_oci_manage/releases/latest/download/gz_client_bot.tar.gz && tar -zxvf gz_client_bot.tar.gz --exclude=client_config  && tar -zxvf gz_client_bot.tar.gz --skip-old-files client_config && chmod +x sh_client_bot.sh && bash sh_client_bot.sh
```

### 部署密钥

脚本部署完毕以后，我们需要把刚才下载下来的 API 密钥 文件 `****.pem`（或者是`***.cer`），上传到 VPS ，并记录文件的路径。

我们需要编辑 VPS 如下文件：`/root/client_config`，如下图所示：

![一键脚本部署开ARM机器](https://i.theojs.cn/docs/202309032121395.webp '编辑`client_config`文件')

确认配置文件无误以后，我们在 VPS 执行：`bash sh_client_bot.sh `

![一键脚本部署开ARM机器](https://i.theojs.cn/docs/202309032126839.webp '执行：`bash sh_client_bot.sh `')

## R 探长的小助理

消息栏输入 `/oracle` (oracle 云管理)，如下图所示：
![一键脚本部署开ARM机器](https://i.theojs.cn/docs/202309032123801.webp 'R 探长的小助理')

## VPS-bot 相关命令

```bash
请先在配置文件内输入对应的参数，然后运行下方需要的指令

#启动或重启
bash sh_client_bot.sh

#查看日志(ctrl + c退出日志)
tail -f log_r_client.log

#终止程序
ps -ef | grep r_client.jar | grep -v grep | awk '{print $2}' | xargs kill -9

#卸载程序
rm -rf gz_client_bot.tar.gz client_config r_client.jar sh_client_bot.sh log_r_client.log debug-.log
如也不需要JDK也可卸载：apt remove openjdk*

```
