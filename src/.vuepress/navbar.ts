import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: '项目集成',
        icon: '/icons/community.svg',
        children: [
            { text: '集成项目示例', link: '/guide/projectexample.md' },
            { text: '公司使用列表', link: '/guide/companyintegration.md' },
        ]
    },
    {
        text: '社区贡献',
        icon: '/icons/community.svg',
        link: '/guide/pr.md'
    },
    {
        text: '组织成员',
        icon: '/icons/member.svg',
        link: '/guide/member.md'
    },
    {
        text: '鼓励支持',
        icon: '/icons/support.svg',
        link: '/guide/support.md'
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
]);
