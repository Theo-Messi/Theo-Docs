---
title: Linux 管道命令 | 高效处理数据流
head:
  - - meta
    - name: description
      content: 了解并掌握 Linux 管道命令，学习如何高效地在命令行中传递数据和组合命令。
  - - meta
    - name: keywords
      content: Linux 管道命令 数据流 管道操作 命令组合
---

管道命令操作符是：`|` ,它仅能处理经由前面一个指令传出的正确输出信息，也就是 `standard output` 的信息，对于 `stdandard` `error` 信息没有直接处理能力。然后，传递给下一个命令，作为标准的输入 `standard input`.
:::tip

1. 管道命令只处理前一个命令正确输出，不处理错误输出
2. 管道命令右边命令，必须能够接收标准输入流命令才行。

:::

#### 读出test.sh文件内容，通过管道转发给grep 作为输入内容

```sh
cat test.sh | grep -n 'echo'

5:    echo "very good!";
7:    echo "good!";
9:    echo "pass!";
11:    echo "no pass!";
```

#### cat test1.sh不存在，错误输出打印到屏幕，正确输出通过管道发送给grep

```sh
cat test.sh test1.sh | grep -n 'echo'

cat: test1.sh: 没有那个文件或目录
5:    echo "very good!";
7:    echo "good!";
9:    echo "pass!";
11:    echo "no pass!";
```

#### 将test1.sh 没有找到错误输出重定向输出给/dev/null 文件，正确输出通过管道发送给grep

```sh
cat test.sh test1.sh 2>/dev/null | grep -n 'echo'

5:    echo "very good!";
7:    echo "good!";
9:    echo "pass!";
11:    echo "no pass!";
```

#### 读取test.sh内容，通过管道发送给ls命令，由于ls 不支持标准输入，因此数据被丢弃

```sh
cat test.sh | ls

catfile      httprequest.txt  secure  test            testfdread.sh  testpipe.sh    testsh.sh      testwhile2.sh
envcron.txt  python           sh      testcase.sh     testfor2.sh    testselect.sh  test.txt       text.txt
env.txt      release          sms     testcronenv.sh  testfor.sh     test.sh        testwhile1.sh
```
