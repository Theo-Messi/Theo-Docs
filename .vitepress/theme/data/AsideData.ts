// src/banners.ts
export interface Banner {
  link: string
  icon: string
  Activity?: string
  name?: string
  hide1?: string
  hide2?: string
  info1?: string
  info2?: string
}

export const banners: Banner[] = [
  // {
  //   link: 'https://fbinv01.fbaff.cc/auth/register?code=RZP3',
  //   icon: 'https://flyingbirdlimo.com/wp-content/uploads/2022/03/Flying-Bird-Logo-cropped.png',
  //   Activity: 'FlyingBird 618活动来了',
  //   info1: '月付 85折 优惠码  2461885',
  //   info2: '年付 64折 优惠码  2461880',
  // },
  {
    link: 'https://xx.theojs.cn/',
    icon: 'https://i.theojs.cn/avatar.png',
    name: '玄学宝典',
    hide1: '传世经典著作',
    hide2: '山医命相卜'
  },
  {
    link: 'https://share.theojs.cn/',
    icon: 'https://i.theojs.cn/docs/202405101119004.png',
    name: '阿里云盘资源分享',
    hide1: '快速获取热门影视资源',
    hide2: '转存观看!'
  },
  {
    link: '/serve/sharing/Account-sharing-guide',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-netflix-2296042-1912001.png',
    name: '流媒体帐号合租',
    hide1: '流媒体账号合租',
    hide2: '共享车位'
  },
  {
    link: 'https://github.com/sponsors/Theo-Messi',
    icon: '/爱心.png',
    name: '为我赞助'
  }
]
