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
            '/guide/processdesign.md',
            '/guide/demonstration.md',
            '/guide/flowchart.md',
            '/guide/expression.md',
            '/guide/processterm.md',
            '/guide/processrule.md',
            '/guide/troubleshooting.md'
        ],
    }
]);
