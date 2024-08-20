import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: '快速开始',
        icon: '/icons/community.svg',
        link: '/master/guide/started.md',
    },
    {
        text: '项目集成',
        icon: '/icons/community.svg',
        children: [
            { text: '集成项目示例', link: '/common/projectexample.md' },
            { text: '公司使用列表', link: '/common/companyintegration.md' },
        ]
    },
    {
        text: '社区',
        icon: '/icons/community.svg',
        children: [
            { text: '组织成员', link: '/common/member.md' },
            { text: '社区贡献', link: '/common/pr.md' },
            { text: 'Dromara成员项目', link: '/common/dromara.md' },
        ]
    },
    {
        text: '参与贡献',
        icon: '/icons/community.svg',
        children: [
            { text: '如何贡献', link: '/common/getinvolved.md' },
            { text: '提交pr', link: '/common/submitpr.md' },
        ]
    },
    {
        text: '相关资料',
        icon: '/icons/community.svg',
        link: '/common/learningmaterials.md'
    },
    {
        text: '常见问题',
        icon: '/icons/member.svg',
        link: '/common/troubleshooting.md'
    },
    {
        text: '更新计划',
        icon: '/icons/member.svg',
        link: '/common/update.md'
    },
    {
        text: '历史版本',
        icon: '/icons/version.svg',
        children: [
            { text: 'v1.2.5', link: '/v1.2.5/guide/introduction.html' },
            { text: 'v1.2.4', link: '/v1.2.4/guide/introduction.html' },
            { text: 'v1.2.3', link: '/v1.2.3/guide/introduction.html' },
        ]
    },
]);
