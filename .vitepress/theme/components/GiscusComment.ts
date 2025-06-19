import { defineComponent, h } from "vue";
import { useData } from "vitepress";
import Giscus from "@giscus/vue";

export default defineComponent({
  name: "GiscusComment",
  render: () => {
    const { isDark } = useData();
    return h(
      "div",
      { style: { marginTop: "2rem" } },
      h(Giscus, {
        id: "comments",
        repo: "zimo493/docs",
        repoId: "R_kgDOO9pCvQ",
        category: "General",
        categoryId: "DIC_kwDOO9pCvc4Crrgd",
        mapping: "pathname",
        term: "请赐教！",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "bottom",
        lang: "zh-CN",
        loading: "lazy",
        theme: isDark.value ? "dark_tritanopia" : "light_tritanopia",
      })
    );
  },
});
