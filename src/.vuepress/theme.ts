import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
    {
        hostname: "https://gitee.com/warm_4/warm-flow-doc",
        author: {
            name: "Warm-Flow工作流",
            url: "https://gitee.com/warm_4/warm-flow-doc",
        },
        iconAssets: "https://at.alicdn.com/t/c/font_4043253_v7nldr3uv7.css",
        iconPrefix: "iconfont icon-",
        logo: "/logo.png",
        docsDir: "src",
        print: false,
        locales: {
            "/": {
                navbar,
                sidebar,
                displayFooter: true,
                metaLocales: {
                    editLink: "前往 Gitee 编辑此页",
                },
            },
        },
        editLink: false,

        plugins: {
            components: {
                // 你想使用的组件
                components: [
                    "BiliBili",
                    "VPCard",
                ],
            },
            notice: [
                {
                    path: "/",
                    title: "Warm-Flow工作流",
                    content:
                        "简洁轻量，五脏俱全，可扩展，可通过jar引入设计器的工作流。\r\n" +
                        "希望一键三连，你的⭐️ Star ⭐️是我持续开发的动力",
                    actions: [
                        {
                            text: "⭐️Star⭐️",
                            link: "https://gitee.com/dromara/warm-flow/stargazers",
                            type: "primary",
                        },
                        { text: "取消" },
                    ],
                    fullscreen: true,
                    confirm: true
                },
            ],
            searchPro: {},
            mdEnhance: {
                align: true,
                attrs: true,
                codetabs: true,
                demo: true,
                figure: true,
                flowchart: true,
                gfm: true,
                imgLazyload: true,
                imgSize: true,
                include: true,
                katex: true,
                mark: true,
                mermaid: true,
                stylize: [
                    {
                        matcher: "Recommended",
                        replacer: ({ tag }) => {
                            if (tag === "em")
                                return {
                                    tag: "Badge",
                                    attrs: { type: "tip" },
                                    content: "Recommended",
                                };
                        },
                    },
                ],
                sub: true,
                sup: true,
                tabs: true,
                vPre: true,
            },
            shiki: {
                // theme: "houston",
                themes: {
                    light: "one-light",
                    dark: "one-dark-pro",
                },
            }
        }
    },
    { custom: true }
);
