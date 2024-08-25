---
title: 京东签到
head:
  - - meta
    - name: description
      content: 京东签到 京东签到脚本 京东签到自动任务 京东签到自动脚本 京东签到自动执行
---

:::tip 注意
**2.11.1 前版本**:

- 进入`config.sh`配置
- 把`GithubProxyUrl="https://ghproxy.com/` （差不在多 19 行）" 修改为`GithubProxyUrl=""`

**2.11.1 以上版本**:无需配置
:::

## 添加订阅

```sh
ql repo https://github.com/6dylan6/jdpro.git "jd_|jx_|jddj_" "backUp" "^jd[^_]|USER|JD|function|sendNotify"
```

- 任务定时建议（每 2 小时的 45 分更新） `45 7-23/2 * * *`
- 定时可随意，不一定按这个来，但不要设置为每秒或每分钟

## 创建变量

- 变量名 `JD_COOKIE`，变量值 `pt_key=xxxx;pt_pin=xxxx;`

## 使用流程

- 青龙部署
- 修改青龙 config.sh 配置，差不多在 17 行（特别注意，没有修改此配置，任务拉不全，一键部署可忽略此处）；
- `RepoFileExtensions="js py"`修改为 `RepoFileExtensions="js py sh ts"` 保存；
- 新建拉库任务或订阅，并执行，刷新浏览器即可看到添加的任务；
- 在`定时任务`中运行`依赖安装`
- 添加 CK 环境变量，多 CK 不要写在一起，每个都新建 `JD_COOKIE` 变量；
- 通知 key 变量请添加到配置管理 config.sh 文件，否则收不到通知；
