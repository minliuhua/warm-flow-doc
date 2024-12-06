import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/master/": [
        {
            text: "🎃 初级篇",
            collapsible: false,
            children: [
                {
                    text: "🎲 快速开始",
                    link: "primary/started.md",
                },
                'primary/table.md',
                'primary/config.md',
                'primary/api.md',
                'primary/datafillhandler.md',
                'primary/variable.md',
                'primary/condition.md',
                'primary/handler_change.md',
                'primary/collaboration.md',
                'primary/processterm.md',
            ],
        },
        {
            text: "🎈 进阶篇",
            collapsible: false,
            children: [
                'advanced/permission_handler.md',
                'advanced/variableStategy.md',
                'advanced/listener.md',
                'advanced/ormusagetips.md',
                'advanced/logicdelete.md',
                'advanced/tenant.md',
                'advanced/designerIntroduced.md',
            ],
        },
        {
            text: "🏆 提高篇",
            collapsible: false,
            children: [
                'enhance/designer_two_open.md',
                'enhance/customstatus.md',
                'enhance/condition_two_open',
                'enhance/variableStatey_two_open',
                'enhance/listener_two_open',
                'enhance/form.md',
                'enhance/jsonlib.md',
            ],
        }
    ],
    "/common/": [
        {
            text: "😁 介绍",
            link: "introduction.md",
        },
        {
            text: "👉 功能演示",
            link: "processdemo.md",
        },
        {
            text: "🖲 加入群聊",
            link: "joingroup.md",
        },
        {
            text: "🥷 公司使用列表",
            link: "companyintegration.md",
        },
        {
            text: "🚸 集成项目示例",
            link: "projectexample.md",
        },
        {
            text: "🍚 有偿服务",
            link: "paidservice.md",
        },
        {
            text: "✍️ 如何贡献",
            link: "getinvolved.md",
        },
        {
            text: "㊙️ 学习资料",
            link: "learningmaterials.md",
        },
        {
            text: "㊗️ Dromara成员项目",
            link: "dromara.md",
        },
        {
            text: "🤞 捐赠",
            link: "support.md",
        },
    ],
    "/v1.3.4/guide/": [
        {
            text: "初级篇",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.3.4/guide/started.md',
                '/v1.3.4/guide/table.md',
                '/v1.3.4/guide/config.md',
                '/v1.3.4/guide/api.md',
                '/v1.3.4/guide/datafillhandler.md',
                '/v1.3.4/guide/variable.md',
                '/v1.3.4/guide/condition.md',
                '/v1.3.4/guide/processterm.md',
            ],
        },
        {
            text: "进阶篇",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.3.4/guide/permission_handler.md',
                '/v1.3.4/guide/variableStategy.md',
                '/v1.3.4/guide/listener.md',
                '/v1.3.4/guide/ormusagetips.md',
                '/v1.3.4/guide/logicdelete.md',
                '/v1.3.4/guide/tenant.md',
                '/v1.3.4/guide/designerIntroduced.md',
            ],
        },
        {
            text: "提高篇",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.3.4/guide/designer_two_open.md',
                '/v1.3.4/guide/customstatus.md',
                '/v1.3.4/guide/expression_ex.md',
                '/v1.3.4/guide/form.md',
                '/v1.3.4/guide/jsonlib.md',
            ],
        }
    ],
    "/v1.3.3/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.3.3/guide/started.md',
                '/v1.3.3/guide/processterm.md',
                '/v1.3.3/guide/processrule.md',
                '/v1.3.3/guide/processdemo.md',
                '/v1.3.3/guide/table.md',
                '/v1.3.3/guide/config.md',
                '/v1.3.3/guide/api.md',
                '/v1.3.3/guide/datafillhandler.md',
                '/v1.3.3/guide/variable.md',
                '/v1.3.3/guide/variableStategy.md',
                '/v1.3.3/guide/ormusagetips.md',
                '/v1.3.3/guide/designerIntroduced.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.3.3/guide/listener.md',
                '/v1.3.3/guide/logicdelete.md',
                '/v1.3.3/guide/tenant.md',
                '/v1.3.3/guide/form.md',
                '/v1.3.3/guide/customstatus.md',
                '/v1.3.3/guide/expression.md',
                '/v1.3.3/guide/jsonlib.md',
            ],
        }
    ],
    "/v1.3.1/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.3.1/guide/started.md',
                '/v1.3.1/guide/processterm.md',
                '/v1.3.1/guide/processrule.md',
                '/v1.3.1/guide/processdemo.md',
                '/v1.3.1/guide/table.md',
                '/v1.3.1/guide/config.md',
                '/v1.3.1/guide/api.md',
                '/v1.3.1/guide/datafillhandler.md',
                '/v1.3.1/guide/variable.md',
                '/v1.3.1/guide/variableStategy.md',
                '/v1.3.1/guide/ormusagetips.md',
                '/v1.3.1/guide/designerIntroduced.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.3.1/guide/listener.md',
                '/v1.3.1/guide/logicdelete.md',
                '/v1.3.1/guide/tenant.md',
                '/v1.3.1/guide/form.md',
                '/v1.3.1/guide/customstatus.md',
                '/v1.3.1/guide/expression.md',
                '/v1.3.1/guide/jsonlib.md',
            ],
        }
    ],
    "/v1.3.0/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.3.0/guide/started.md',
                '/v1.3.0/guide/processterm.md',
                '/v1.3.0/guide/processrule.md',
                '/v1.3.0/guide/processdemo.md',
                '/v1.3.0/guide/table.md',
                '/v1.3.0/guide/config.md',
                '/v1.3.0/guide/api.md',
                '/v1.3.0/guide/datafillhandler.md',
                '/v1.3.0/guide/variable.md',
                '/v1.3.0/guide/variableStategy.md',
                '/v1.3.0/guide/ormusagetips.md',
                '/v1.3.0/guide/designerIntroduced.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.3.0/guide/listener.md',
                '/v1.3.0/guide/logicdelete.md',
                '/v1.3.0/guide/tenant.md',
                '/v1.3.0/guide/form.md',
                '/v1.3.0/guide/customstatus.md',
                '/v1.3.0/guide/expression.md',
                '/v1.3.0/guide/jsonlib.md',
            ],
        }
    ],
    "/v1.2.10/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.2.10/guide/started.md',
                '/v1.2.10/guide/processterm.md',
                '/v1.2.10/guide/processrule.md',
                '/v1.2.10/guide/processdemo.md',
                '/v1.2.10/guide/table.md',
                '/v1.2.10/guide/config.md',
                '/v1.2.10/guide/api.md',
                '/v1.2.10/guide/datafillhandler.md',
                '/v1.2.10/guide/variable.md',
                '/v1.2.10/guide/variableStategy.md',
                '/v1.2.10/guide/ormusagetips.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.2.10/guide/logicdelete.md',
                '/v1.2.10/guide/tenant.md',
                '/v1.2.10/guide/form.md',
                '/v1.2.10/guide/customstatus.md',
                '/v1.2.10/guide/expression.md',
                '/v1.2.10/guide/jsonlib.md',
            ],
        }
    ],
    "/v1.2.8/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.2.8/guide/started.md',
                '/v1.2.8/guide/processterm.md',
                '/v1.2.8/guide/processrule.md',
                '/v1.2.8/guide/processdemo.md',
                '/v1.2.8/guide/table.md',
                '/v1.2.8/guide/config.md',
                '/v1.2.8/guide/api.md',
                '/v1.2.8/guide/datafillhandler.md',
                '/v1.2.8/guide/variable.md',
                '/v1.2.8/guide/variableStategy.md',
                '/v1.2.8/guide/ormusagetips.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.2.8/guide/listener.md',
                '/v1.2.8/guide/logicdelete.md',
                '/v1.2.8/guide/tenant.md',
                '/v1.2.8/guide/form.md',
                '/v1.2.8/guide/customstatus.md',
                '/v1.2.8/guide/expression.md',
                '/v1.2.8/guide/jsonlib.md',
            ],
        }
    ],
    "/v1.2.7/guide/": [
        {
            text: "基础部分",
            icon: "bulb",
            collapsible: false,
            children: [
                '/v1.2.7/guide/started.md',
                '/v1.2.7/guide/processdemo.md',
                '/v1.2.7/guide/table.md',
                '/v1.2.7/guide/config.md',
                '/v1.2.7/guide/api.md',
                '/v1.2.7/guide/datafillhandler.md',
                '/v1.2.7/guide/variable.md',
                '/v1.2.7/guide/ormusagetips.md',
                '/v1.2.7/guide/processterm.md',
                '/v1.2.7/guide/processrule.md',
            ],
        },
        {
            text: "进阶部分",
            icon: "/icons/advanced.svg",
            collapsible: false,
            children: [
                '/v1.2.7/guide/listener.md',
                '/v1.2.7/guide/logicdelete.md',
                '/v1.2.7/guide/tenant.md',
                '/v1.2.7/guide/form.md',
                '/v1.2.7/guide/customstatus.md',
                '/v1.2.7/guide/expression.md',
            ],
        }
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
