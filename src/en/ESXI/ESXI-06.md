---
title: ESXI frontend configuration
---

## Step 1 - Assign IP to computer

We plug one end of the network cable into the eth0 port of the soft router, and the other end into the computer

Because ESXi does not have DHCP (Dynamic Host Configuration Protocol, Dynamic Host Configuration Protocol) function, there is no way to automatically assign an IP address to the computer.

You need to modify it manually here, change the computer IP to the same network segment

## Step 2 - Access the WEB side

On the PC side, enter the IP address configured previously in the background and access the ESXI Web management terminal. I configured it as 10.10.0.254

## Step 3 - Enable automatic startup policy

![](https://m.theovan.xyz/img/v2-e508b300fc8fa1eff4e7de8b4904500a_1440w.webp)

## Step 4 - In power management, enable high performance

![](https://m.theovan.xyz/img/v2-84959304493c26da1a90ca881f456064_1440w.webp)

## Step 5 - Network Setup

#### 1. Virtual switch. The system comes with one virtual switch by default. You need to add the other three.

![](https://m.theovan.xyz/img/v2-29987dd12070b29205393e18f227d234_1440w.webp)

#### 2. For example, the uplink bound to the vSwitch0 virtual switch is port 0 of the physical network card.

![](https://m.theovan.xyz/img/v2-8f38d0f1f3edaa89d4343e3f9dde17c2_1440w.webp)

#### 3. Similarly, the uplink bound to the vSwitch1 virtual switch is port 1 of the physical network card. According to this logic, bind the remaining network ports to an independent virtual switch at once.

![](https://m.theovan.xyz/img/v2-e3ebe6f441baa56cda13c3f07c2cdb45_1440w.webp)

#### 4. In the security options of each vSwitch virtual switching, promiscuous mode, MAC address change, and pseudo transmission need to be enabled. If it is not turned on, problems will occur, resulting in inability to communicate between network cards, network failure, etc.

![](https://m.theovan.xyz/img/20230927203137.png)

#### 5. After the virtual switch maintenance is completed, return to the port group and add four virtual networks accordingly.

![](https://m.theovan.xyz/img/20230927203201.png)

#### 6. For example, VM Network is bound to switch vSwitch0, and VM Network1 is bound to switch vSwitch1.

![](https://m.theovan.xyz/img/20230927203241.png)
![](https://m.theovan.xyz/img/20230927203306.png)

#### 7. The final effect is that the physical network card port 0 is bound to the VM Network virtual network through the vSwitch0 virtual switch. Finally, the virtual machine uses the VM Network virtual network to communicate.

![](https://m.theovan.xyz/img/20230927203344.png)
