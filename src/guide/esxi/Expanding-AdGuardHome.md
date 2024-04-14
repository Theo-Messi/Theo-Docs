---
title: 扩容 AdGuardHome
head:
  - - meta
    - name: keywords
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
  - - meta
    - name: description
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
---

## 首先使虚拟机处于关闭状态,然后点击编辑

修改内存为 25 GB 保存并开启虚拟机

![](https://m.theovan.xyz/img/20231231142111.png)

## SSH 到虚拟机

```sh
df -h
```

![](https://m.theovan.xyz/img/20231231142451.png)

## 挂载扩容硬盘

```sh
fdisk /dev/sda
d
2
n
回车(默认)
回车(默认)
y
wq
```

## 格式化硬盘

```sh
resize2fs /dev/sda2
```

## 查看结果

```sh
df -h
```
