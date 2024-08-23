<script setup lang="ts">
import {usePageData, usePageFrontmatter} from "vuepress/client";
import {ref, watch} from "vue";

import CommonWrapper from "vuepress-theme-hope/components/CommonWrapper.js";
import HopeHomePage from "vuepress-theme-hope/components/HomePage.js";
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import SkipLink from "vuepress-theme-hope/components/SkipLink.js";
import { FadeSlideY } from "vuepress-theme-hope/components/transitions/FadeSlideY.js";

import type {ThemePageFrontmatter} from "vuepress-theme-hope";

const page = usePageData();
const frontmatter = usePageFrontmatter<ThemePageFrontmatter>();

const sidebarTopArray = [
  `<a href="http://warm-flow.cn/" target="_blank">
    <img className="no-zoom" height="110px" width="110px" src="/logo.png">
  </a>`,
];

const sidebarContent = ref("");

function shuffle(arr) {
  var l = arr.length;
  var index, temp;
  while (l > 0) {
    index = Math.floor(Math.random() * l);
    temp = arr[l - 1];
    arr[l - 1] = arr[index];
    arr[index] = temp;
    l--;
  }
  return arr;
}

watch(
  () => page.value.path,
  () => {
    if (page.value.path.startsWith("/en/")) {
      sidebarContent.value = "";

      return;
    }
    shuffle(sidebarTopArray);

    sidebarContent.value = `\
      <div style="font-size: 1.1em;line-height: 1.5; padding: 8px; padding-left: 4px;color: var(--text-color);">赞助商</div>
      <div style="width:230px;margin:5px auto;">
        ${sidebarTopArray.slice(0, sidebarTopArray.length).join("\n  ")}
      </div>
    `;
  },
);
</script>
<template>
  <SkipLink />
  <CommonWrapper>
    <template #default>
      <HopeHomePage v-if="frontmatter.home">
        <template #center>
          <div content="content"></div>
        </template>
      </HopeHomePage>
      <FadeSlideY v-else>
        <NormalPage :key="page.path">
          <template #contentBefore>
            <div content="content"></div>
          </template>
        </NormalPage>
      </FadeSlideY>
    </template>
    <template v-if="!frontmatter.home" #sidebarTop>
      <div v-html="sidebarContent" />
    </template>
  </CommonWrapper>
</template>
