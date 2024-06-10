import {sidebar} from "vuepress-theme-hope";

export default sidebar([
    {
        text: "指南",
        icon: "bulb",
        prefix: "/guide/",
        collapsible: false,
        children: [
            '/guide/introduction.md',
            '/guide/started.md',
            '/guide/listener.md',
            '/guide/config.md',
            '/guide/table.md',
            '/guide/ruoyi-mp.md',
            '/guide/processdesign.md',
            '/guide/demonstration.md',
            '/guide/expression.md',
            '/guide/processterm.md',
            '/guide/processrule.md',
            '/guide/troubleshooting.md'
        ],
    }
]);
