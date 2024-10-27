---
title: 一键安装 小雅Xiaoya全家桶
head:
  - - meta
    - name: description
      content: 小雅Alist TVbox Jellyfin EMBY
---

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

bash <(curl --insecure -fsSL https://fastly.jsdelivr.net/gh/DDS-Derek/xiaoya-alist@latest/all_in_one.sh)

bash <(curl --insecure -fsSL https://raw.githubusercontent.com/DDS-Derek/xiaoya-alist/master/all_in_one.sh)

bash -c "$(curl --insecure -fsSL https://fastly.jsdelivr.net/gh/DDS-Derek/xiaoya-alist@latest/main.sh)"

bash -c "$(curl --insecure -fsSL https://raw.githubusercontent.com/DDS-Derek/xiaoya-alist/master/main.sh)"
```

:::

## 必要参数

|        参数         |                 对应文件                  |                                                     获取方式                                                     |
| :-----------------: | :---------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
|        token        |         `/etc/xiaoya/mytoken.txt`         | [token_1](https://aliyuntoken.vercel.app/) 或者 [token_2](https://alist.nn.ci/zh/guide/drivers/aliyundrive.html) |
|     open token      |       `/etc/xiaoya/myopentoken.txt`       |                     [open token](https://alist.nn.ci/zh/guide/drivers/aliyundrive_open.html)                     |
| 转存目录的folder id | `/etc/xiaoya/temp_transfer_folder_id.txt` |             [点击转存到资源盘](https://www.aliyundrive.com/s/rP9gP3h9asE) 复制浏览器地址最后一串数值             |

## 功能列表

> [!TIP]
> 数字代表先选x，再选x，再选x
>
> PS: 2 2 8代表先选2，再选2，最后选8

**普通功能**

```shell
———————————————————————————————————————安装———————————————————————————————————————
安装 小雅Alist -> 1 1
安装 小雅Alist-TVBox -> 5 1
安装/更新 小雅助手（xiaoyahelper）-> 4 1
安装 Onelist -> 6 1
安装 Portainer -> 7 1 1
安装 Emby全家桶（一键） -> 2 1
安装 Jellyfin全家桶（一键） -> 3 1
安装 Resilio-Sync（单独） -> 2 5 1
安装 Auto_Symlink -> 7 2 1
安装 CasaOS -> 7 4 1
安装 小雅元数据定时爬虫 -> 2 9 1
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
选择 下载器【aria2/wget】-> 2 2 10
单独 安装Emby（可选择版本，支持官方，amilys，lovechen）-> 2 3
立即 同步小雅Emby的config目录 -> 2 6
单独 创建/删除 同步定时更新任务 -> 2 7
图形化编辑 emby_config.txt -> 2 8
————————————————————————————Jellyfin手动全家桶配置——————————————————————————————————
单独 下载并解压 全部元数据 -> 3 2 1
单独 解压 全部元数据 -> 3 2 2
单独 下载 all_jf.mp4 -> 3 2 3
单独 解压 all_jf.mp4 -> 3 2 4
解压 all_jf.mp4 的指定元数据目录【非全部解压】-> 3 2 5
单独 下载 config_jf.mp4 -> 3 2 6
单独 解压 config_jf.mp4 -> 3 2 7
单独 下载 PikPak_jf.mp4 -> 3 2 8
单独 解压 PikPak_jf.mp4 -> 3 2 9
选择 下载器【aria2/wget】-> 3 2 10
单独 安装Jellyfin-> 3 3
———————————————————————————————————————更新———————————————————————————————————————
更新 小雅Alist-TVBox -> 5 2
更新 小雅Alist -> 1 2
更新 Resilio-Sync（单独） -> 2 5 2
更新 Onelist -> 6 2
更新 Portainer -> 7 1 2
更新 Auto_Symlink -> 7 2 2
更新 小雅元数据定时爬虫 -> 2 9 2
———————————————————————————————————————卸载———————————————————————————————————————
卸载 小雅Alist -> 1 3
卸载 Emby全家桶 -> 2 10
卸载 卸载Jellyfin全家桶 -> 3 4
卸载 Resilio-Sync（单独） -> 2 5 3
卸载 小雅助手（xiaoyahelper）-> 4 3
卸载 小雅Alist-TVBox -> 5 3
卸载 Onelist -> 6 3
卸载 Portainer -> 7 1 3
卸载 Auto_Symlink -> 7 2 3
卸载 CasaOS -> 7 4 2
卸载 小雅元数据定时爬虫 -> 2 9 3
——————————————————————————————————————系统工具——————————————————————————————————————
查看系统磁盘挂载 -> 7 3
———————————————————————————————————————其他———————————————————————————————————————
一次性运行 小雅助手（xiaoyahelper）-> 4 2
创建/删除 定时同步更新数据（小雅alist启动时拉取的数据）-> 1 4
```

**高级功能**

```shell
Docker启动容器名称设置 -> 8 1
是否开启容器运行额外参数添加 -> 8 2
重置脚本配置 -> 8 3
开启/关闭 磁盘容量检测 -> 8 4
开启/关闭 小雅连通性检测 -> 8 5
```

## 通用兼容性测试报告

|           软件名称           | x86-64 \| amd64 | arm64 \| arm64v8 | armhf \| armv7 |
| :--------------------------: | :-------------: | :--------------: | :------------: |
|          小雅Alist           |       ✅        |        ✅        |       ✅       |
|        小雅Emby全家桶        |       ✅        |        ✅        |       ❌       |
|      小雅Jellyfin全家桶      |       ✅        |        ✅        |       ❌       |
|   小雅助手（xiaoyahelper）   |       ✅        |        ✅        |       ✅       |
|       小雅Alist-TVBox        |       ✅        |        ✅        |       ❌       |
|           Onelist            |       ✅        |        ✅        |       ✅       |
| 小雅元数据爬虫（xiaoya-emd） |       ✅        |        ✅        |       ✅       |
| 小雅Cron容器（xiaoya-cron）  |       ✅        |        ✅        |       ✅       |

|    系统名称     | main.sh | emby_config_editor.sh |
| :-------------: | :-----: | :-------------------: |
|   CentOS 7.9    |   ✅    |          ✅           |
|   CentOS 8.4    |   ✅    |          ✅           |
| CentOS 8 Stream |   ✅    |          ✅           |
| CentOS 9 Stream |   ✅    |          ✅           |
|   Debian 10.3   |   ✅    |          ✅           |
|   Debian 11.3   |   ✅    |          ✅           |
|   Debian 12.0   |   ✅    |          ✅           |
|  Ubuntu 18.04   |   ✅    |          ✅           |
|  Ubuntu 20.04   |   ✅    |          ✅           |
|  Ubuntu 22.04   |   ✅    |          ✅           |
|    Fedora 31    |   ✅    |          ✅           |
|    Fedora 32    |   ✅    |          ✅           |
|   AlmaLinux 9   |   ✅    |          ✅           |
| RockyLinux 8.6  |   ✅    |          ✅           |
|   Arch Linux    |   ✅    |          ✅           |
|  openSUSE 15.4  |   ✅    |          ✅           |
|     FreeBSD     |   ✅    |          ✅           |
|     EulerOS     |   ✅    |          ✅           |
|  Amazon Linux   |   ✅    |          ✅           |
|     Alpine      |   ✅    |          ✅           |
|     UnRaid      |   ✅    |          ✅           |
| OpenMediaVault  |   ✅    |          ✅           |
|      QNAP       |   ✅    |          ✅           |
|     OpenWRT     |   ✅    |          ✅           |
|    Synology     |   ✅    |          ✅           |
|  TrueNAS CORE   |   ✅    |          ✅           |
|  TrueNAS SCALE  |   ✅    |          ✅           |
|     UGREEN      |   ✅    |          ✅           |
|    LibreELEC    |   ❌    |          ❌           |
