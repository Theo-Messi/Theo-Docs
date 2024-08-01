<script lang="ts">
import { defineComponent } from 'vue'
import { banners } from '../data/AsideData'

export default defineComponent({
  name: 'BannerComponent',
  setup() {
    return { banners }
  }
})
</script>

<template>
  <div>
    <a
      v-for="(banner, index) in banners"
      :key="index"
      :href="banner.link"
      :name="banner.Activity || banner.name"
      :title="banner.Activity || banner.name"
      class="banner"
      target="_blank"
    >
      <img :src="banner.icon" width="22" height="22" />
      <span>
        <p v-if="banner.Activity" class="Activity">{{ banner.Activity }}</p>
        <p v-if="banner.hide1" class="hide">{{ banner.hide1 }}</p>
        <p v-if="banner.info1" class="info">{{ banner.info1 }}</p>
        <p v-if="banner.name" class="name">{{ banner.name }}</p>
        <p v-if="banner.hide2" class="hide">{{ banner.hide2 }}</p>
        <p v-if="banner.info2" class="info">{{ banner.info2 }}</p>
      </span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin: 0.25rem 0;
  padding: 0.4rem 0;
  border-radius: 14px;
  position: relative;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  background-color: var(--vp-c-bg-alt);
  border: 2px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;

  &:last-of-type {
    margin-bottom: 1rem;
  }

  &:hover {
    border: 2px solid var(--vp-c-brand-1);

    img {
      transform: scale(1.75);
    }

    .hide,
    .info {
      opacity: 0.9;
    }
  }

  img {
    transition: transform 0.5s;
    transform: scale(1.25);
  }

  .hide {
    color: var(--vp-c-text-1);
    opacity: 0;
    font-size: 0.7rem;
    padding-left: 0.1rem;
    transition: opacity 0.5s;
  }

  .info {
    color: var(--vp-c-text-2);
    font-size: 0.7rem;
    padding-left: 0.1rem;
  }

  .name {
    background-image: linear-gradient(
      120deg,
      var(--vp-c-brand-3) 32%,
      var(--vp-c-brand-2),
      var(--vp-c-brand-1)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .Activity {
    background-image: linear-gradient(120deg, #b047ff 16%, #646cff, #747bff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
