import { UserConfig } from 'vitepress'
import footnote_plugin from 'markdown-it-footnote'
import taskLists from 'markdown-it-task-checkbox'
import { imgSize } from '@mdit/plugin-img-size'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { table } from './index.ts'

export const markdown: UserConfig['markdown'] = {
  theme: {
    light: 'catppuccin-latte',
    dark: 'dracula-soft'
  },
  image: {
    // 默认禁用图片懒加载
    lazyLoading: true
  },
  container: {
    infoLabel: '信息',
    noteLabel: '信息',
    tipLabel: '提示',
    importantLabel: '重要',
    warningLabel: '警告',
    cautionLabel: '警告',
    dangerLabel: '危险',
    detailsLabel: '详细信息'
  },
  codeTransformers: [transformerTwoslash()],
  config(md) {
    table(md)
    md.use(footnote_plugin)
    md.use(taskLists)
    md.use(imgSize)
  }
}
