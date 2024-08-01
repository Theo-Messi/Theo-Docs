<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  href: string
  name: string
}>()

const videoDomains = [
  'https://i.theojs.cn/',
  'https://www.youtube.com/',
  'https://youtu.be',
  '//player.bilibili.com/',
  'https://v.youku.com/',
  'https://www.iqiyi.com/',
  'https://www.bilibili.com/',
  'https://www.tudou.com/',
  'https://www.mgtv.com/',
  'https://www.youku.com/',
  'https://v.qq.com/'
]

const isVideo = computed(() => {
  return videoDomains.some((domain) => props.href.startsWith(domain))
})

const isVideoOpen = ref(false)

const toggleVideo = () => {
  isVideoOpen.value = true
}
</script>

<template>
  <div class="mp">
    <template v-if="isVideo">
      <template v-if="isVideoOpen">
        <div class="video-embed">
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              loading="lazy"
              title="Gumlet video player"
              :src="props.href"
              style="
                border: none;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
              "
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
              frameborder="0"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </template>
      <template v-else>
        <button class="cta" :title="props.name" @click="toggleVideo">
          <div class="name">{{ props.name }}</div>
          <i class="fas fa-circle-play fa-2xl"></i>
        </button>
      </template>
    </template>
    <template v-else>
      <a
        :href="props.href"
        target="_blank"
        rel="noopener"
        :title="props.name"
        class="cta"
      >
        <div class="name">{{ props.name }}</div>
      </a>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.mp {
  margin-top: 20px;

  &:has(.cta) {
    position: relative;
    transition: border-color 0.3s;
    padding: 1rem 1.25rem;
    height: 3.5rem;
    border-radius: 0.8rem;
    border: 1px solid var(--vp-c-bg-alt);
    background-color: var(--vp-c-bg-alt);

    &:hover {
      border-color: var(--vp-c-brand-1);
    }
  }
}

.name {
  font-size: 0.9rem;
  font-weight: 550;
  transition: border-color 0.3s;
  color: var(--vp-c-brand-1);
}

.cta {
  font-size: 0.9rem;
  color: var(--c-text);
  position: relative;
  display: flex;
  gap: 1em;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.25rem;
  text-decoration: none !important;

  &:hover {
    color: var(--vp-c-brand-1);
    text-decoration: underline;
  }

  .content {
    flex-grow: 1;
  }

  .fa-circle-play {
    position: absolute;
    left: 0;
    color: var(--vp-c-brand-1);
  }
}
</style>
