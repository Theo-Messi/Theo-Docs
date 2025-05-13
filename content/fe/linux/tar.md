---
title: Linux 打包与拆包 | 文件打包与解压命令
head:
  - - meta
    - name: description
      content: 学习 Linux 打包与拆包命令，掌握如何压缩和解压文件，优化存储和传输。
  - - meta
    - name: keywords
      content: Linux 打包 拆包 文件压缩 解压命令 tar gzip
---

## 打包与拆包

一般 Linux 上常用的压缩方式是选用 `tar` 将许多文件打包成一个文件，再以 `gzip` 压缩命令压缩成 `xxx.tat.gz(或者 xxx.tgz)` 的文件。

|      |                              |
| ---- | ---------------------------- |
| `-c` | 创建一个新 `tar` 文件        |
| `-v` | 显示运行过程的信息           |
| `-f` | 指定文件名                   |
| `-z` | 调用 `gzip` 压缩命令进行压缩 |
| `-t` | 查看压缩文件的内容           |
| `-x` | 解开 `tar` 文件              |

```bash
tar -cvf xxx.tar #打包
tar -zcvf xxx.tar.gz #打包并且压缩
tar -xvf xx.tar #拆包
tar -zxvf xx.tar.gz -C /usr/my #拆包解压 注意 -C 大写，防止路径找不到
```
