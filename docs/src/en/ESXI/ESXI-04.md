---
title: ESXI installation
---

## ESXI starts booting

:::tip note
When you see the code running interface, immediately press Shift+O on the keyboard, delete redundant commands at the bottom of the screen, and enter the commands manually
:::

```sh
cdromBoot runweasel autoPartitionOSDataSize=4096
```

Note that it is case sensitive. After the input is completed, press Enter to continue.

This command means that when installing ESXI, the system occupies 4096MB, which is 4GB. If you do not enter this command, ESXI8.0 will make the VMFSL system partition occupy more than 100 G by default, and there will not be much available VMFS. Of course, if your R1 hard drive is large enough, you can do it without typing.

## ESXI scan disk

For subsequent installation, ESXI will scan the disk, select the hard disk, then set the password of the root account, confirm the installation information, and finally restart the device.
