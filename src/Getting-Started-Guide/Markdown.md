---
title: Markdown 入门使用
head:
  - - meta
    - name: keywords
      content: Markdown
  - - meta
    - name: description
      content: Markdown 入门使用
---

## 自定义盒子

<div class="box-container next-steps">
  <a class="box" href="/streaming/Netflix-guide">
    <p class="next-steps-link">
    <!-- <img src="https://theme-hope-assets.vuejs.press/logo.svg" alt="" class="next-steps-icon"> -->
    流媒体观影</p>
    <p class="next-steps-caption">点击跳转</p>
  </a>
  <a class="box" href="/serve/sharing/Account-sharing-guide">
    <p class="next-steps-link">服务推荐</p>
    <p class="next-steps-caption">点击跳转</p>
  </a>
    <a class="box" href="/serve/sharing/Account-sharing-guide">
    <p class="next-steps-link">服务推荐</p>
    <p class="next-steps-caption">点击跳转</p>
  </a>
</div>

## 待办列表

- [x] 事项 1
- [ ] 事项 2
- [x] 事项 3

## 字体

**输入**

```
_斜体文本_
**粗体文本**
**_粗斜体文本_**
```

**输出**

_斜体文本_  
**粗体文本**  
**_粗斜体文本_**

## 删除线

**输入**

```
~~BAIDU.COM~~
```

**输出**

~~BAIDU.COM~~

## 下划线

**输入**

```
<u>带下划线文本</u>
```

**输出**

<u>带下划线文本</u>

## 列表

**输入**

```
- 1

* 2

- 3
```

**输出**

- 1

* 2

- 3

## 链接

**输入**

```
[这是一个链接](https://theovan.cn/)
```

**输出**

[这是一个链接](https://theovan.cn/)

## 图片

**输入**

```
![home-img](/index/home.png =300x300)
```

**输出**

![home-img](/index/home.png =300x300)

## 视频

**输入**

```
<video src="https://m.theovan.cn/docs/video.mp4" controls="controls" width="500" height="300"></video>
```

**输出**

<video src="https://m.theovan.cn/docs/video.mp4" controls="controls" width="500" height="300"></video>

## 音乐

**输入**

```
<iframe
    frameborder="no"
    border="0"
    marginwidth="0"
    marginheight="0"
    width=330
    height=86
    src="//music.163.com/outchain/player?type=2&id=393697&auto=1&height=66">
</iframe>
```

**输出**

<iframe
    frameborder="no"
    border="0"
    marginwidth="0"
    marginheight="0"
    width=330
    height=86
    src="//music.163.com/outchain/player?type=2&id=393697&auto=1&height=66">
</iframe>

## 设置字体颜色

**输入**

```
<font color=gray > color=gray </font><br>
<font color=#00ffff > color=#00ffff </font><br>
<font color=#0099ff > color=#0099ff </font><br>
```

**输出**
<font color=gray > color=gray </font><br>
<font color=#00ffff > color=#00ffff </font><br>
<font color=#0099ff > color=#0099ff </font><br>

## 表格

**输入**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## 表情符号

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

## 容器

**输入**

```
::: info
[这是一个链接](https://theovan.cn/)
:::

::: tip
[这是一个链接](https://theovan.cn/)
:::

::: warning
[这是一个链接](https://theovan.cn/)
:::

::: danger
[这是一个链接](https://theovan.cn/)
:::

::: details
[这是一个链接](https://theovan.cn/)
:::
```

**输出**
::: info
[这是一个链接](https://theovan.cn/)
:::

::: tip
[这是一个链接](https://theovan.cn/)
:::

::: warning
[这是一个链接](https://theovan.cn/)
:::

::: danger
[这是一个链接](https://theovan.cn/)
:::

::: details
[这是一个链接](https://theovan.cn/)
:::

## 自定义容器

**输入**

````
::: danger STOP
[这是一个链接](https://theovan.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**输出**
::: danger STOP
[这是一个链接](https://theovan.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

## GitHub 风格容器

**输入**

```md
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

**输出**

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

## 语法高亮

**输入**

````
```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```
````

**输出**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

## 代码块行突出

**输入**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!!code focus] 这里多加一个!为了不被格式化
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code hl]
    }
  }
}
```

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## 代码块色彩差异

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 代码块错误和警告

**输入**

````
```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## 代码块行号

**输入**

````
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

**输出**

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

## 代码组

**输入**

````
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

**输出**
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

## 导入代码片段

**输入**

```
<<< @/code/cs.ts
<<< @/code/cs.ts{2}
```

**输出**

<<< @/code/cs.ts
<<< @/code/cs.ts{2}

## 徽章

**输入**

```
<Badge type="info" text="default" />

<Badge type="tip" text="^1.9.0" />

<Badge type="warning" text="beta" />

<Badge type="danger" text="caution" />

<Badge type="tip">custom element</Badge>
```

**输出**

<Badge type="info" text="default" />

<Badge type="tip" text="^1.9.0" />

<Badge type="warning" text="beta" />

<Badge type="danger" text="caution" />

<Badge type="tip">custom element</Badge>

## 团队页面

**输入**

```
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Theo-messi.png',
    name: 'Theo',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/Theo-messi' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
```

**输出**

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Theo-messi.png',
    name: 'Theo',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/Theo-messi' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />

## 图片浅色与深色模式

**输入**

```
<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}
```

```
<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

**输出**

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
