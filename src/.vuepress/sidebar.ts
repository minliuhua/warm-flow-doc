import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/master/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/master/guide/introduction.md',
                '/master/guide/started.md',
                '/master/guide/table.md',
                '/master/guide/config.md',
                '/master/guide/api.md',
                '/master/guide/processdemo.md',
                '/master/guide/processterm.md',
                '/master/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/master/guide/logicdelete.md',
                '/master/guide/tenant.md',
                '/master/guide/customstatus.md',
                '/master/guide/listener.md',
                '/master/guide/expression.md',
                '/master/guide/ormusagetips.md',
            ],
        }
    ],
    "/v1.2.5/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.2.5/guide/introduction.md',
                '/v1.2.5/guide/started.md',
                '/v1.2.5/guide/table.md',
                '/v1.2.5/guide/config.md',
                '/v1.2.5/guide/api.md',
                '/v1.2.5/guide/processdemo.md',
                '/v1.2.5/guide/processterm.md',
                '/v1.2.5/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.2.5/guide/logicdelete.md',
                '/v1.2.5/guide/tenant.md',
                '/v1.2.5/guide/customstatus.md',
                '/v1.2.5/guide/listener.md',
                '/v1.2.5/guide/expression.md',
                '/v1.2.5/guide/ormusagetips.md',
            ],
        }
    ],
    "/v1.2.3/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
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
            collapsible: false,
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
            collapsible: false,
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
            collapsible: false,
            children: [
                '/v1.2.4/guide/introduction.md',
                '/v1.2.4/guide/started.md',
                '/v1.2.4/guide/table.md',
                '/v1.2.4/guide/config.md',
                '/v1.2.4/guide/api.md',
                '/v1.2.4/guide/processdemo.md',
                '/v1.2.4/guide/processterm.md',
                '/v1.2.4/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.2.4/guide/logicdelete.md',
                '/v1.2.4/guide/tenant.md',
                '/v1.2.4/guide/customstatus.md',
                '/v1.2.4/guide/listener.md',
                '/v1.2.4/guide/expression.md',
                '/v1.2.4/guide/ormusagetips.md',
            ],
        },
        {
            text: "其他",
            icon: "/icons/other.svg",
            collapsible: false,
            children: [
                '/v1.2.4/guide/learningmaterials.md',
                '/v1.2.4/guide/troubleshooting.md',
                '/v1.2.4/guide/update.md',
            ],
        }
    ],
    "/common/": [
        {
            text: "集成项目示例",
            collapsible: false,
            children: [
                '/common/projectexample.md',
                '/common/companyintegration.md',
            ],
        },
        {
            text: "社区支持",
            collapsible: false,
            children: [
                '/common/pr.md',
                '/common/support.md',
            ],
        },
        {
            text: "组织成员",
            collapsible: false,
            link: '/common/member.md',
        },
        {
            text: "相关资料",
            collapsible: false,
            link: '/common/learningmaterials.md',
        },
        {
            text: "常见问题",
            collapsible: false,
            link: '/common/troubleshooting.md',
        },
        {
            text: "更新计划",
            collapsible: false,
            link: '/common/update.md',
        }
    ],
});
