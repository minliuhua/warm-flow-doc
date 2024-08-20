import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: '文档导航',
        icon: '/icons/community.svg',
        link: '/common/projectexample.md',
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
