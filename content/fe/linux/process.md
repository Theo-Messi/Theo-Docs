---
title: Linux 进程管理 进程监控与优化
head:
  - - meta
    - name: description
      content: 学习 Linux 进程管理，掌握如何监控、控制和优化系统中的进程。
  - - meta
    - name: keywords
      content: Linux 进程管理 进程监控 系统优化 命令行进程
---

# Linux 进程管理 进程监控与优化

## 查询进程

### 查询正在运行的进程信息

```sh
ps -ef
```

### 查询归属于用户 root 的进程

```sh
ps -ef | grep root
ps -lu root
```

### 查询进程 ID（适合只记得部分进程字段）

```sh
pgrep 查找进程
```

### 查询进程名中含有 re 的进程

```sh
pgrep -l re
2 kthreadd
28 ecryptfs-kthrea
29515 redis-server
```

### 以完整的格式显示所有的进程

```sh
ps -ajx
```

### 显示进程信息，并实时更新

```sh
top
```

### 查看端口占用的进程状态

```sh
lsof -i:3306
```

### 查看用户 username 的进程所打开的文件

```sh
lsof -u username
```

### 查询 init 进程当前打开的文件

```sh
lsof -c init
```

### 查询指定进程 ID (23295) 打开的文件

```sh
lsof -p 23295
```

### 查询指定目录下被进程开启的文件（使用 +D 递归目录）

```sh
lsof +d mydir1/
```

## 终止进程

### 杀死指定 PID 的进程 (PID 为 Process ID)

```sh
kill PID
```

### 杀死相关进程

```sh
kill -9 3434
```

### 杀死 job 工作 (job 为 job number)

```sh
kill %job
```

## 进程监控

### 查看系统中使用 CPU、使用内存最多的进程

```sh
top
(->)P
```

输入 `top` 命令后，进入交互界面；接着输入字符命令后显示相应的进程状态：

- `P`：根据 CPU 使用百分比大小进行排序。
- `M`：根据驻留内存大小进行排序。
- `i`：使 top 不显示任何闲置或者僵死进程。

## 分析线程栈

使用命令 `pmap` 来输出进程内存的状况，可以用来分析线程堆栈：

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

## 综合运用

### 将用户 colin115 下的所有进程名以 av\_ 开头的进程终止

```sh
ps -u colin115 |  awk '/av_/ {print "kill -9 " $1}' | sh
```

### 将用户 colin115 下所有进程名中包含 HOST 的进程终止

```sh
ps -fe| grep colin115|grep HOST |awk '{print $2}' | xargs kill -9;
```
