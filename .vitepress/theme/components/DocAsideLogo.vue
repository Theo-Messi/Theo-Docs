<template>
  <!-- <a class="banner" href="https://fbinv01.fbaff.cc/auth/register?code=RZP3" target="_blank">
    <img width="22" height="22"
      src="https://flyingbirdlimo.com/wp-content/uploads/2022/03/Flying-Bird-Logo-cropped.png" />
    <span>
      <p class="Activity">FlyingBird 618活动来了</p>
      <p class="extra">月付 85折 优惠码：2461885</p>
      <p class="extra">年付 64折 优惠码：2461880</p>
    </span>
  </a> -->

  <a class="banner" href="https://xx.theovan.cn/" name="玄学宝典" title="玄学宝典" target="_blank">
    <img width="22" height="22" src="https://i.theovan.cn/avatar.png" />
    <span>
      <p class="extra-info">传世经典著作</p>
      <p class="heading">玄学宝典</p>
      <p class="extra-info">山医命相卜</p>
    </span>
  </a>
  <a class="banner" href="https://share.theovan.cn/" name="阿里云盘资源分享" title="阿里云盘资源分享" target="_blank">
    <img width="22" height="22" src="https://i.theovan.cn/docs/202405101119004.png" />
    <span>
      <p class="extra-info">快速获取热门影视资源</p>
      <p class="heading">阿里云盘资源分享</p>
      <p class="extra-info">转存观看!</p>
    </span>
  </a>
  <a class="banner" href="/serve/sharing/Account-sharing-guide" name="流媒体帐号合租" title="流媒体帐号合租" target="_blank">
    <img width="22" height="22" src="https://cdn.iconscout.com/icon/free/png-256/free-netflix-2296042-1912001.png" />
    <span>
      <p class="extra-info">流媒体账号合租</p>
      <p class="heading">流媒体帐号合租</p>
      <p class="extra-info">共享车位</p>
    </span>
  </a>
  <a class="banner" href="https://github.com/sponsors/Theo-Messi" name="赞助" title="赞助" target="_blank">
    <img width="22" height="22" src="/爱心.png" />
    <span>
      <!-- <p class="extra-info">Sponsor for me</p> -->
      <p class="heading">为我赞助</p>
      <!-- <p class="extra-info">Sponsor now!</p> -->
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerComponent',
  setup() { }
})
</script>

<style lang="scss" scoped>
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

:deep(.vp-sponsor-grid.xmini img) {
  transition: transform 0.5s;
  transform: scale(1);
}

:deep(.vp-sponsor-grid.xmini:hover img) {
  transform: scale(1.15);
}

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
  }

  img {
    transition: transform 0.5s;
    transform: scale(1.25);
  }

  &:hover img {
    transform: scale(1.75);
  }

  .extra-info {
    color: var(--vp-c-text-1);
    opacity: 0;
    font-size: 0.7rem;
    padding-left: 0.1rem;
    transition: opacity 0.5s;
  }

  .extra {
    color: var(--vp-c-text-2);
    font-size: 0.7rem;
    padding-left: 0.1rem;
  }

  .heading {
    background-image: linear-gradient(120deg,
        var(--vp-c-brand-3) 32%,
        var(--vp-c-brand-2),
        var(--vp-c-brand-1));
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

  &:hover {
    .extra-info {
      opacity: 0.9;
    }

    .extra {
      opacity: 0.9;
    }
  }
}
</style>
