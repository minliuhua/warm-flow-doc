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
                    path: "/master",
                    title: "公告：1.6.0-m6测试版",
                    content:
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'https://gitee.com/dromara/warm-flow/stargazers\'" class="link-style">' +
                        '       🔵 新增网关直连和测试案例' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/primary/started.html\'" class="link-style">' +
                        '       🔵 流程图重构' +
                        '     </span>\n' +
                        '</div>',
                    actions: [
                        {
                            text: "详细更新记录",
                            link: "/master/other/update.html#v1-6-0-2025-01-17-升级指南",
                            type: "primary",
                        },
                    ],
                    showOnce: false,
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

