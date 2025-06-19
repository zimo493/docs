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
      :theme="isDark ? 'dark_tritanopia' : 'light_tritanopia'"
    />
  </div>
</template>

<script setup>
import Giscus from "@giscus/vue";
import { useData } from "vitepress";

const { isDark } = useData();
</script>
