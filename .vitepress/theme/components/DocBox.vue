<script lang="ts">
import { defineComponent } from 'vue'

interface Item {
  link: string
  icon: string
  name: string
  tag?: string
  light?: string
  dark?: string
  color?: string
}

export default defineComponent({
  name: 'Box',
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
  <div class="box-container">
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.link"
      :name="item.name"
      :title="item.name"
      class="box"
      target="_blank"
    >
      <div class="box-content">
        <span v-if="item.tag" class="tag">{{ item.tag }}</span>
        <span v-if="isImage(item.icon)" class="icon-container">
          <img :src="item.icon" alt="icon" class="icon-container" />
        </span>
        <span v-else class="icon">
          <i :class="item.icon + ' fa-2xl'" :style="{ color: item.color }"></i>
        </span>
        <img
          v-if="item.light"
          :src="item.light"
          alt="icon"
          class="icon-container light-only"
        />
        <img
          v-if="item.dark"
          :src="item.dark"
          alt="icon"
          class="icon-container dark-only"
        />
        <p class="name">{{ item.name }}</p>
      </div>
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

.box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 1rem;
}

.box {
  position: relative;
  border: 1px solid var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  width: 13rem;
  height: 3.5rem;
  display: flex;
  text-decoration: none !important;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: var(--vp-c-brand-1);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

.box-content {
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
}

.tag {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-text);
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-top-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  z-index: 1;
}

.icon-container {
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  display: inline-block;
  height: 2em;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: var(--vp-c-text-1);
}

.name {
  margin-left: 1rem;
  font-size: 0.87rem;
  line-height: 1;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
