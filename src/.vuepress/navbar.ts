import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: '项目集成',
        icon: '/icons/community.svg',
        children: [
            { text: '集成项目示例', link: '/master/guide/projectexample.md' },
            { text: '公司使用列表', link: '/master/guide/companyintegration.md' },
        ]
    },
    {
        text: '社区贡献',
        icon: '/icons/community.svg',
        link: '/master/guide/pr.md'
    },
    {
        text: '组织成员',
        icon: '/icons/member.svg',
        link: '/master/guide/member.md'
    },
    {
        text: '鼓励支持',
        icon: '/icons/support.svg',
        link: '/master/guide/support.md'
    },
    {
        text: '项目地址',
        icon: '/icons/project.svg',
        children: [
            { text: 'github', icon: '/icons/github.svg', link: 'https://github.com/dromara/warm-flow.git' },
            { text: 'gitee', icon: '/icons/gitee.svg', link: 'https://gitee.com/dromara/warm-flow.git' },
            { text: 'gitcode', icon: '/icons/gitCode.svg', link: 'https://gitcode.com/minliuhua/warm-flow.git' },
        ]
    },
    {
        text: '历史版本',
        icon: '/icons/version.svg',
        children: [
            { text: 'v1.2.3', link: '/v1.2.3/guide/introduction.html' },
            { text: 'v1.2.4-m1(尝鲜版)', link: '/v1.2.4/guide/introduction.html' },
        ]
    },
]);
