<template>
  <footer class="bg-alt f12 lh-1" style="text-align: center; margin: 0 auto">
    <div class="flex ma4" style="display: flex; justify-content: center">
      <div class="fb6" v-for="(section, index) in sections" :key="index">
        <div class="mb2 fw6 f14">{{ section.title }}</div>
        <ul>
          <li class="mb2" v-for="(link, idx) in section.links" :key="idx">
            <a :class="{ 'external-link': !section.internal }" :target="section.internal ? '_self' : '_blank'"
              :name="link.name" :title="link.name" :href="link.href">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部信息栏 -->
    <div class="flex" style="display: inline-block">
      <span class="ml1">
        <a target="_blank" href="https://beian.miit.gov.cn/" name="ICP备案" title="ICP备案">
          <i class="fas fa-earth-americas" style="margin-right: 4px"></i>鄂ICP备2024060426号
        </a>
      </span>
      <span class="ml1">
        <a target="_blank" href="https://beian.mps.gov.cn/" name="公安备案" title="公安备案">
          <i class="fas fa-shield" style="margin-right: 4px"></i>粤公网安备44200102445439号
        </a>
      </span>
    </div>
    <div class="flex ma4" style="display: inline-block">
      <span class="ml1">
        Copyright <i class="far fa-copyright"></i> 2019 -
        {{ new Date().getFullYear() }}
        <a target="_blank" name="GitHub" title="GitHub" href="https://github.com/Theo-Messi">Theo-Messi</a>. All Rights
        Reserved
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Link {
  name: string;
  href: string;
}

interface Section {
  title: string;
  links: Link[];
  internal?: boolean;
}

export default defineComponent({
  name: 'Footer',
  setup() {
    const sections: Section[] = [
      {
        title: 'GitHub Source',
        links: [
          { name: 'Theo-Docs', href: 'https://github.com/Theo-Messi/Theo-Docs' },
          { name: '玄学宝典', href: 'https://github.com/Theo-Messi/xx.theovan.cn' },
          { name: '阿里云盘资源分享', href: 'https://github.com/Theo-Messi/share.theovan.cn' },
          { name: '常用配置文件', href: 'https://github.com/Theo-Messi/dotfiles' }
        ]
      },
      {
        title: '合作伙伴',
        links: [
          { name: '银河录像局', href: 'https://nf.video/kaIuE' },
          { name: '奈飞小铺', href: 'https://ihezu.love/UKTer6' },
          { name: 'FlyingBird', href: 'https://fbinv01.fbaff.cc/auth/register?code=RZP3' },
          { name: 'Bridge The Wise', href: 'https://patriot.ninja/aff.php?aff=1471' },
          { name: 'SMS-Activate', href: 'https://sms-activate.org/?ref=8170513' }
        ]
      },
      {
        title: '观影指南',
        internal: true,
        links: [
          { name: 'Netflix', href: '/streaming/Netflix-guide' },
          { name: 'Disney+', href: '/streaming/Disney-introduce' },
          { name: 'Spotify Premium', href: '/streaming/Spotify' },
          { name: 'YouTube Premium', href: '/streaming/YouTube' },
          { name: 'Hulu', href: '/streaming/Hulu' },
          { name: 'HBO Max', href: '/streaming/HBO-Max' }
        ],
      },
      {
        title: '相关链接',
        links: [
          { name: 'Theo-Docs', href: 'https://doc.theovan.cn/' },
          { name: '玄学宝典', href: 'https://xx.theovan.cn/' },
          { name: '阿里云盘资源分享', href: 'https://share.theovan.cn/' },
          { name: 'VitePress', href: 'https://vitepress.dev/' }
        ]
      }
    ];

    return {
      sections
    };
  }
});
</script>

<style lang="scss" scoped>
/* 页脚 */
footer {
  width: 100%;

  a:hover {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  .has-sidebar~& {
    display: none;
  }
}

.external-link {
  position: relative;
  display: inline-block;

  &::after {
    content: '\f061';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    font-size: 0.5rem;
    position: absolute;
    color: var(--vp-c-text-3);
    transform: rotate(-45deg);
  }
}

.bg-alt {
  background: var(--vp-c-bg-alt);
}

.lh-1 {
  line-height: 1.2rem;
}

.flex {
  display: flex;

  &-grow-1 {
    flex-grow: 1;
  }
}

.ma4 {
  margin: 1.5rem;
}

.ma2 {
  margin: 1rem;
}

.ml0 {
  margin-left: 0.5rem;
}

.ml1 {
  margin-left: 1rem;
}

.mb2 {
  margin-bottom: 0.5rem;
}

.f12 {
  font-size: 12px;
}

.f14 {
  font-size: 13px;
}

.fw6 {
  font-weight: 600;
}

.fb6 {
  flex-basis: 20rem;
}

@media screen and (min-width: 960px) {
  .flex-l {
    display: flex;
  }
}

@media screen and (max-width: 768px) {
  .ma4 {
    margin-left: auto;
    /* 左边距自动 */
    margin-right: auto;
    /* 右边距自动 */
    width: 100%;
    /* 宽度100% */
    max-width: 95%;
    /* 最大宽度为屏幕宽度的95% */
  }
}
</style>
