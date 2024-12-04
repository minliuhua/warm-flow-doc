import {defineUserConfig} from "vuepress";

import {viteBundler} from '@vuepress/bundler-vite'
import {path} from "vuepress/utils";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    port: 8081,
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Dromara Warm-Flow工作流",
            description: "国产工作流引擎🎉，其特点简洁轻量但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件。",
        },
    },
    theme,
    alias: {
        "@theme-hope/layouts/Layout": path.resolve(
            __dirname,
            "./layouts/Layout.vue",
        )
    },
    shouldPrefetch: true,
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

