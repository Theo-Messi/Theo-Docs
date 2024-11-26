---
title: Markdown 入门使用
head:
  - - meta
    - name: description
      content: Markdown 入门使用
---

<Box
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify1', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    //标签
    { name: 'Vue', link: '#', icon: 'vscode-icons:file-type-vue', tag: 'vuejs' }
  ]"
/>

---

<Links
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify1', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    // 不使用图标 + 描述
    { name: 'Google', link: 'https://www.google.com', desc: '全球最大的搜索引擎' }
  ]"
/>

---

<BoxCube
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify1', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    //描述
    { name: 'Vue.js', link: '#', icon: 'devicon:vuejs', desc: 'v3.4.31' }
  ]"
/>

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

```md
[这是一个链接](https://doc.theojs.cn/)
```

**输出**

[这是一个链接](https://doc.theojs.cn/)

## 图片

**输入**

```md
![home-img](/index/home.png =300x300)
```

**输出**

![home-img](/index/home.png =300x300)

## 视频

**输入**

```html
<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=1205847484&bvid=BV1if421Q7mL&cid=1584505931&p=1"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
></iframe>
```

**输出**

<iframe
  loading="lazy"
  width="100%"
  height="400"
  src="//player.bilibili.com/player.html?isOutside=true&aid=1205847484&bvid=BV1if421Q7mL&cid=1584505931&p=1"
  frameborder="0"
  allowfullscreen="true"
></iframe>

### 或者使用组件

**输入**

```vue
YouTube 视频
<Vid id="dQw4w9WgXcQ" />
<!-- 或者 -->
<Vid to="youtube" id="dQw4w9WgXcQ" />

Bilibili 视频
<Vid to="bilibili" id="1205847484" />

腾讯视频
<Vid to="tencent" id="y0035f2sc4s" />

优酷视频
<Vid to="youku" id="XNTE5NTc3NjIwMA==" />

vimeo 视频
<Vid to="vimeo" id="76979871" />

西瓜视频
<Vid to="xigua" id="7421926380926927399" />
```

**输出**

YouTube 视频
<Vid id="dQw4w9WgXcQ" />

<!-- 或者 -->
<Vid to="youtube" id="dQw4w9WgXcQ" />

Bilibili 视频
<Vid to="bilibili" id="1205847484" />

腾讯视频
<Vid to="tencent" id="y0035f2sc4s" />

优酷视频
<Vid to="youku" id="XNTE5NTc3NjIwMA==" />

vimeo 视频
<Vid to="vimeo" id="76979871" />

西瓜视频
<Vid to="xigua" id="7421926380926927399" />

## 音乐

**输入**

```html
<iframe
  :frameborder="0"
  :border="0"
  :marginwidth="0"
  :marginheight="0"
  :width="330"
  :height="86"
  src="//music.163.com/outchain/player?type=2&id=393697&auto=1&height=66"
>
</iframe>
```

**输出**

<iframe
  frameborder="0"
  border="0"
  marginwidth="0"
  marginheight="0"
  width="330"
  height="86"
  src="//music.163.com/outchain/player?type=2&id=393697&auto=1&height=66"
>
</iframe>

## 设置字体颜色

**输入**

```html
<span :style="{ color: 'gray' }">color=gray</span><br />
<span :style="{ color: '#00ffff' }">color=#00ffff</span><br />
<span :style="{ color: '#0099ff' }">color=#0099ff</span><br />
```

**输出**

<span :style="{ color: 'gray' }">color=gray</span><br>
<span :style="{ color: '#00ffff' }">color=#00ffff</span><br>
<span :style="{ color: '#0099ff' }">color=#0099ff</span><br>

## 表格

**输入**

```md
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

```md
:tada: :100:
```

**输出**

:tada: :100:

## 容器

**输入**

```md
::: info
[这是一个链接](https://doc.theojs.cn/)
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)
:::

::: details
[这是一个链接](https://doc.theojs.cn/)
:::
```

**输出**
::: info
[这是一个链接](https://doc.theojs.cn/)
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)
:::

::: details
[这是一个链接](https://doc.theojs.cn/)
:::

## 自定义容器

**输入**

````md
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**输出**
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
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

````md
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

````md
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
      msg: 'Highlighted!' // [!!code hl] 这里多加一个!为了不被格式化
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

````md
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!!code --] 这里多加一个!为了不被格式化
      msg: 'Added' // [!!code ++] 这里多加一个!为了不被格式化
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

````md
```js
export default {
  data() {
    return {
      msg: 'Error', // [!!code error] 这里多加一个!为了不被格式化
      msg: 'Warning' // [!!code warning] 这里多加一个!为了不被格式化
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

````md
```ts {1}
// 默认情况下禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 行号已启用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

**输出**

```ts {1}
// 默认情况下禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 行号已启用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

## 代码组

**输入**

````md
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

```md
<<< @/code/cs.ts
<<< @/code/cs.ts{2}
```

**输出**

<<< @/code/cs.ts
<<< @/code/cs.ts{2}

## 徽章

**输入**

```md
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

```vue
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Theo-Messi.png',
    name: 'Theo',
    title: 'Author',
    links: [{ icon: 'github', link: 'https://github.com/Theo-Messi' }]
  }
]
</script>

<VPTeamMembers size="small" :members="members" />
```

**输出**

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Theo-Messi.png',
    name: 'Theo',
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/Theo-Messi' },
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />

## 图片浅色与深色模式

**输入**

```md
<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}
```

```md
<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

**输出**

<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}

<!-- 深色模式 -->

![深色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![浅色模式](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
