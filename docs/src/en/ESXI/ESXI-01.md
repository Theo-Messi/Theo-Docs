---
title: Installation guide
---

## ESXI Introduction

ESXi is an important component of the VMWare vSphere Hypervisor suite. It is an excellent server-level virtual machine. The predecessor was ESX, which relied on Linux source code. Later, the Linux source code was abandoned and became ESXi. The entire product has a strong commercial atmosphere, and the interface is clear and easy to use, but the hardware compatibility is poor (mainly for servers) and has little scalability. ESXi does not depend on any operating system and is installed directly on the bare metal. It can be regarded as an operating system in itself , and then other systems can be installed on top of it.

## Preparation

- ESXI 8 installation files
- disk writing tool
- Openwrt firmware
- StarWind V2V Converter program

## ESXI 8 installation files

Note that you need to register a `customer connect account` of `VMWare`

After registration and login, you can download the 60-day trial version of ESXI8.0

You can directly download the ISO image. If you need to package the driver, then download the `Offline Bundle offline bundle`

[Official website download](https://customerconnect.vmware.com/evalcenter?p=vsphere-eval-8)

## Disk writing tool

[Ventoy official website download](https://github.com/ventoy/Ventoy/releases)

[Balenaetcher official website download](https://etcher.balena.io/)

## Openwrt Firmware

This goes without saying. Either you compile it yourself, or you can use someone else's compiled one, as long as it's X86, such as the full version of ESir

## StarWind V2V Converter program

This program is used to convert OP firmware VMDK files to the storage format of ESXI 8.0

If you use VMDK directly, ESXI 8.0 will not be able to mount the image.

You need to fill in your email address to download, and the download address will be sent to your email address.

[Official website download](https://www.starwindsoftware.com/starwind-v2v-converter)
