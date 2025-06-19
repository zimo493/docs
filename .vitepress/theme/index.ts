import DefaultTheme from "vitepress/theme";
import type { Theme as ThemeConfig } from "vitepress";
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";

import Layout from "./components/Layout.vue";

import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin, {
      displayAuthorsInsideCommitLine: true,
    });
  },
};

export default Theme;
