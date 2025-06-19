import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme as ThemeConfig } from "vitepress";
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";

import GiscusComment from "./components/GiscusComment"; // 评论模块

import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    "doc-after": () => [h(GiscusComment)],
  }),
  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin, {
      displayAuthorsInsideCommitLine: true,
    });
  },
};

export default Theme;
