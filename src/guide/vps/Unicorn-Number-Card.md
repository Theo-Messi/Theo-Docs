---
title: 搭建独角数卡网站
---

## 更新系统

```sh
apt update -y  && apt upgrade -y && apt install -y curl wget sudo socat
```

## 安装 docker

```sh
curl -fsSL https://get.docker.com | sh
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

## 创建目录

```sh
cd /home
mkdir web
cd web
mkdir html
mkdir mysql
mkdir certs
mkdir redis
touch nginx.conf
nano docker-compose.yml
```

## 配置 docker-compose

https://github.com/kejilion/docker/blob/main/LNMP-docker-compose.yml

## 申请证书

```sh
curl https://get.acme.sh | sh

~/.acme.sh/acme.sh --register-account -m xxxx@gmail.com

~/.acme.sh/acme.sh --issue -d shop.kejilion.eu.org --standalone
```

## 下载证书

```sh
~/.acme.sh/acme.sh --installcert -d shop.kejilion.eu.org --key-file /home/web/certs/key.pem --fullchain-file /home/web/certs/cert.pem
```

## NGINX 配置

https://github.com/kejilion/nginx/blob/main/nginx.conf

## 下载源码

```sh
cd /home/web/html && wget https://github.com/assimon/dujiaoka/releases/download/2.0.6/2.0.6-antibody.tar.gz && apt install -y tar && tar -zxvf 2.0.6-antibody.tar.gz && rm 2.0.6-antibody.tar.gz
```

## 运行

```sh
cd /home/web && docker-compose up -d
```

## 赋予权限

```sh
docker exec -it nginx chmod -R 777 /var/www/html
docker exec -it php chmod -R 777 /var/www/html
```

## 安装 PHP 扩展

```sh
docker exec php apt update && docker exec php apt install -y libmariadb-dev-compat libmariadb-dev libzip-dev libmagickwand-dev imagemagick

docker exec php docker-php-ext-install pdo_mysql zip bcmath gd intl opcache && docker exec php pecl install redis && docker exec php sh -c 'echo "extension=redis.so" > /usr/local/etc/php/conf.d/docker-php-ext-redis.ini'
```

## 重启 php

```sh
docker restart php
```

## 查看 php 扩展启用情况

```sh
docker exec -it php php -m
```

## 如果登录时报错再使用该命令，解除 HTTPS 限制

```sh
sed -i 's/ADMIN_HTTPS=false/ADMIN_HTTPS=true/g' /home/web/html/dujiaoka/.env
```
