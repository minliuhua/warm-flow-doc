import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
    {
        hostname: "https://gitee.com/warm_4/warm-flow-doc",
        author: {
            name: "Dromara Warm-Flow工作流",
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

        markdown: {
            spoiler: true,
            mark: true,
            codeTabs: true,
            include: true,
        },

        plugins: {
            components: {
                // 你想使用的组件
                components: [
                    "BiliBili",
                    "VPCard",
                    "SiteInfo",
                ],
            },
            comment: {
                provider: "Giscus",
                repo: "dromara/warm-flow",
                repoId: "R_kgDOK_2R_w",
                category: "Announcements",
                categoryId: "DIC_kwDOK_2R_84ClNey",
            },
            notice: [
                {
                    path: "/",
                    title: "请务必阅读",
                    content:
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/other/news/upgrade/4.html\'" class="link-style">' +
                        '       <strong>🧨🧨新春版v1.6.0-m4尝鲜版🧨🧨：网关直连和流程图重构</strong> ' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'https://gitee.com/dromara/warm-flow/stargazers\'" class="link-style">' +
                        '       ⭐️ Star：一键三连，你的Star是我持续开发的动力' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'https://gitee.com/dromara/warm-flow/issues\'" class="link-style">' +
                        '       ❓ 疑问：先看常见问题和issue，然后再是提👉 issue 👈' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/primary/started.html\'" class="link-style">' +
                        '       📖使用文档：集成前先快速浏览，大概知道有功能和注意事项' +
                        '     </span>\n' +
                        '</div>',
                    actions: [
                        {
                            text: "⭐️star⭐️",
                            link: "https://gitee.com/dromara/warm-flow/stargazers",
                            type: "primary",
                        },
                        {
                            text: "👉issue👈",
                            link: "https://gitee.com/dromara/warm-flow/issues",
                            type: "primary",
                        },
                        {
                            text: "❓常见问题❓",
                            link: "/master/other/troubleshooting.html",
                            type: "primary",
                        },
                        { text: "取消" },
                    ],
                    showOnce: false,
                    fullscreen: true,
                    confirm: true
                },
            ],
            slimsearch: true,
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
        }
    },
    { custom: true }
);

