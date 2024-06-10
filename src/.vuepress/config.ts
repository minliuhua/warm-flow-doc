import { defineUserConfig } from "vuepress";

import { removePwaPlugin } from "@vuepress/plugin-remove-pwa";
import { viteBundler } from '@vuepress/bundler-vite'

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
    })
});