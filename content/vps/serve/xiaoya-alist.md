---
title: 一键安装 小雅Xiaoya全家桶
description: 小雅Xiaoya全家桶提供了集成的Alist、TVbox、Jellyfin、EMBY等工具，帮助用户轻松搭建家庭影院和媒体服务。
---

# 一键安装 小雅Xiaoya全家桶

- 适用于 NAS、iStoreOS、macOS、PC 等集成 Docker 的硬件。
- Plex 不支持 .strm 文件，所以可以搜刮但是不能播放。
- 手动安装操作比较复杂，新手建议用一键脚本，出问题了再逐一处理。高手随意。

## 执行命令

::: code-group

```bash [官方脚本]
bash -c "$(curl --insecure -fsSL https://ddsrem.com/xiaoya_install.sh)"
```

```bash [备用地址 (任选一条)]
bash <(curl --insecure -fsSL https://ddsrem.com/xiaoya/all_in_one.sh)
bash <(curl --insecure -fsSL https://fastly.jsdelivr.net/gh/xiaoyaDev/xiaoya-alist@latest/all_in_one.sh)
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/xiaoyaDev/xiaoya-alist/master/all_in_one.sh)
bash -c "$(curl --insecure -fsSL https://fastly.jsdelivr.net/gh/xiaoyaDev/xiaoya-alist@latest/main.sh)"
bash -c "$(curl --insecure -fsSL https://raw.githubusercontent.com/xiaoyaDev/xiaoya-alist/master/main.sh)"
```

:::

## 必要参数

|        参数         |                 对应文件                  |                                                     获取方式                                                     |
| :-----------------: | :---------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
|        token        |         `/etc/xiaoya/mytoken.txt`         | [token_1](https://aliyuntoken.vercel.app/) 或者 [token_2](https://alist.nn.ci/zh/guide/drivers/aliyundrive.html) |
|     open token      |       `/etc/xiaoya/myopentoken.txt`       |                     [open token](https://alist.nn.ci/zh/guide/drivers/aliyundrive_open.html)                     |
| 转存目录的folder id | `/etc/xiaoya/temp_transfer_folder_id.txt` |             [点击转存到资源盘](https://www.aliyundrive.com/s/rP9gP3h9asE) 复制浏览器地址最后一串数值             |

## 功能列表

> [!NOTE]
> 数字代表先选x，再选x，再选x
>
> PS: 2 2 8代表先选2，再选2，最后选8

**普通功能**

```shell
———————————————————————————————————————安装———————————————————————————————————————
安装 小雅Alist -> 1 1
安装 Emby全家桶（一键） -> 2 1
安装 小雅元数据定时爬虫 -> 2 5 1
安装 小雅元数据爬虫（Web 版本）-> 2 6 1
安装/更新 小雅助手（xiaoyahelper）-> 3 1
安装 115清理助手 -> 4 1
安装 Portainer -> 5 1 1
安装 Auto_Symlink -> 5 2 1
安装 Onelist -> 5 3 1
安装 Xiaoya Proxy -> 5 4 1
安装 Xiaoya aliyuntvtoken_connector -> 5 5 1
安装 小雅Alist-TVBox -> 5 6 1
安装 LrcAPI -> 5 7 1
安装 CasaOS -> 5 8 1
——————————————————————————————Emby手动全家桶配置————————————————————————————————————
单独 下载并解压 全部元数据 -> 2 2 1
单独 解压 全部元数据 -> 2 2 2
单独 下载 all.mp4 -> 2 2 3
单独 解压 all.mp4 -> 2 2 4
解压 all.mp4 的指定元数据目录【非全部解压】-> 2 2 5
单独 下载 config.mp4 -> 2 2 6
单独 解压 config.mp4 -> 2 2 7
单独 下载 pikpak.mp4 -> 2 2 8
单独 解压 pikpak.mp4 -> 2 2 9
单独 下载 115.mp4 -> 2 2 10
单独 解压 115.mp4 -> 2 2 11
解压 115.mp4 的指定元数据目录【非全部解压】-> 2 2 12
单独 下载 蓝光原盘.mp4 -> 2 2 13
单独 解压 蓝光原盘.mp4 -> 2 2 14
单独 下载 json.mp4 -> 2 2 15
单独 解压 json.mp4 -> 2 2 16
单独 下载 music.mp4 -> 2 2 17
单独 解压 music.mp4 -> 2 2 18
单独 下载 短剧.mp4 -> 2 2 19
单独 解压 短剧.mp4 -> 2 2 20
选择 下载器【aria2/wget】-> 2 2 21
单独 安装Emby（可选择版本，支持官方，amilys，lovechen）-> 2 3
图形化编辑 emby_config.txt -> 2 4
小雅爬虫 立刻爬取指定目录 -> 2 5 4
小雅爬虫 容器定时爬取目录单独配置 -> 2 5 5
小雅爬虫 清理爬虫进程锁 -> 2 5 6
小雅爬虫 重置爬虫数据库 -> 2 5 7
一键升级Emby容器（可选择镜像版本） -> 2 7
开启/关闭 解压成功后自动清理 mp4 元数据文件 -> 2 9 1 1
一键清理当前所有 mp4 元数据文件 -> 2 9 1 2
关闭 Emby 6908 端口访问 -> 2 9 2
———————————————————————————————————————更新———————————————————————————————————————
更新 小雅Alist -> 1 2
更新 小雅元数据定时爬虫 -> 2 5 2
更新 小雅元数据爬虫（Web 版本）-> 2 6 2
更新 115清理助手 -> 4 2
更新 Portainer -> 5 1 2
更新 Auto_Symlink -> 5 2 2
更新 Onelist -> 5 3 2
更新 Xiaoya Proxy -> 5 4 2
更新 Xiaoya aliyuntvtoken_connector -> 5 5 2
更新 小雅Alist-TVBox -> 5 6 2
更新 LrcAPI -> 5 7 2
———————————————————————————————————————卸载———————————————————————————————————————
卸载 小雅Alist -> 1 3
卸载 小雅元数据定时爬虫 -> 2 5 3
卸载 小雅元数据爬虫（Web 版本）-> 2 6 3
卸载 Emby全家桶 -> 2 8
卸载 小雅助手（xiaoyahelper）-> 3 3
卸载 115清理助手 -> 4 3
卸载 Portainer -> 5 1 3
卸载 Auto_Symlink -> 5 2 3
卸载 Onelist -> 5 3 3
卸载 Xiaoya Proxy -> 5 4 3
卸载 Xiaoya aliyuntvtoken_connector -> 5 5 3
卸载 小雅Alist-TVBox -> 5 6 3
卸载 LrcAPI -> 5 7 3
卸载 CasaOS -> 5 9 2
——————————————————————————————————————系统工具——————————————————————————————————————
查看系统磁盘挂载 -> 5 8
———————————————————————————————————————其他———————————————————————————————————————
一次性运行 小雅助手（xiaoyahelper）-> 3 2
账号管理 -> 1 4
非内网IP访问次数查看 -> 1 5
```

**高级功能**

```shell
Docker启动容器名称设置 -> 6 1
是否开启容器运行额外参数添加 -> 6 2
重置脚本配置 -> 6 3
开启/关闭 磁盘容量检测 -> 6 4
开启/关闭 小雅连通性检测 -> 6 5
Docker镜像源选择 -> 6 6
非可选网络模式容器默认网络模式 -> 6 7
进入弃用菜单 -> 6 8
开启/关闭 使用宿主机7z命令解压 -> 6 9
```

**弃用菜单（此菜单下的功能不再维护，不建议使用）**

```shell
———————————————————————————————————————安装———————————————————————————————————————
安装 Jellyfin全家桶（一键） -> 6 8 3 1
安装 Resilio-Sync（单独） -> 6 8 2 2 1
——————————————————————————————Emby手动全家桶配置————————————————————————————————————
立即 同步小雅Emby的config目录 -> 6 8 2 3
单独 创建/删除 同步定时更新任务 -> 6 8 2 4
————————————————————————————Jellyfin手动全家桶配置——————————————————————————————————

注意：目前官方 Jellyfin 安装方案已经长久未维护！
如果您需要安装 小雅Jellyfin 全家桶，请使用 AI老G 的脚本安装，风险自担。
脚本命令：bash <(curl -sSLf https://xy.ggbond.org/xy/xy_install.sh)

单独 下载并解压 全部元数据 -> 6 8 3 2 1
单独 解压 全部元数据 -> 6 8 3 2 2
单独 下载 all_jf.mp4 -> 6 8 3 2 3
单独 解压 all_jf.mp4 -> 6 8 3 2 4
解压 all_jf.mp4 的指定元数据目录【非全部解压】-> 6 8 3 2 5
单独 下载 config_jf.mp4 -> 6 8 3 2 6
单独 解压 config_jf.mp4 -> 6 8 3 2 7
单独 下载 PikPak_jf.mp4 -> 6 8 3 2 8
单独 解压 PikPak_jf.mp4 -> 6 8 3 2 9
选择 下载器【aria2/wget】-> 6 8 3 2 10
单独 安装Jellyfin-> 6 8 3 3
———————————————————————————————————————更新———————————————————————————————————————
更新 Resilio-Sync（单独） -> 6 8 2 2 2
———————————————————————————————————————卸载———————————————————————————————————————
卸载 卸载Jellyfin全家桶 -> 6 8 3 4
卸载 Resilio-Sync（单独） -> 6 8 2 2 3
———————————————————————————————————————其他———————————————————————————————————————
创建/删除 定时同步更新数据（小雅alist启动时拉取的数据）-> 6 8 1 1
```

## 通用兼容性测试报告

> [!NOTE]
> ✅代表测试通过且兼容；❌代表不兼容；🚧代表未经过充分测试兼容性不确定！

|                   软件名称                    | x86-64 \| amd64 | arm64 \| arm64v8 | armhf \| armv7 |
| :-------------------------------------------: | :-------------: | :--------------: | :------------: |
|                   小雅Alist                   |       ✅        |        ✅        |       ✅       |
|                小雅Emby全家桶                 |       ✅        |        ✅        |       ❌       |
|              小雅Jellyfin全家桶               |       ✅        |        ✅        |       ❌       |
|           小雅助手（xiaoyahelper）            |       ✅        |        ✅        |       ✅       |
|                小雅Alist-TVBox                |       ✅        |        ✅        |       ❌       |
|                    Onelist                    |       ✅        |        ✅        |       ✅       |
|         小雅元数据爬虫（xiaoya-emd）          |       ✅        |        ✅        |       ✅       |
|          小雅元数据爬虫（Web 版本）           |       ✅        |        ✅        |       ✅       |
|          小雅Cron容器（xiaoya-cron）          |       ✅        |        ✅        |       ✅       |
|         小雅代理容器（xiaoya-proxy）          |       ✅        |        ✅        |       ✅       |
|       115清理助手（xiaoya-115cleaner）        |       ✅        |        ✅        |       ✅       |
|          xiaoya-glue（官方 python）           |       ✅        |        ✅        |       ❌       |
|          xiaoya-glue（官方 latest）           |       ✅        |        ✅        |       ✅       |
|         xiaoya-glue（DDSRem python）          |       ✅        |        ✅        |       ❌       |
| xiaoya-glue（DDSRem aliyuntvtoken_connector） |       ✅        |        ✅        |       ✅       |

|        系统名称        | all_in_one.sh | emby_config_editor.sh | xiaoya_notify.sh（已弃用） |
| :--------------------: | :-----------: | :-------------------: | :------------------------: |
|       CentOS 7.9       |      ✅       |          ✅           |             ✅             |
|       CentOS 8.4       |      ✅       |          ✅           |             ✅             |
|    CentOS 8 Stream     |      ✅       |          ✅           |             ✅             |
|    CentOS 9 Stream     |      ✅       |          ✅           |             ✅             |
|      Debian 10.3       |      ✅       |          ✅           |             ✅             |
|      Debian 11.3       |      ✅       |          ✅           |             ✅             |
|      Debian 12.0       |      ✅       |          ✅           |             ✅             |
|      Ubuntu 18.04      |      ✅       |          ✅           |             ✅             |
|      Ubuntu 20.04      |      ✅       |          ✅           |             ✅             |
|      Ubuntu 22.04      |      ✅       |          ✅           |             ✅             |
|      Ubuntu 22.10      |      ✅       |          ✅           |             ✅             |
|      Ubuntu 23.04      |      ✅       |          ✅           |             ✅             |
|       Fedora 31        |      ✅       |          ✅           |             ✅             |
|       Fedora 32        |      ✅       |          ✅           |             ✅             |
|      Fedora 36-38      |      ✅       |          ✅           |             ✅             |
|       Fedora 40        |      ✅       |          ✅           |             ✅             |
|       Fedora 41        |      ✅       |          ✅           |             ✅             |
|       Fedora 42        |      ✅       |          ✅           |             ✅             |
|      AlmaLinux 9       |      ✅       |          ✅           |             ✅             |
|     RockyLinux 8.6     |      ✅       |          ✅           |             ✅             |
|       Arch Linux       |      ✅       |          ✅           |             ✅             |
|     openSUSE 15.4      |      ✅       |          ✅           |             ✅             |
|        FreeBSD         |      ✅       |          ✅           |             ✅             |
|        EulerOS         |      ✅       |          ✅           |             ✅             |
|      Amazon Linux      |      ✅       |          ✅           |             ✅             |
|         Alpine         |      ✅       |          ✅           |             ✅             |
|         MacOS          |      ✅       |          ✅           |             🚧             |
|         UnRaid         |      ✅       |          ✅           |             ✅             |
|     OpenMediaVault     |      ✅       |          ✅           |             ✅             |
|     QNAP（威联通）     |      ✅       |          ✅           |             ✅             |
|        OpenWRT         |      ✅       |          ✅           |             ✅             |
|    Synology（群晖）    |      ✅       |          ✅           |             ✅             |
|      TrueNAS CORE      |      🚧       |          🚧           |             🚧             |
|     TrueNAS SCALE      |      🚧       |          🚧           |             🚧             |
|     UGOS（绿联云）     |      ✅       |          ✅           |             ✅             |
| UGOS Pro（绿联云 Pro） |      ✅       |          ✅           |             ✅             |
|       LibreELEC        |      ❌       |          ❌           |             ❌             |
|   Windows WSL Docker   |      🚧       |          🚧           |             ❌             |
|    ZSpace（极空间）    |      🚧       |          🚧           |             🚧             |
|   fnOS (飞牛私有云)    |      ✅       |          ✅           |             ✅             |
