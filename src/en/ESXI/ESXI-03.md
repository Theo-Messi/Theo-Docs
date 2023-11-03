---
title: Motherboard BIOS settings
---

## Step 1 - Enter BIOS Setup,

Press `del`/`esc` when booting

## Step 2 - Turn on VT-x

After entering `BIOS`, first turn on `processor virtualization` (ie `VT-x`).

> VT-x is an instruction set used by Intel using Virtualization virtualization technology. Provides hardware-assisted virtualization solutions for the X86 platform. A technology that can divide a single computer software environment into multiple independent partitions, each of which can simulate a computer as needed. Integrate multiple systems into one server or computer, so that the same physical platform can run multiple operating systems of the same or different types at the same time to serve as support platforms for different businesses and applications.

## Step 3 - Turn on VT-d

> Intel Virtualization Technology for Directed I/O (VT-d) is an extension of Intel Virtualization Technology (VT) that provides virtualization solution assistance to hardware. Intel VT-d can help users improve system security and reliability and improve I/O device performance in virtualized environments. These essentially help IT managers lower total cost of ownership by reducing potential downtime; and increase productive throughput by making fuller use of data center resources.

## Step 4 - Turn on AES

> **AES Instruction Set**: Advanced Encryption Standard Instruction Set (Intel Advanced Encryption Standard New Instructions, AES-NI for short) is an extension of the x86 instruction set architecture for Intel and AMD microprocessors, introduced by Intel in 2008 proposed in March. The purpose of this instruction set is to improve the speed with which applications perform encryption and decryption using the Advanced Encryption Standard (AES), which can increase the speed of studying abroad.

## Step 5 - Turn on Turbo Boost technology

In the `CPU Technology Settings Options`, find the `Intel Turbo Mode Tech` option. Some motherboards may display `Intel Turbo Boost Tech`. As for `C-STATE`, I won’t open it yet.

> C-STATE is the power management function of the CPU. It manages the energy consumption of the CPU according to the load of the CPU. Combined with the Turbo acceleration technology, when running a single-threaded application, C-STATE will turn off or reduce the energy consumption of other cores. , add these energy to the core of executing the program to improve the execution efficiency of the CPU.
> The mode of C-STATE starts from C0, which represents the "normal" CPU operating mode (CPU is 100% activated). The larger the number after C, the deeper the CPU enters sleep mode. In other words, the more circuits and clock signals that are turned off, the longer it will take to fully wake the CPU into C0 mode.

## Step 6 - Set up USB boot

Set the `U disk` as the first boot item in `BOOT`.
