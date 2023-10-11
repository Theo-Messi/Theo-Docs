---
layoutClass: m-nav-layout
outline: [2, 3, 4]
lastUpdated: false
editLink: false
---

<script setup>
import MNavLinks from '../../docs/.vitepress/nav/components/MNavLinks.vue'

import { NAV_DATA } from '../../docs/.vitepress/nav/data'
</script>
<style src="../../docs/.vitepress/nav/nav.scss"></style>

<!-- # 前端导航 -->

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
