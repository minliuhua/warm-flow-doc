import {sidebar} from "vuepress-theme-hope";

export default sidebar([
    {
        text: "基础部分",
        icon: "bulb",
        prefix: "/guide/",
        collapsible: false,
        children: [
            '/guide/introduction.md',
            '/guide/started.md',
            '/guide/table.md',
            '/guide/config.md',
            '/guide/processdemo.md',
            '/guide/processterm.md',
            '/guide/processrule.md',
        ],
    },
    {
        text: "进阶部分",
        icon: "bulb",
        prefix: "/guide/",
        collapsible: false,
        children: [
            '/guide/api.md',
            '/guide/listener.md',
            '/guide/expression.md',
        ],
    },
    {
        text: "其他",
        icon: "bulb",
        prefix: "/guide/",
        collapsible: false,
        children: [
            '/guide/troubleshooting.md',
            '/guide/ruoyi-mp.md',
            '/guide/projectexample.md',
        ],
    }
]);
