module.exports = {
    title: 'XiangYu的博客',
    description: '这里是个人博客',
    theme: 'reco',
    base: '/blogs/',
    themeConfig: {
        subSidebar: 'auto',
        logo: "/logo.jpg",
        authorAvatar: "/logo.jpg",
        type: 'blog',
        author: "Shark su",
        // 导航栏
        nav: [
            { text: "首页", link: "/" },
            {
                text: "Shark su 的博客",
                items: [
                    { text: "掘金", link: "https://juejin.cn/user/2875978150588247" },
                ]
            }
        ],
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "博客", // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        },
        // 日期设置
        locales: {
            "/": {
                lang: "zh-CN",
            },
        },
    },
    // 特效效果
    plugins: [
        // 樱花
        [
            "sakura",
            {
                num: 20, // 默认数量
                show: true, //  是否显示
                zIndex: -1, // 层级
                img: {
                    replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                },
            },
        ],
        // 鼠标点击
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
    ]
}