<script setup lang="ts">
import { computed } from 'vue'
import { VPDocAsideSponsors } from 'vitepress/theme'
import sponsors from './sharing-platform.json'

// 避免 json 中的 never[] 类型
interface Sponsor {
  alt: string
  href: string
  imgSrcDark: string
  imgSrcLight: string
}

const asideSponsors = computed(() => {
  return [
    // {
    //   size: 'mini',
    //   items: sponsors.silver.map((sponsor: Sponsor) => ({
    //     name: sponsor.alt,
    //     url: sponsor.href,
    //     img: sponsor.imgSrcLight
    //   }))
    // },
    // {
    //   size: 'xmini',
    //   items: sponsors.bronze.map((sponsor: Sponsor) => ({
    //     name: sponsor.alt,
    //     url: sponsor.href,
    //     img: sponsor.imgSrcLight
    //   }))
    // }
  ]
})
</script>

<template>
  <VPDocAsideSponsors :data="asideSponsors" />
  <a class="banner mp" href="https://fbinv01.fbaff.cc/auth/register?code=RZP3" target="_blank">
    <!-- <img
      width="22"
      height="22"
      src="https://flyingbirdlimo.com/wp-content/uploads/2022/03/Flying-Bird-Logo-cropped.png"
    /> -->
    <span>
      <p class="Activity">FlyingBird 618活动来了</p>
      <p class="extra">月付 85折 优惠码：2461885</p>
      <p class="extra">年付 64折 优惠码：2461880</p>
    </span>
  </a>

  <a class="banner mp" href="https://xx.theovan.cn/" target="_blank">
    <img width="22" height="22" src="https://m.theovan.cn/avatar.png" />
    <span>
      <p class="extra-info">传世经典著作</p>
      <p class="heading">玄学宝典</p>
      <p class="extra-info">山医命相卜</p>
    </span>
  </a>
  <a class="banner mp" href="https://share.theovan.cn/" target="_blank">
    <img width="22" height="22" src="https://m.theovan.cn/docs/202405101119004.png" />
    <span>
      <p class="extra-info">快速获取热门影视资源</p>
      <p class="heading">阿里云盘资源分享</p>
      <p class="extra-info">转存观看!</p>
    </span>
  </a>
  <a class="banner mp" href="/serve/sharing/Account-sharing-guide" target="_blank">
    <img width="22" height="22" src="https://cdn.iconscout.com/icon/free/png-256/free-netflix-2296042-1912001.png" />
    <span>
      <p class="extra-info">流媒体账号合租</p>
      <p class="heading">流媒体帐号合租</p>
      <p class="extra-info">转存观看!</p>
    </span>
  </a>
  <a class="banner mp" href="https://github.com/sponsors/Theo-messi" target="_blank">
    <img width="22" height="22" src="/爱心.png" />
    <span>
      <!-- <p class="extra-info">Sponsor for me</p> -->
      <p class="heading">为我赞助</p>
      <!-- <p class="extra-info">Sponsor now!</p> -->
    </span>
  </a>
</template>

<style scoped>
.VPDocAsideSponsors {
  margin-top: 8px !important;
}

:deep(.vp-sponsor-grid.mini .vp-sponsor-grid-image) {
  max-width: 158px;
  max-height: 48px;
}
:deep(.vp-sponsor-grid.xmini .vp-sponsor-grid-image) {
  max-width: 80px;
  max-height: 32px;
}
/* :deep(.vp-sponsor-grid.xmini img) {
  transition: transform 0.5s;
  transform: scale(1);
}

:deep(.vp-sponsor-grid.xmini:hover img) {
  transform: scale(1.15);
} */

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
  background-color: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-bg-soft);
  transition: border-color 0.5s;
}

.banner:last-of-type {
  margin-bottom: 1rem;
}

.banner:hover {
  border: 2px solid var(--vp-c-brand-1);
}

.banner.cert:hover {
  border: 2px solid var(--vp-c-green-1);
}

.banner img {
  transition: transform 0.5s;
  transform: scale(1.25);
}
.banner:hover img {
  transform: scale(1.75);
}

.banner .extra-info {
  color: var(--vp-c-text-1);
  opacity: 0;
  font-size: 0.7rem;
  padding-left: 0.1rem;
  transition: opacity 0.5s;
}

.banner .extra {
  color: var(--vp-c-text-3);
  /* opacity: 0; */
  font-size: 0.7rem;
  padding-left: 0.1rem;
  /* transition: opacity 0.5s; */
}

.banner .heading {
  background-image: linear-gradient(120deg, var(--vp-c-brand-3) 32%, var(--vp-c-brand-2), var(--vp-c-brand-1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.banner .Activity {
  background-image: linear-gradient(120deg, #b047ff 16%, #646cff, #747bff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.banner.mp .heading {
  background-image: linear-gradient(120deg, var(--vp-c-brand-3) 32%, var(--vp-c-brand-2), var(--vp-c-brand-1));
}

.banner.mp .Activity {
  background-image: linear-gradient(120deg, #b047ff 16%, #646cff, #747bff);
}

.banner:hover .extra-info {
  opacity: 0.9;
}

.banner:hover .extra {
  opacity: 0.9;
}
</style>
