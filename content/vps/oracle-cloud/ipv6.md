---
title: 甲骨文云(Oracle Cloud)免费服务器开启 IPv6
head:
  - - meta
    - name: description
      content: 甲骨文云(Oracle Cloud)免费服务器开启 IPv6
---

## 面板操作

![Oracle IPv6](https://i.theojs.cn/docs/202406231818861.png '前往 `网络`-> `虚拟云网络` -> 选择`查看网络详情`')

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231819553.png '在控制台面板上主要4个步骤')

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231820587.png '打开 `CIDR块` -> 点击 `添加 IPv6 CIDR块`')

![Oracle IPv6](https://i.theojs.cn/docs/202406231821399.png '添加成功后如图')

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231822211.png '打开`子网`，`编辑`子网信息')

![Oracle IPv6](https://i.theojs.cn/docs/202406231823342.png '勾选 `启用IPV6 CIDR块` 输入框随便输入一个值，例如：`ee` **点击保存**')

::: warning
这里如果出现下面的错误：`NotAuthorizedOrNotFound`，请移步到 [处理错误](#处理错误) 部分内容解决！成功后再继续这里的步骤！！

![Oracle IPv6](https://i.theojs.cn/docs/202406231824668.png 'NotAuthorizedOrNotFound')
:::

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231827273.png 'IPv6 CIDR块添加成功')

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231831909.png '`路由表` -> `路由表详情` -> 添加`路由规则`')

- 目的地 CIDR 块：`::/0` (注意2个冒号)
- 目标类型：`Internet网关`

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231831385.png '`安全列表` -> `查看详情` -> 添加`出站规则` 和 `入站规则`')

![Oracle IPv6](https://i.theojs.cn/docs/202406231831626.png '`安全列表` -> `查看详情` -> 添加`出站规则` 和 `入站规则`')

- 目的地类型：`CIDR`
- 目的地 CIDR：`::/0` (注意2个冒号)
- IP协议：`所有协议`

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231832850.png '查看`服务器实例详情` -> `附加的 VNIC` -> 点击`VNIC详情`')

右侧可见多了一个IPv6地址 的选项！点击 `分配 IPv6 地址`

---

![Oracle IPv6](https://i.theojs.cn/docs/202406231833826.png '可以指定一个你想要的IPv6格式，不指定会随机分配一个。')

![Oracle IPv6](https://i.theojs.cn/docs/202406231833883.png)

## 系统操作

::: tip

- ARM机器网卡名称默认为 `enp0s6`
- AMD机器网卡名称默认为 `ens3`
  :::

#### 1. 获取IPv6

```sh
dhclient -6 ens3
```

---

#### 2. 查看IPv6是否生效

```sh
ip add
```

![Oracle IPv6](https://i.theojs.cn/docs/202406231836653.png '查看IPv6是否生效')

---

#### 3. 测试一下IPv6网络情况！

```sh
ping6 google.com
```

![Oracle IPv6](https://i.theojs.cn/docs/202406231837145.png '测试一下IPv6网络情况！')

---

#### 4. 重启服务器

```sh
reboot
```

## 处理错误

添加IPv6的时候 提示：`NotAuthorizedOrNotFound`

首选打开 `Cloud Shell` 执行命令

![Oracle IPv6](https://i.theojs.cn/docs/202406231844976.png '处理错误')

---

#### 1. 获取 `compartment_id`

```sh
oci iam compartment list
```

![Oracle IPv6](https://i.theojs.cn/docs/202406231844994.png '获取 `compartment_id`')

---

#### 2. 查询子网(subnet)列表，获取到子网ID(红框内) subnet_id

:::tip
下面命令中的 `[compartment_id]` 替换为 上面的 `compartment_id`，不保留[]符号
:::

```sh
oci network subnet list --compartment-id [compartment_id]
```

![Oracle IPv6](https://i.theojs.cn/docs/202406231846849.png '如果你的子网是多个的话，这里会获取多个id，自己创建时间辨别一下到底你操作的是哪个？不知道咋辨别，那就2个ID都试一试！')

---

#### 3. 获取 cidr

![Oracle IPv6](https://i.theojs.cn/docs/202406231846612.png '获取CIDR块地址')

---

#### 4. 更新子网(subnet)信息

将 `[subnet_id]` 和 `[cidr]` 替换一下！

```sh
oci network subnet update --subnet-id [subnet_id] --ipv6-cidr-block [cidr]
```

:::tip
如果执行提示错误：`The requested ipv6CidrBlock 2603:c1:3:b500::/56 is invalid: Subnet can have only 64 bit IPv6 CIDRs.`

需要修改cidr，`2603:c1:3:b500::/56` -> `2603:c1:3:b500::/64`

然后重新执行
:::
