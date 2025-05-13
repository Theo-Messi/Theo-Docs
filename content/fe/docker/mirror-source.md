---
title: Docker 国内镜像加速
head:
  - - meta
    - name: description
      content: 通过使用国内 Docker 镜像加速器（如阿里云、DaoCloud），可以显著提高镜像下载速度，优化 Docker 使用体验。
  - - meta
    - name: keywords
      content: Docker 国内镜像加速, 阿里云加速器, DaoCloud, 镜像加速, Docker 配置
---

### docker 加速

默认情况下，docker 下载镜像是从官网下载，下载速度特别慢，我们可以使用阿里云加速器可已提升获取 Docker 官网镜像的速度。

1.  **执行目录创建文件（如已存在请忽略此步）**

```bash
sudo touch /etc/docker/daemon.json
```

2.  **修改文件内容为**

::: code-group

```json [阿里云]
{
  "registry-mirrors": ["https://<your_unique_key>.mirror.aliyuncs.com"]
}
```

```json [DaoCloud]
{
  "registry-mirrors": ["https://f1361db2.m.daocloud.io"]
}
```

```json [中国科技大学]
{
  "registry-mirrors": ["https://mirrors.ustc.edu.cn"]
}
```

:::

注意：此网址是从阿里云控制台复制过来的，每个登录用户都不一样。当然用这个也是可以的。

3.  **重启 docker 服务**

配置完成后，重启 Docker 服务使设置生效。

```bash
sudo systemctl restart docker
```

4. 验证配置

可以使用以下命令来验证 Docker 是否使用了镜像加速器：

```bash
docker info | grep -i "registry"
```

如果配置成功，你应该能看到类似以下的输出：

```bash
Registry Mirrors:
 https://<your_unique_key>.mirror.aliyuncs.com/
```
