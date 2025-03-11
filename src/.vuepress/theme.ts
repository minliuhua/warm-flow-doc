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
            component: true,
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
            icon: {
                assets: "https://at.alicdn.com/t/c/font_4043253_v7nldr3uv7.css",
                prefix: "iconfont icon-",
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
                    title: "公告：新增学习视频",
                    content:
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/primary/started.html#_6-1、推荐集成案例hh-vue\'" class="link-style">' +
                        '       🔵 1.项目介绍' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/primary/started.html#_6-1、推荐集成案例hh-vue\'" class="link-style">' +
                        '       🔵 2.竞品对比和快速集成' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/primary/started.html#_6-1、推荐集成案例hh-vue\'" class="link-style">' +
                        '       🔵 3.功能演示' +
                        '     </span>\n' +
                        '</div>',
                    actions: [
                        {
                            text: "学习视频地址",
                            link: "/master/primary/started.html#_6-1、推荐集成案例hh-vue",
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

