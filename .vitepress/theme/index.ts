import { h, onMounted, onUnmounted } from "vue";
import DefaultTheme from "vitepress/theme";
import { type Theme as ThemeConfig, inBrowser } from "vitepress";
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";

import { bindFancybox, destroyFancybox } from "./components/ImgViewer"; // 图片查看器

import GiscusComment from "./components/GiscusComment"; // 评论模块

import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    "doc-after": () => [h(GiscusComment)],
  }),
  enhanceApp({ app, router }) {
    if (inBrowser) {
      router.onBeforeRouteChange = () => {
        destroyFancybox(); // 销毁图片查看器
        console.log(3);
      };
      router.onAfterRouteChange = () => {
        bindFancybox(); // 绑定图片查看器
        console.log(4);
      };
    }
    app.use(NolebaseGitChangelogPlugin, {
      displayAuthorsInsideCommitLine: true,
    });
  },
};

export default Theme;
