<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import {usePageData, usePageFrontmatter} from "vuepress/client";
import {ref, watch} from "vue";
import Between from "../components/Between.vue";

import type { ThemeBasePageFrontmatter } from "vuepress-theme-hope";
import DynamicEditLink from "../components/DynamicEditLink.vue";

const frontmatter = usePageFrontmatter<ThemeBasePageFrontmatter>();

const page = usePageData();

const sidebarTopArrayLift = [
  `<a href="https://www.maxkey.top" target="_blank">
    <img className="no-zoom" height="60px" width="200px" src="/ggw/MaxKey.png" class="9999">
  </a>`,
  `<a href="https://ccflow.org/index.html?frm=warmflow" target="_blank">
    <img className="no-zoom" height="60px" width="200px" src="/ggw/ccflow.png" class="2025-03-03">
  </a>`,
  `<a href="/master/other/paidservice.html#私人服务" target="_blank">
    <img className="no-zoom" height="60px" width="200px" src="/ggw/yuui.jpg">
  </a>`,
];

const sidebarTopArrayRight = [
  `<a href="https://www.maxkey.top" target="_blank">
    <img className="no-zoom" height="60px" width="200px" src="/ggw/MaxKey.png" class="9999">
  </a>`,
  `<a href="https://ccflow.org/index.html?frm=warmflow" target="_blank">
    <img className="no-zoom" height="60px" width="200px" src="/ggw/ccflow.png" class="2025-03-03">
  </a>`,
  `<a href="/master/other/paidservice.html#私人服务" target="_blank">
    <img className="no-zoom" height="60px" width="200px" src="/ggw/yuui.jpg">
  </a>`,
];

const sidebarContentLift = ref("");
const sidebarContentRight = ref("");

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
        sidebarContentLift.value = "";
        sidebarContentRight.value = "";
        return;
      }
      shuffle(sidebarTopArrayLift);
      shuffle(sidebarTopArrayRight);

      sidebarContentLift.value = `\
      <div>
          <br>
            <span style="color: gray;font-size: smaller;">广告采用随机轮播方式显示</span>
            <span style="color: #E01E5A;font-size: smaller;font-weight: bolder;float: right">❤️<a href="/master/other/paidservice.html#赞助商广告">成为赞助商</a></span>
          <br>
      </div>
      <div style="width:230px;margin:5px auto;">
        ${sidebarTopArrayLift.slice(0, sidebarTopArrayLift.length).join("\n  ")}
      </div>
    `;
      sidebarContentRight.value = `\
      <div>
          <br>
            <span style="color: #E01E5A;font-size: smaller;font-weight: bolder;">❤️<a href="/master/other/paidservice.html#赞助商广告">成为赞助商</a></span>
          <br>
      </div>
      <div style="width:230px;margin:5px auto;">
        ${sidebarTopArrayRight.slice(0, sidebarTopArrayRight.length).join("\n  ")}
      </div>
    `;

    },
);
</script>

<template>
  <Layout>
    <template v-if="!frontmatter.home" #sidebarTop>
      <div v-html="sidebarContentLift" />
    </template>
    <template v-if="!frontmatter.home" #contentBefore>
      <Between/>
    </template>
    <template v-if="!frontmatter.home" #contentAfter>
      <DynamicEditLink/>
    </template>
<!--    <template v-if="!frontmatter.home" #tocBefore >-->
<!--      <div v-html="sidebarContentRight" />-->
<!--    </template>-->
  </Layout>
</template>
