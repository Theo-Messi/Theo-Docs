<template>
  <a v-if="l && t" :href="l" target="_blank" class="custom-link">
    <span class="img">
      <img v-if="isImage && light && dark" :src="light" class="light-only" alt="Icon" />
      <img v-if="isImage && light && dark" :src="dark" class="dark-only" alt="Icon" />
      <img v-else-if="isImage" :src="i" alt="Icon" />
      <span v-else-if="i" class="icon-container">
        <i :class="i + ' fa-lg'" :style="{ color: color }"></i>
      </span>
      <i v-else class="fas fa-arrow-up-right-from-square"></i>
    </span>
    <span>{{ t }}</span>
  </a>
</template>

<script>
export default {
  name: 'Links',
  props: {
    l: { type: String, required: true },
    i: { type: String, default: '' },
    t: { type: String, required: true },
    light: { type: String, default: '' },
    dark: { type: String, default: '' },
    color: { type: String, default: '' }
  },
  computed: {
    isImage() {
      return (
        (this.light || this.dark || this.i) &&
        /\.(png|jpe?g|gif|svg|webp|bmp|tiff?|ico)(\?.*)?$/.test(this.light || this.dark || this.i)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
:root:not(.dark) .dark-only {
  display: none;
}

:root:is(.dark) .light-only {
  display: none;
}

a {
  margin-top: 1rem;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  text-decoration: none !important;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition:
    border-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    color 0.5s,
    background-color 0.5s;

  &:hover {
    border-color: var(--vp-c-brand-1);
  }
}

.img {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  img {
    width: 24px;
    object-fit: contain;
  }
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 576px) {
  .description {
    font-size: 12px;
    line-height: 18px;
  }

  .img {
    position: relative;
    width: 32px;
    height: 32px;
  }
}
</style>
