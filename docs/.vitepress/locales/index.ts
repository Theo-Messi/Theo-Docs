import { defineConfig } from 'vitepress'
import en from './en'
import cn from './cn'

export default defineConfig({
  locales: {
    en: {
      label: 'English',
      lang: en.lang,
      themeConfig: en.themeConfig,
      description: en.description
    },
    root: {
      label: '简体中文',
      lang: cn.lang,
      themeConfig: cn.themeConfig,
      description: cn.description
    }
  }
})
