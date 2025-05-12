import type { MarkdownOptions } from 'vitepress'

import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

import { figure } from '@mdit/plugin-figure'
import { footnote } from '@mdit/plugin-footnote'
import { imgSize, obsidianImgSize } from '@mdit/plugin-img-size'
import { tasklist } from '@mdit/plugin-tasklist'

import { table } from './index.ts'

export const markdown: MarkdownOptions = {
  theme: { light: 'one-light', dark: 'dracula-soft' },
  image: { lazyLoading: true },
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
  config(md) {
    md.use(table)
    md.use(footnote)
    md.use(tasklist)
    md.use(imgSize)
    md.use(obsidianImgSize)
    md.use(groupIconMdPlugin, { titleBar: { includeSnippet: true } })
    md.use(figure)
  }
}
