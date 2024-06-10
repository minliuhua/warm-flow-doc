import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: '指南',
        icon: "bulb",
        children: [
            { text: '介绍', link: '/guide/introduction.md' },
            { text: '快速开始', link: '/guide/started.md' },
            { text: '流程设计器', link: '/guide/processdesign.md' },
            { text: '流程页面演示', link: '/guide/demonstration.md' },
            { text: '流程图', link: '/guide/flowchart.md' },
            { text: '条件表达式', link: '/guide/expression.md' },
            { text: '流程术语', link: '/guide/processterm.md' },
            { text: '流程规则', link: '/guide/processrule.md' },
            { text: 'warm组织成员介绍', link: '/guide/member.md' }
        ]
    },
    {
        text: '常见问题',
        icon: '/icons/problem.svg',
        link: '/guide/troubleshooting.md'
    },
    {
        text: '更新日志',
        icon: '/icons/update.svg',
        link: '/guide/update.md'
    },
    {
        text: '鼓励支持',
        icon: '/icons/support.svg',
        link: '/guide/support.md'
    }
]);
