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
                    width: "400px",
                    path: "/",
                    title: "Warm-Flow工作流",
                    content:
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'https://gitee.com/dromara/warm-flow/stargazers\'" class="link-style">' +
                        '       一键三连，你的⭐️ Star ⭐️是我持续开发的动力' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'https://gitee.com/dromara/warm-flow/issues\'" class="link-style">' +
                        '       有❓疑问❓先看常见问题，然后再是提👉 issue 👈' +
                        '     </span>\n' +
                        '</div>',
                    actions: [
                        {
                            text: "⭐️star⭐️",
                            link: "https://gitee.com/dromara/warm-flow/stargazers",
                            type: "primary",
                        },
                        {
                            text: "❓疑问❓",
                            link: "https://gitee.com/dromara/warm-flow/issues",
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

