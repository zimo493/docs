<template>
  <div style="margin-top: 2rem">
    <Giscus
      id="comments"
      repo="zimo493/docs"
      repoId="R_kgDOO9pCvQ"
      category="General"
      categoryId="DIC_kwDOO9pCvc4Crrgd"
      mapping="pathname"
      term="请赐教！"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import Giscus from "@giscus/vue";
import { watch } from "vue";
import { inBrowser, useData, useRoute } from "vitepress";

const { isDark } = useData();
const route = useRoute();

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");

  iframe?.contentWindow?.postMessage(
    {
      giscus: {
        setConfig: { theme: dark ? "dark_tritanopia" : "light_tritanopia" },
      },
    },
    "https://giscus.app"
  );
});
</script>
