---
title: Git 设置用户信息 配置 Git 用户名 和 邮箱
description: 学习如何在 Git 中设置用户信息，包括用户名和邮箱，确保提交记录的正确性。
---

# Git 设置用户信息 配置 Git 用户名 和 邮箱

## 查看git配置信息

```sh
git config --list
```

## 查看git用户名、密码、邮箱的配置

```sh
git config user.name
git config user.password
git config user.email
```

## 设置git用户名、邮箱的配置

```sh
git config --global user.name “用户名”
git config --global user.email “邮箱”
# 用户名：建议使用注册 GitHub 时用的用户名
# 邮箱：建议使用注册 GitHub 时用的邮箱
```

## 使用 SSH 的方式

```sh
ssh-keygen -t rsa -C “邮箱地址”
公钥：id_rsa.pub
私钥：id_rsa
```
