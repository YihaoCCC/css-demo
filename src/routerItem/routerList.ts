export const routeList:Array<myRouterItem> = [
    {
        path: '/UI/dashbord',
        icon: 'HomeFilled',
        name: '主页'
    },
    {   
        path: '/UI/mouseCard',
        icon: 'Promotion',
        name: '卡片蒙版'
    },
    {
        path: '/UI/loading',
        icon: 'Loading',
        name: 'loading动画',
        children: [
            {
                path: '/UI/loading/loading1',
                name: "loading1",
            },
            {
                path: '/UI/loading/loading2',
                name: 'loading2'
            }
        ]
    },
    {
        path: '/UI/piano',
        icon: 'List',
        name: 'card手风琴'
    },
    {
        path:'/UI/input',
        icon: 'EditPen',
        name : 'input文本',
        children: [
            {
                path: '/UI/input/input1',
                name : 'input1',
            },
            {
                path: '/UI/input/input2',
                name: 'input2'
            }
        ]
    },
    {
        path: '/UI/list',
        icon: 'Avatar',
        name: 'list介绍',
        children: [
            {
                path: '/UI/list/userlist',
                name : '人物列表',
            },
            {
                path: '/UI/list/introdution',
                name: '产品介绍'
            }
        ]
    },
    {
        path: '/UI/intersting',
        icon: 'VideoCameraFilled',
        name: '有趣的',
        children: [
            {
                path: '/UI/intersting/testpeople',
                name: 'text图片'
            },
            {
                path: '/UI/intersting/textBackImg',
                name: '动态背景'
            },
            {
                path: '/UI/intersting/iphone14',
                name: '灵动岛'
            },
            {
                path: '/UI/intersting/2023',
                name: '元旦'
            },
            {
                path: '/UI/intersting/draw',
                name: '拼多多'
            },
            {
                path: '/UI/intersting/redbook',
                name: '小红书'
            }
        ]
    },
    {
        path: '/UI/navbar',
        name: '导航栏',
        icon: 'LocationFilled',
        children: [
            {
                path: '/UI/navbar/nav-one',
                name: '导航切换'
            },
            {
                path: '/UI/navbar/nav-two',
                name: '3D切换'
            }
        ]
    },
    {
        path: '/UI/function',
        name: '功能性组件',
        icon: 'Tools',
        children: [
            {
                path: '/UI/function/yourname',
                name: '签名'
            },
            {
                path: '/UI/function/vertifyCode',
                name: '滑动验证'
            },
            {
                path: '/UI/function/pinia',
                name: 'pinia'
            },
            {
                path: '/UI/function/directive',
                name: 'directive'
            }
        ]
    },
    {
        path: '/scroll',
        name: '滚动Scroll',
        icon: 'Sort',
        children: [
            {
                path: '/scroll/text',
                name: '滚动文字'
            },
            {
                path: '/scroll/scrollIn',
                name: '滚动进入'
            }
        ]
    },
    {
        path: '/UI/404page',
        icon: 'CircleCloseFilled',
        name: '404页面'
    }
]

