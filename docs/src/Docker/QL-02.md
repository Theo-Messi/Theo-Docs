---
title: 安装青龙面板
---

## 版本

### Docker

- `latest` 镜像是基于 `alpine` 构建，
- `debian` 镜像是基于 `debian-slim` 构建。
- 如果需要使用 `alpine` 不支持的依赖，建议使用 `debian` 镜像

```sh
docker pull whyour/qinglong:latest
docker pull whyour/qinglong:debian
```

### npm

- `npm` 版本支持 `debian/ubuntu/centos/alpine` 系统
- 需要自行安装 `node/python3`

```sh
npm i @whyour/qinglong
```

## 部署

### Docker

```sh
# curl -sSL get.docker.com | sh
docker run -dit \
  -v $PWD/ql/data:/ql/data \
  # 冒号后面的 5700 为默认端口，如果设置了 QlPort, 需要跟 QlPort 保持一致
  -p 5700:5700 \
  # 部署路径非必须，以斜杠开头和结尾，比如 /test/
  -e QlBaseUrl="/" \
  # 部署端口非必须，当使用 host 模式时，可以设置服务启动后的端口，默认 5700
  -e QlPort="5700" \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
```

### Docker-compos

```sh
#  curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
mkdir qinglong
wget https://raw.githubusercontent.com/whyour/qinglong/master/docker/docker-compose.yml

# 启动
docker-compose up -d
# 停止
docker-compose down
```

### Podman

```sh
# https://podman.io/getting-started/installation
podman run -dit \
  --network bridge \
  -v $PWD/ql/data:/ql/data \
  # 冒号后面的 5700 为默认端口，如果设置了 QlPort, 需要跟 QlPort 保持一致
  -p 5700:5700 \
  # 部署路径非必须，以斜杠开头和结尾，比如 /test/
  -e QlBaseUrl="/" \
  # 部署端口非必须，当使用 host 模式时，可以设置服务启动后的端口，默认 5700
  -e QlPort="5700" \
  --name qinglong \
  --hostname qinglong \
  docker.io/whyour/qinglong:latest
```

## 使用

### 内置命令

| 命令                                                                            | 说明                                                                                               |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `ql update`                                                                     | 更新并重启青龙                                                                                     |
| `ql extra`                                                                      | 运行自定义脚本 extra.sh                                                                            |
| `ql raw <file_url>`                                                             | 添加单个脚本文件                                                                                   |
| `ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch> <extensions>` | 添加单个仓库的指定脚本                                                                             |
| `ql rmlog <days>`                                                               | 删除旧日志                                                                                         |
| `ql bot`                                                                        | 启动 tg-bot                                                                                        |
| `ql check`                                                                      | 检测青龙环境并修复                                                                                 |
| `ql resetlet`                                                                   | 重置登录错误次数                                                                                   |
| `ql resettfa`                                                                   | 禁用两步登录                                                                                       |
| `task <file_path>`                                                              | 依次执行，如果设置了随机延迟，将随机延迟一定秒数                                                   |
| `task <file_path> now`                                                          | 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日，同时记录在日志文件中                   |
| `task <file_path> conc <env_name> <account_number>(可选的)`                     | 并发执行，无论是否设置了随机延迟，均立即运行，前台不产生日，直接记录在日志文件中，且可指定账号执行 |
| `task <file_path> desi <env_name> <account_number>`                             | 指定账号执行，无论是否设置了随机延迟，均立即运行                                                   |
| `task -m <max_time> <file_path>`                                                | 设置任务超时时间                                                                                   |
| `task -l <file_path>`                                                           | 实时打印任务日志，创建定时任务时，不用携带此参数                                                   |

### 参数说明

| 参数             | 说明                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------- |
| `file_url`       | 脚本地址                                                                                      |
| `repo_url`       | 仓库地址                                                                                      |
| `whitelist`      | 拉取仓库时的白名单，即就是需要拉取的脚本的路径包含的字符串，多个竖线分割                      |
| `blacklist`      | 拉取仓库时的黑名单，即就是需要拉取的脚本的路径不包含的字符串，多个竖线分割                    |
| `dependence`     | 拉取仓库需要的依赖文件，会直接从仓库拷贝到 scripts 下的仓库目录，不受黑名单影响，多个竖线分割 |
| `extensions`     | 拉取仓库的文件后缀，多个竖线分割                                                              |
| `branch`         | 拉取仓库的分支                                                                                |
| `days`           | 需要保留的日志的天数                                                                          |
| `file_path`      | 任务执行时的文件路径                                                                          |
| `env_name`       | 任务执行时需要并发或者指定时的环境变量名称                                                    |
| `account_number` | 任务执行时指定某个环境变量需要执行的账号序号                                                  |
| `max_time`       | 超时时间，后缀"s"代表秒(默认值), "m"代表分, "h"代表小时, "d"代表天                            |
