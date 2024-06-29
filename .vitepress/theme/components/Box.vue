<script>
export default {
  name: 'Box',
  props: {
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        // 验证每个项是否有必须的属性
        return items.every(
          (item) =>
            item.hasOwnProperty('l') &&
            item.hasOwnProperty('i') &&
            item.hasOwnProperty('t') &&
            item.hasOwnProperty('ct')
        )
      }
    }
  }
}
</script>

<template>
  <div class="box-container">
    <a v-for="(item, index) in items" :key="index" :href="item.l" class="box" target="_blank">
      <div class="box-content">
        <span v-if="item.ct" class="ct">{{ item.ct }}</span>
        <img v-if="item.i" :src="item.i" alt="" class="i" />
        <p class="t">{{ item.t }}</p>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 1rem;
}

.box {
  position: relative;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-alt);
  padding: 12px 24px;
  border-radius: 8px;
  height: 60px;
  width: 210px;
  display: flex;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: var(--vp-c-brand-1);
    // background-color: var(--vp-c-brand-soft);
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
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
}

.ct {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-text);
  font-size: 10px;
  padding: 4px 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 4px;
  z-index: 1;
}

.i {
  margin-right: 8px;
  height: 2em;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}

.t {
  font-size: 14px;
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
