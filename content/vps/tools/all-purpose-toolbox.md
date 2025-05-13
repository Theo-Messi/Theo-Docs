---
title: VPS全能工具箱
head:
  - - meta
    - name: description
      content: VPS 全能工具箱，提供一键安装、部署和搭建脚本，帮助快速配置和管理 VPS 服务器。
  - - meta
    - name: keywords
      content: VPS 一键脚本 安装部署 工具箱 服务器搭建 VPS管理
---

##### 安装下载工具

::: code-group

```sh [Debian/Ubuntu]
apt update -y  && apt install -y curl
```

```sh [CentOS]
yum update && yum install curl
```

:::

##### 一键脚本

::: code-group

```sh [官网版]
curl -sS -O https://kejilion.pro/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```

```sh [GitHub版]
curl -sS -O https://raw.githubusercontent.com/kejilion/sh/main/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```

:::
