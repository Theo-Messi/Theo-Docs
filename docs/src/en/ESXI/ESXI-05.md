---
title: ESXI backend configuration
---

After the installation is completed, a background configuration interface will be entered.

Press `F2` to enter the background configuration interface, enter the root account password, select a network port as the management port, and connect to the PC

## Configuration - Configure Management Network

![](https://m.theovan.xyz/img/v2-e4aff21e700228ae0ec283e9847089b1_1440w.webp)

#### 1. Select `Network Adapters` and configure the management port

![](https://m.theovan.xyz/img/v2-d4053e9e9c9effc2d55f8a9027c9d0b2_1440w.webp)

#### 2. After entering, you will find that the status of one of the network cards is `connected`, which is the network port to which the network cable is connected.

:::danger
**Only one network port can be selected as the management port here, do not select multiple**
:::

#### 3. Select the vmnic3 network port. The space indicates selection or cancellation. After the configuration is completed, press Enter to save. Press esc to return to the upper menu. You may be prompted whether to save. Just select Yes.

## Configuration - IPv4 Configuration

![](https://m.theovan.xyz/img/v2-6000431802b9b7f1ef8c2ecc11f3ff8f_1440w.webp)

#### 1. Select static IP and configure it as the intranet segment IP in your network environment.

#### 2. Generally configured as `lonely IP`, it can be configured at will. The gateway is the IP of your router.

![](https://m.theovan.xyz/img/v2-42a37dc2ded65a10cadf32f33968deb5_1440w.webp)

#### 3. If `Openwrt` is built into `ESXI`, configure it as the IP of `Openwrt` routing

For example, the default IP of my firmware `Openwrt` is `10.10.0.253`, so fill in `10.10.0.253` for the `Gateway` here.
Finally, `esc` exits, and a confirmation prompt will pop up, just press Y.
