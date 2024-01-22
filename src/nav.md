---
layoutClass: m-nav-layout
title: 前端导航
outline: [2, 3, 4]
lastUpdated: false
editLink: false
---

<script setup>
import MNavLinks from '../.vitepress/theme/components/MNavLinks.vue'

import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/nav.scss"></style>

<!-- # 前端导航 -->

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
