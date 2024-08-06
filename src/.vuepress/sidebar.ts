import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/master/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: true,
            children: [
                '/master/guide/introduction.md',
                '/master/guide/started.md',
                '/master/guide/table.md',
                '/master/guide/config.md',
                '/master/guide/processdemo.md',
                '/master/guide/processterm.md',
                '/master/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: true,
            children: [
                '/master/guide/api.md',
                '/master/guide/listener.md',
                '/master/guide/expression.md',
                '/master/guide/ormusagetips.md',
            ],
        },
        {
            text: "其他",
            icon: "/icons/other.svg",
            collapsible: true,
            children: [
                '/master/guide/learningmaterials.md',
                '/master/guide/troubleshooting.md',
                '/master/guide/update.md',
            ],
        }
    ],
    "/v1.2.3/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: true,
            children: [
                '/v1.2.3/guide/introduction.md',
                '/v1.2.3/guide/started.md',
                '/v1.2.3/guide/table.md',
                '/v1.2.3/guide/config.md',
                '/v1.2.3/guide/processdemo.md',
                '/v1.2.3/guide/processterm.md',
                '/v1.2.3/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: true,
            children: [
                '/v1.2.3/guide/api.md',
                '/v1.2.3/guide/listener.md',
                '/v1.2.3/guide/expression.md',
                '/v1.2.3/guide/ormusagetips.md',
            ],
        },
        {
            text: "其他",
            icon: "/icons/other.svg",
            collapsible: true,
            children: [
                '/v1.2.3/guide/learningmaterials.md',
                '/v1.2.3/guide/troubleshooting.md',
                '/v1.2.3/guide/update.md',
            ],
        }
    ],
    "/v1.2.4/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: true,
            children: [
                '/v1.2.4/guide/introduction.md',
                '/v1.2.4/guide/started.md',
                '/v1.2.4/guide/table.md',
                '/v1.2.4/guide/config.md',
                '/v1.2.4/guide/processdemo.md',
                '/v1.2.4/guide/processterm.md',
                '/v1.2.4/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: true,
            children: [
                '/v1.2.4/guide/api.md',
                '/v1.2.4/guide/listener.md',
                '/v1.2.4/guide/expression.md',
                '/v1.2.4/guide/ormusagetips.md',
            ],
        },
        {
            text: "其他",
            icon: "/icons/other.svg",
            collapsible: true,
            children: [
                '/v1.2.4/guide/learningmaterials.md',
                '/v1.2.4/guide/troubleshooting.md',
                '/v1.2.4/guide/update.md',
            ],
        }
    ]
});
