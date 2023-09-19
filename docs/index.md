---
layout: home
title: Theo
# titleTemplate: 全方位流媒体观影指南
hero:
  name: Theo的笔记库
  # text: 观影指南
  tagline: You don't have to be the same
  image: https://vitepress.dev/vitepress-logo-large.webp
  actions:
    - theme: brand
      text: 立即开始 →
      link: /VPS/01
    - theme: alt
      text: GitHub
      link: https://github.com/vanhiupun

features:
  - title: VPS教程
    link: /VPS/01
  - title: 京东Cookie教程
    link: /JD/01
  - title: OpenWrt教程
    link: /OpenWrt/01
  - title: 网络技术教程
    link: /skill/01
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%); 
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
