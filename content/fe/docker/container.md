---
title: Docker 容器相关操作
head:
  - - meta
    - name: description
      content: Docker 容器相关操作，创建、启动、退出、进入容器，文件传递等
  - - meta
    - name: keywords
      content: Docker 容器 相关操作 创建 启动 退出 进入 文件传递
---

### 运行容器的相关操作

**查看 docker run 命令 ，创建并且启动容器**

```bash
docker run --help
docker run 后面的参数
	-i # 运行容器
	-t # 容器启动后，进入命令行
	-v # 目录映射 --挂载
	-d # 守护进程 --后台运行
	-p # 端口映射 如容器里面有tomcat，你本地的windows想访问:
	# docker tomcat 端口号是8080，需要在虚拟机映射一个端口9099
	# windows才可以访问 http://虚拟机ip:9099
```

**创建容器，并且进入命令行**

```bash
docker run -it --name=myTomcat2 tomcat /bin/bash
```

**退出**

```bash
exit
```

**退出之后，重新进入容器**

```bash
# 创建一个守护的容器
docker run -id --name=myTomcat2 tomcat
# 进入
docker exec -it myTomcat2 /bin/bash
```

**宿主机与 docker 容器的文件传递**

```bash
1、在宿主机上创建一个文件
touch test.txt

2、把文件复制到容器里面去
docker cp test.txt myTomcat2:/

3、进入跟目标
cd /
```

**从容器中的文件 copy 到宿主机中**

```bash
touch abc.txt

# 退出容器
exit

# 将容器中的文件复制到宿主机
docker cp myTomcat2:abc.txt /root
```

### 访问 tomcat

```bash
# 启动并作为守护进程
# -p 宿主机的端口: 容器里应用的端口8080
# war 挂载宿主机 -v 宿主机的路径: 容器路径
docker run -di --name --myTomcat -p 8080:8080 -v /usr/local/tomcat/webapps:/usr/local/tomcat/webapps tomcat

http://虚拟机ip:9999

 # 把war包放到宿主机的挂载目录中，直接刷新浏览器就出现项目的页面
# 微服务 k8s 容器式的性能测试
```

### 容器之间的关联

```bash
docker run -di --name=tomcat2 -p 8080:8080 --link mysql
```
