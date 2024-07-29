import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: true,
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
            icon: "/icons/advanced.svg",
            collapsible: true,
            children: [
                '/guide/api.md',
                '/guide/listener.md',
                '/guide/expression.md',
                '/guide/ormusagetips.md',
            ],
        },
        {
            text: "其他",
            icon: "/icons/other.svg",
            collapsible: true,
            children: [
                '/guide/learningmaterials.md',
                '/guide/troubleshooting.md',
                '/guide/update.md',
            ],
        }
    ],
    "/v1.0/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: true,
            children: [
                '/v1.0/guide/introduction.md',
                '/v1.0/guide/started.md',
                '/v1.0/guide/table.md',
                '/v1.0/guide/config.md',
                '/v1.0/guide/processdemo.md',
                '/v1.0/guide/processterm.md',
                '/v1.0/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: true,
            children: [
                '/v1.0/guide/api.md',
                '/v1.0/guide/listener.md',
                '/v1.0/guide/expression.md',
                '/v1.0/guide/ormusagetips.md',
            ],
        },
        {
            text: "其他",
            icon: "/icons/other.svg",
            collapsible: true,
            children: [
                '/v1.0/guide/learningmaterials.md',
                '/v1.0/guide/troubleshooting.md',
                '/v1.0/guide/update.md',
            ],
        }
    ]
});
