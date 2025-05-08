import type { DefaultTheme } from 'vitepress'

export const search: DefaultTheme.LocalSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          displayDetails: '显示详细列表',
          noResultsText: '无法找到相关结果',
          resetButtonTitle: '清除查询条件',
          backButtonTitle: '关闭搜索',
          footer: {
            selectText: '选择',
            navigateText: '切换',
            selectKeyAriaLabel: '输入',
            navigateUpKeyAriaLabel: '上箭头',
            navigateDownKeyAriaLabel: '下箭头',
            closeText: '关闭',
            closeKeyAriaLabel: 'esc'
          }
        }
      }
    }
  }
}
