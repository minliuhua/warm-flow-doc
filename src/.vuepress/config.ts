import {defineUserConfig} from "vuepress";

import {removePwaPlugin} from "@vuepress/plugin-remove-pwa";
import {viteBundler} from '@vuepress/bundler-vite'

import theme from "./theme";

export default defineUserConfig({
    base: "/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "warm-flow工作流",
            description: "国产自研工作流，其特点简洁(只有6张表)但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。",
        },
    },
    theme,
    shouldPrefetch: true,
    plugins: [
        removePwaPlugin({}),
    ],
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
    head: [['script', {}, `       
        var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3cc55ab75d5204bb4f1eadda7a7d3322";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`]]
});

