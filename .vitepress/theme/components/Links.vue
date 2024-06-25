<template>
  <a v-if="l && t" :href="l" target="_blank" class="custom-link">
    <span class="img">
      <img v-if="isImage" :src="i" class="block-icon" alt="Icon" />
      <span v-else-if="i" v-html="i" class="block-icon svg-icon"></span>
      <i v-else class="fa-solid fa-arrow-up-right-from-square block-icon"></i>
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
    t: { type: String, required: true }
  },
  computed: {
    isImage() {
      // 检查 i 是否是图片路径（假设以 .png, .jpg, .gif, .svg 结尾）
      return typeof this.i === 'string' && /\.(png|jpe?g|gif|svg)(\?.*)?$/.test(this.i)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-alt);
  /* padding: 12px 24px; */
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
    border-color: var(--vp-c-brand-1); /* 边框颜色在悬停时渐变到这个颜色 */
    /* background-color: var(--vp-c-brand-soft); */ /* 如果需要背景颜色渐变，可以取消注释这一行 */
    text-decoration: none;
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

.svg-icon {
  width: 18px;
  height: 18px;
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
