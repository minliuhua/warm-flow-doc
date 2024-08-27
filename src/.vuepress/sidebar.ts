import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/master/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/master/guide/started.md',
                '/master/guide/processdemo.md',
                '/master/guide/table.md',
                '/master/guide/config.md',
                '/master/guide/api.md',
                '/master/guide/datafillhandler.md',
                '/master/guide/variable.md',
                '/master/guide/ormusagetips.md',
                '/master/guide/processterm.md',
                '/master/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/master/guide/listener.md',
                '/master/guide/logicdelete.md',
                '/master/guide/tenant.md',
                '/master/guide/form.md',
                '/master/guide/customstatus.md',
                '/master/guide/expression.md',
            ],
        }
    ],
    "/common/": [
        {
            text: "工作流介绍",
            collapsible: false,
            children: [
                '/common/introduction.md',
                '/common/member.md',
                '/common/pr.md',
                '/common/dromara.md',
                '/common/joingroup.md',
            ],
        },
        {
            text: "集成项目示例",
            collapsible: false,
            link: '/common/projectexample.md',
        },
        {
            text: "使用者登记",
            collapsible: false,
            link: '/common/companyintegration.md',
        },
        {
            text: "如何贡献",
            collapsible: false,
            children: [
                '/common/getinvolved.md',
                '/common/submitpr.md',
            ],
        },
        {
            text: "学习资料",
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
        },
        {
            text: "捐赠",
            collapsible: false,
            link: '/common/support.md',
        },
    ],
    "/v1.2.6/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.2.6/guide/started.md',
                '/v1.2.6/guide/processdemo.md',
                '/v1.2.6/guide/table.md',
                '/v1.2.6/guide/config.md',
                '/v1.2.6/guide/api.md',
                '/v1.2.6/guide/datafillhandler.md',
                '/v1.2.6/guide/variable.md',
                '/v1.2.6/guide/ormusagetips.md',
                '/v1.2.6/guide/processterm.md',
                '/v1.2.6/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.2.6/guide/listener.md',
                '/v1.2.6/guide/logicdelete.md',
                '/v1.2.6/guide/tenant.md',
                '/v1.2.6/guide/form.md',
                '/v1.2.6/guide/customstatus.md',
                '/v1.2.6/guide/expression.md',
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
});
