---
title: 关闭降级检查
head:
  - - meta
    - name: description
      content: 关闭降级检查，刷入梅林固件前需关闭降级检查，ssh登录路由器后台后输入命令
  - - meta
    - name: keywords
      content: 关闭降级检查 梅林固件 ssh登录
---

## 关闭降级检查

1. 如果无法直接刷入，可能是官方固件版本过高，需关闭降级检查，ssh登录路由器后台后输入命令：

```sh
nvram set DOWNGRADE_CHECK_PASS=1
```

2. 进入路由器管理后台：`【系统管理】`-`【固件升级】`-`上传下载的固件`

3. 刷机后建议双清一次路由，勾选：`恢复默认值`，同时`清除存在本机 xxx`后点击`恢复`按钮
