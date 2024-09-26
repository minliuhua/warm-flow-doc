import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: '文档导航',
        icon: '/icons/community.svg',
        link: '/common/introduction.md',
    },
    {
        text: '快速开始',
        icon: '/icons/community.svg',
        link: '/master/guide/started.md',
    },
    {
        text: '常见问题',
        icon: '/icons/member.svg',
        link: '/common/troubleshooting.md'
    },
    {
        text: '更新日志',
        icon: '/icons/member.svg',
        link: '/common/update.md'
    },
    {
        text: '历史版本',
        icon: '/icons/version.svg',
        children: [
            { text: 'v1.2.9', link: '/v1.2.9/guide/started.md' },
            { text: 'v1.2.8', link: '/v1.2.8/guide/started.md' },
            { text: 'v1.2.7', link: '/v1.2.7/guide/started.md' },
            { text: 'v1.2.6', link: '/v1.2.6/guide/started.md' },
            { text: 'v1.2.4', link: '/v1.2.4/guide/started.md' },
            { text: 'v1.2.3', link: '/v1.2.3/guide/started.md' },
        ]
    },
]);
