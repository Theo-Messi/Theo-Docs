---
title: Linux 进程管理
head:
  - - meta
    - name: description
      content: Linux 进程管理
---

### 查询进程

**查询正在运行的进程信息**

```sh
ps -ef
```

**查询归属于用户root的进程**

```sh
ps -ef | grep root
ps -lu root
```

**查询进程ID（适合只记得部分进程字段）**

```sh
pgrep 查找进程
```

**查询进程名中含有re的进程**

```sh
pgrep -l re
2 kthreadd
28 ecryptfs-kthrea
29515 redis-server
```

**以完整的格式显示所有的进程**

```sh
ps -ajx
```

**显示进程信息，并实时更新**

```sh
top
```

**查看端口占用的进程状态**

```sh
lsof -i:3306
```

**查看用户username的进程所打开的文件**

```sh
lsof -u username
```

**查询init进程当前打开的文件**

```sh
lsof -c init
```

**查询指定的进程ID(23295)打开的文件**

```sh
lsof -p 23295
```

**查询指定目录下被进程开启的文件（使用+D 递归目录）**

```sh
lsof +d mydir1/
```

### 终止进程

**杀死指定PID的进程 (PID为Process ID)**

```sh
kill PID
```

**杀死相关进程**

```sh
kill -9 3434
```

**杀死job工作 (job为job number)**

```sh
kill %job
```

### 进程监控

**查看系统中使用CPU、使用内存最多的进程**

```sh
top
(->)P
```

输入top命令后，进入到交互界面；接着输入字符命令后显示相应的进程状态：

对于进程，平时我们最常想知道的就是哪些进程占用CPU最多，占用内存最多。以下两个命令就可以满足要求:

- `P`：根据CPU使用百分比大小进行排序。
- `M`：根据驻留内存大小进行排序。
- `i`：使top不显示任何闲置或者僵死进程。

### 分析线程栈

使用命令 `pmap`，来输出进程内存的状况，可以用来分析线程堆栈；

```sh
pmap PID

ps -fe| grep redis
weber    13508 13070  0 08:14 pts/0    00:00:00 grep --color=auto redis
weber    29515     1  0  2013 ?        02:55:59 ./redis-server redis.conf

pmap 29515
29515:   ./redis-server redis.conf
08048000    768K r-x--  /home/weber/soft/redis-2.6.16/src/redis-server
08108000      4K r----  /home/weber/soft/redis-2.6.16/src/redis-server
08109000     12K rw---  /home/weber/soft/redis-2.6.16/src/redis-server
```

### 综合运用

**将用户colin115下的所有进程名以av\_开头的进程终止**

```sh
ps -u colin115 |  awk '/av_/ {print "kill -9 " $1}' | sh
```

**将用户colin115下所有进程名中包含HOST的进程终止**

```sh
ps -fe| grep colin115|grep HOST |awk '{print $2}' | xargs kill -9;
```
