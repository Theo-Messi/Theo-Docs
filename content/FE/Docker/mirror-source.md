---
title: Docker 国内镜像加速
head:
  - - meta
    - name: description
      content: Docker 虚拟化
---

### docker 加速

默认情况下，docker 下载镜像是从官网下载，下载速度特别慢，我们可以使用阿里云加速器可已提升获取 Docker 官网镜像的速度。

1.  **执行目录创建文件（如已存在请忽略此步）**

```bash
touch /ect/docker/deamon.json
```

2.  **修改文件内容为**

```cpp
   {
     "registry-mirrors": ["https://v2c6fjn8.mirror.aliyuncs.com"]
   }
```

注意：此网址是从阿里云控制台复制过来的，每个登录用户都不一样。当然用这个也是可以的。

3.  **重启 docker 服务**

```bash
systemctl restart docker
```
