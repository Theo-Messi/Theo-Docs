// 导出接口NavLink
export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  badge?:
    | string
    | {
        text?: string
        type?: 'info' | 'tip' | 'warning' | 'danger'
      }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

// 导出接口NavData
export interface NavData {
  /** 页面标题 */
  title: string
  /** 导航链接 */
  items: NavLink[]
}
