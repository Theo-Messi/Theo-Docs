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
  <div class="boxs-container block">
    <a v-for="(item, index) in items" :key="index" :href="item.l" class="boxs" target="_blank">
      <div class="block-link">
        <span v-if="item.ct" class="ct">{{ item.ct }}</span>
        <img v-if="item.i" :src="item.i" alt="" class="block-icon" />
        <p>{{ item.t }}</p>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.block {
  margin-top: 1rem;
}
.ct {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--vp-c-brand-3);
  color: var(--c-text-light-1);
  font-size: 10px;
  padding: 4px 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 4px;
  z-index: 1;
}

.block .boxs {
  position: relative;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-alt);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  height: 60px;
  width: 210px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition:
    border-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    color 0.5s,
    background-color 0.5s;
}

.block .boxs:hover {
  border-color: var(--vp-c-brand-1);
  /* background-color: var(--vp-c-brand-soft); */
  text-decoration: none;
}

.block-link {
  font-size: 14.5px;
  line-height: 1;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.block-icon {
  margin-right: 8px;
  height: 2em;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}

.boxs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.boxs-container .boxs {
  flex: 1 1 calc(33.333% - 20px);
  max-width: 210px;
}

@media (max-width: 1024px) {
  .boxs-container .boxs {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .boxs-container .boxs {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
