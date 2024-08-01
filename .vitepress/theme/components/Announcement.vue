<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter: fm } = useData()
</script>

<template>
  <a
    v-if="fm.hero.prelink"
    :href="fm.hero.prelink.link"
    :target="fm.hero.prelink.target"
    class="custom-link"
  >
    <span v-html="fm.hero.prelink.title"></span>
  </a>
</template>

<style lang="scss">
.custom-link {
  display: inline-flex;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  text-decoration: none !important;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--vp-button-alt-hover-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg);
    transform: translateY(-1px);
  }
}
</style>
