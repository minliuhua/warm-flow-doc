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
                    title: "公告：1.6.7-正式版",
                    content:
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/advanced/node_ext.html\'" class="link-style">' +
                        '       🔵 设计器支持节点扩展属性设置' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/advanced/chart_manage.html\'" class="link-style">' +
                        '       🔵 流程图扩展增加接口，方便新增文字' +
                        '     </span>\n' +
                        '</div>' +
                        '<div>\n' +
                        '     <span onclick="window.location.href=\'/master/advanced/chart_manage.html\'" class="link-style">' +
                        '       🔵 自定义流程图节点颜色' +
                        '     </span>\n' +
                        '</div>',
                    actions: [
                        {
                            text: "新版本介绍",
                            link: "/master/other/news/upgrade/6.html",
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

