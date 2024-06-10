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
        text: '常见问题',
        icon: '/icons/problem.svg',
        link: '/guide/troubleshooting.md'
    },
    {
        text: '更新日志',
        icon: '/icons/update.svg',
        link: '/guide/update.md'
    },
    {
        text: 'warm组织成员',
        icon: '/icons/member.svg',
        link: '/guide/member.md'
    },
    {
        text: '鼓励支持',
        icon: '/icons/support.svg',
        link: '/guide/support.md'
    }
]);
