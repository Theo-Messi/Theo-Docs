<template>
  <footer class="ba">
    <div class="ff">
      <div class="sc" v-for="(section, index) in sections" :key="index">
        <div class="st">{{ section.title }}</div>
        <ul>
          <li v-for="(link, idx) in section.links" :key="idx">
            <a :class="{ 'external-link': !section.internal }" :target="section.internal ? '_self' : '_blank'"
              :name="link.name" :title="link.name" :href="link.href">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部信息栏 -->
    <div class="ff" style="display: inline-block">
      <span>
        <a target="_blank" href="https://beian.miit.gov.cn/" name="ICP备案" title="ICP备案">
          <i class="fas fa-earth-americas"></i>鄂ICP备2024060426号
        </a>
      </span>
      <span>
        <a target="_blank" href="https://beian.mps.gov.cn/" name="公安备案" title="公安备案">
          <i class="fas fa-shield"></i>粤公网安备44200102445449号
        </a>
      </span>
    </div>
    <div class="flex" style="display: inline-block">
      <span>
        Copyright<i class="far fa-copyright"></i>2019 - {{ new Date().getFullYear() }}
        <a target="_blank" name="GitHub" title="GitHub" href="https://github.com/Theo-Messi">Theo-Messi</a>. All Rights
        Reserved
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Link {
  name: string
  href: string
}

interface Section {
  title: string
  links: Link[]
  internal?: boolean
}

export default defineComponent({
  name: 'Footer',
  setup() {
    const sections: Section[] = [
      {
        title: 'GitHub Source',
        links: [
          {
            name: 'Theo-Docs',
            href: 'https://github.com/Theo-Messi/Theo-Docs'
          },
          {
            name: '玄学宝典',
            href: 'https://github.com/Theo-Messi/xx.theojs.cn'
          },
          {
            name: '阿里云盘资源分享',
            href: 'https://github.com/Theo-Messi/share.theojs.cn'
          },
          {
            name: '常用配置文件',
            href: 'https://github.com/Theo-Messi/dotfiles'
          }
        ]
      },
      {
        title: '合作伙伴',
        links: [
          { name: '银河录像局', href: 'https://nf.video/kaIuE' },
          { name: '奈飞小铺', href: 'https://ihezu.love/UKTer6' },
          {
            name: 'FlyingBird',
            href: 'https://fbinv01.fbaff.cc/auth/register?code=RZP3'
          },
          {
            name: 'Bridge The Wise',
            href: 'https://patriot.ninja/aff.php?aff=1471'
          },
          {
            name: 'SMS-Activate',
            href: 'https://sms-activate.org/?ref=8170513'
          }
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
        ]
      },
      {
        title: '相关链接',
        links: [
          { name: 'Theo-Docs', href: 'https://doc.theojs.cn/' },
          { name: '玄学宝典', href: 'https://xx.theojs.cn/' },
          { name: '阿里云盘资源分享', href: 'https://share.theojs.cn/' },
          { name: 'VitePress', href: 'https://vitepress.dev/' }
        ]
      }
    ]

    return {
      sections
    }
  }
})
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

span {
  margin-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.2rem;
}

i {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
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

.ba {
  background: var(--vp-c-bg-alt);
  font-size: 0.75rem;
  text-align: center;
  margin: 0 auto;
}

.ff {
  display: flex;
  justify-content: center;
  margin: 1.25rem;

  &-grow-1 {
    flex-grow: 1;
  }
}

.flex {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;

  &-grow-1 {
    flex-grow: 1;
  }
}

.sc {
  flex-basis: 20rem;
}

.st {
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.8rem;
}
</style>
