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
            codeTabs: true,
            attrs: true,
            include: true,
            imgLazyload: true,
        },
        plugins: {
            slimsearch: {
              indexContent: true,
            },
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
                    title: "公告: 1.7.7（正式版）",
                    content:
                        `
                         <table>
                           <tbody>
                             <tr>
                               <td>
                                 <a href="https://gitee.com/dromara/warm-flow/stargazers" target="_blank">⭐️ Star</a>
                               </td>
                               <td>
                                 <a href="https://gitee.com/dromara/warm-flow/stargazers" target="_blank">一键三连，你的Star是我持续开发的动力</a>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 <a href="https://gitee.com/dromara/warm-flow/issues" target="_blank">❓ 疑问</a>
                               </td>
                               <td>
                                 <a href="https://gitee.com/dromara/warm-flow/issues" target="_blank">先看常见问题和issue，然后再是提👉 issue 👈</a>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 <a href="/master/introduction/introduction.html" target="_blank">📖 使用文档</a>
                               </td>
                               <td>
                                 <a href="/master/introduction/introduction.html" target="_blank">集成前先快速浏览，大概知道有功能和注意事项</a>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 <a href="/master/other/upgrade_guide.html" target="_blank">🌟 升级指南</a>
                               </td>
                               <td>
                                 <a href="/master/other/upgrade_guide.html" target="_blank">如发布新版本，请查看</a>
                               </td>
                             </tr>
                             <tr>
                               <td>
                                 <a href="https://gitee.com/warm_4/warm-flow-doc" target="_blank">🚀 本地部署文档</a>
                               </td>
                               <td>
                                 <a href="https://gitee.com/warm_4/warm-flow-doc" target="_blank">如部分地方访问不了，可本地部署文档</a>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                        `,
                    actions: [
                        {
                            text: "⭐️star⭐️",
                            link: "https://gitee.com/dromara/warm-flow/stargazers",
                            type: "primary",
                        },
                        {
                            text: "学习视频地址",
                            link: "'/master/other/videos.html",
                            type: "primary",
                        },
                        { text: "取消" },
                    ],
                    showOnce: false,
                    confirm: true
                },
            ],
        }
    },
    { custom: true }
);
