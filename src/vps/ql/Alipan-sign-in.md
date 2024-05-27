---
title: 阿里云盘签到
head:
  - - meta
    - name: keywords
      content: 阿里云盘签到 阿里云盘签到脚本 阿里云盘签到教程 阿里云盘签到脚本
  - - meta
    - name: description
      content: 阿里云盘签到 阿里云盘签到脚本 阿里云盘签到教程 阿里云盘签到脚本
---

## 添加订阅

添加订阅后可在定时任务列表发现新增任务, 可自行调整任务执行时间

```sh
ql repo https://github.com/mrabit/aliyundriveDailyCheck.git "autoSignin" "" "qlApi"
```

- 任务定时建议（每 2 小时的 45 分更新） `45 7-23/2 * * *`
- 定时可随意，不一定按这个来，但不要设置为每秒或每分钟

### 新版本:

- `青龙面板 -> 订阅管理 -> 新建订阅`
- 在名称输入框粘贴命令并执行

### 旧版本:

- `青龙面板 -> 定时任务 -> 新建任务`
- 添加命令并执行

## 青龙面板添加依赖项

- **axios**

## 创建变量

- 变量名:`refreshToken`，变量值:`你的refreshToken`
