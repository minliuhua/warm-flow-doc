import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: '项目地址',
        icon: "bulb",
        children: [
            { text: 'gitee', icon: '/icons/gitee.svg', link: 'https://gitee.com/dromara/warm-flow.git' },
            { text: 'github', icon: '/icons/github.svg', link: 'https://github.com/dromara/warm-flow.git' }
        ]
    },
    {
        text: '更新日志',
        icon: '/icons/update.svg',
        link: '/guide/update.md'
    },
    {
        text: '社区贡献',
        icon: 'bulb',
        children: [
            { text: '社区pr', link: '/guide/pr.md' },
            { text: '捐赠列表', link: '/guide/donation.md' }
        ]
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
    }
]);
