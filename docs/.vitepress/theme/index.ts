// .vitepress/theme/index.ts */
import DefaultTheme from "vitepress/theme";
import type { Theme as ThemeConfig } from "vitepress";
import "./custom.css";
import { h } from "vue";
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
  InjectionKey,
  LayoutSwitch,
  ScreenLayoutSwitch,
} from "@nolebase/vitepress-plugin-enhanced-readabilities";
import type { Options } from "@nolebase/vitepress-plugin-enhanced-readabilities";

import "@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css";

export const Theme: ThemeConfig = {
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      "nav-screen-content-after": () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
    });
  },
  enhanceApp({ app }) {
    // 其他部分的代码...

    app.provide(InjectionKey, {
      layoutSwitch: {
        disableHelp: true,
      },
      spotlight: {
        disableHelp: true,
        defaultToggle: false,
        hoverBlockColor: "rgba(16, 185, 129, 0.14)",
      },

      // 配置...
      locales: {
        cn: {
          title: { title: "阅读模式", titleAriaLabel: "阅读模式" },
          layoutSwitch: {
            title: "布局切换",
            titleAriaLabel: "布局切换",
            titleHelpMessage: "调整布局样式,适用不同的阅读习惯和设备环境",
            titleScreenNavWarningMessage: "移动端无可切换布局",
            optionFullWidth: "全部展开",
            optionFullWidthAriaLabel: "全部展开",
            optionFullWidthHelpMessage:
              "侧边栏和内容区域占据整个屏幕的全部宽度",
            optionOnlySidebarFullWidth: "仅侧边栏展开",
            optionOnlySidebarFullWidthAriaLabel: "仅侧边栏展开",
            optionOnlySidebarFullWidthHelpMessage:
              "仅左右侧边栏展开全部宽度,正文内容区域宽度不变",
            optionFitContentWidth: "自适应内容宽度",
            optionFitContentWidthAriaLabel: "自适应内容宽度",
            optionFitContentWidthHelpMessage:
              "侧边栏和内容区域宽度自适应,正文内容区域宽度不变",
          },
          spotlight: {
            title: "聚光灯",
            titleAriaLabel: "聚光灯",
            titleHelpMessage:
              "支持在正文中高亮显示鼠标悬停的行和元素,优化阅读和专注困难的用户的体验",
            titleScreenNavWarningMessage: "移动端无可开启聚光灯",
            optionOn: "开启",
            optionOnAriaLabel: "开启",
            optionOnHelpMessage: "开启聚光灯",
            optionOff: "关闭",
            optionOffAriaLabel: "关闭",
            optionOffHelpMessage: "关闭聚光灯",
          },
        },
      },
    } as Options);
    // 其他部分的代码...
  },
};

export default Theme;
// export default DefaultTheme;
