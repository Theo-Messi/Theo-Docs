<template>
  <div>
    <a v-for="(banner, index) in banners" :key="index" :href="banner.link" :name="banner.Activity || banner.name"
      :title="banner.Activity || banner.name" class="banner" target="_blank">
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

<script lang="ts">
import { defineComponent } from 'vue';

interface Banner {
  link: string;
  icon: string;
  Activity?: string;
  name?: string;
  hide1?: string;
  hide2?: string;
  info1?: string;
  info2?: string;
}

export default defineComponent({
  name: 'BannerComponent',
  setup() {
    const banners: Banner[] = [
      // {
      //   link: 'https://fbinv01.fbaff.cc/auth/register?code=RZP3',
      //   icon: 'https://flyingbirdlimo.com/wp-content/uploads/2022/03/Flying-Bird-Logo-cropped.png',
      //   Activity: 'FlyingBird 618活动来了',
      //   info1: '月付 85折 优惠码  2461885',
      //   info2: '年付 64折 优惠码  2461880',
      // },
      {
        link: 'https://xx.theovan.cn/',
        icon: 'https://i.theovan.cn/avatar.png',
        name: '玄学宝典',
        hide1: '传世经典著作',
        hide2: '山医命相卜',
      },
      {
        link: 'https://share.theovan.cn/',
        icon: 'https://i.theovan.cn/docs/202405101119004.png',
        name: '阿里云盘资源分享',
        hide1: '快速获取热门影视资源',
        hide2: '转存观看!',
      },
      {
        link: '/serve/sharing/Account-sharing-guide',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/free-netflix-2296042-1912001.png',
        name: '流媒体帐号合租',
        hide1: '流媒体账号合租',
        hide2: '共享车位',
      },
      {
        link: 'https://github.com/sponsors/Theo-Messi',
        icon: '/爱心.png',
        name: '为我赞助',
      },
    ];

    return {
      banners,
    };
  },
});
</script>

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
    background-image: linear-gradient(120deg, var(--vp-c-brand-3) 32%, var(--vp-c-brand-2), var(--vp-c-brand-1));
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
