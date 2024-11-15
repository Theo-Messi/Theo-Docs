---
title: 更改中文语言
head:
  - - meta
    - name: description
      content: 更改中文语言
---

## 1.安装区域设置 (locales)

Ubuntu 系统通常预装了 `locales`，但在 Kali Linux 和 Debian 系统中可能需要手动安装。执行以下命令：

```sh
sudo apt update​ # 更新索引
sudo apt install locales​ # 安装区域设置包
```

## 2.区域设置

```sh
sudo dpkg-reconfigure locales
```

选择以下选项并用空格键选中

- `zh_CN GB2312`
- `zh_CN.GB18030 GB18030`
- `zh_CN.GBK GBK`
- `zh_CN.UTF-8`

![locales](https://i.theojs.cn/docs/202406101154079.png '选择`zh_CN GB2312` `zh_CN GB2312` `zh_CN.GBK GBK` `zh_CN.UTF-8`选项并用空格键选中')

再次选择 `zh_CN.UTF-8`, 然后回车完成设置

![locales](https://i.theojs.cn/docs/202406101155372.png '再次选择 `zh_CN.UTF-8`, 然后回车完成设置')

## 3.重启系统

完成上面设置使用 `reboot` 命令重启系统.

重启后,如果有发现本该显示中文的地方出现了方块乱码,则还需要安装字体来支持中文
::: tip
Ubuntu没遇到过, 也是Debian 和 Kali Linux 遇到过的情况
:::

```sh
sudo apt install ttf-wqy-microhei ttf-wqy-zenhei xfonts-intl-chinese
```

再次重启系统即可正常显示
