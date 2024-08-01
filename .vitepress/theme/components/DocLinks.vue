<script lang="ts">
import { defineComponent } from 'vue'

interface Item {
  name: string
  link: string
  color?: string
  icon?: string
  light?: string
  dark?: string
}

export default defineComponent({
  name: 'Links',
  props: {
    items: {
      type: Array as () => Item[],
      required: true
    }
  },
  methods: {
    isImage(url: string): boolean {
      return (
        typeof url === 'string' &&
        /\.(png|jpe?g|gif|svg|webp|bmp|tif?f|tiff|ico)(\?.*)?$/.test(url)
      )
    }
  }
})
</script>

<template>
  <div class="container">
    <a
      v-for="(item, index) in items"
      :key="item.name + index"
      class="link"
      :href="item.link"
      :name="item.name"
      :title="item.name"
      target="_blank"
    >
      <span class="box">
        <img
          v-if="item.icon && isImage(item.icon)"
          :src="item.icon"
          alt="Icon"
          class="icon"
        />
        <i
          v-else-if="item.icon"
          :class="item.icon + ' fa-2xl icon'"
          :style="{ color: item.color }"
        ></i>
        <i
          v-else-if="!item.light && !item.dark"
          class="fas fa-arrow-up-right-from-square fa-lg fa-icon"
        ></i>
        <img
          v-if="item.light"
          :src="item.light"
          alt="icon"
          class="icon light-only"
        />
        <img
          v-if="item.dark"
          :src="item.dark"
          alt="icon"
          class="icon dark-only"
        />
      </span>

      <span class="name">{{ item.name }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
:root:not(.dark) .dark-only {
  display: none;
}

:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 1rem;
}

.link {
  width: 100%;
  height: 3rem;
  border: 1px solid var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none !important;

  &:hover {
    border-color: var(--vp-c-brand-1);
  }
}

.box {
  position: relative;

  &:hover .icon,
  .name {
    color: var(--vp-c-brand-1);
  }
}

.icon-only {
  width: 2rem;
  margin-left: 1.5rem;
  margin-top: -1.5rem;
}

.icon {
  width: 2rem;
  margin-left: 1.5rem;
}

.fa-icon {
  width: 2rem;
  margin-left: 1.5rem;
  margin-top: -1.5rem;
}

.name {
  font-size: 0.87rem;
  margin-left: 1rem;
}
</style>
