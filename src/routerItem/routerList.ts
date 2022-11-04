export const routeList:Array<myRouterItem> = [
    {
        path: '/home/dashbord',
        icon: 'HomeFilled',
        name: '主页'
    },
    {   
        path: '/home/mouseCard',
        icon: 'Promotion',
        name: '卡片蒙版'
    },
    {
        path: '/home/loading',
        icon: 'Loading',
        name: 'loading动画',
        children: [
            {
                path: '/home/loading/loading1',
                name: "loading1",
            },
            {
                path: '/home/loading/loading2',
                name: 'loading2'
            }
        ]
    },
    {
        path: '/home/piano',
        icon: 'List',
        name: 'card手风琴'
    },
    {
        path:'/home/input',
        icon: 'EditPen',
        name : 'input文本',
        children: [
            {
                path: '/home/input/input1',
                name : 'input1',
            },
            {
                path: '/home/input/input2',
                name: 'input2'
            }
        ]
    },
    {
        path: '/home/list',
        icon: 'Avatar',
        name: 'list介绍',
        children: [
            {
                path: '/home/list/userlist',
                name : '人物列表',
            },
            {
                path: '/home/list/introdution',
                name: '产品介绍'
            }
        ]
    },
    {
        path: '/home/intersting',
        icon: 'VideoCameraFilled',
        name: '有趣的',
        children: [
            {
                path: '/home/intersting/testpeople',
                name: 'text图片'
            },
            {
                path: '/home/intersting/textBackImg',
                name: '动态背景'
            },
            {
                path: '/home/intersting/iphone14',
                name: '灵动岛'
            },
            {
                path: '/home/intersting/2023',
                name: '元旦'
            }
        ]
    },
    {
        path: '/home/navbar',
        name: '导航栏',
        icon: 'LocationFilled',
        children: [
            {
                path: '/home/navbar/nav-one',
                name: '导航切换'
            },
            {
                path: '/home/navbar/nav-two',
                name: '3D切换'
            }
        ]
    },
    {
        path: '/home/function',
        name: '功能性组件',
        icon: 'Tools',
        children: [
            {
                path: '/home/function/yourname',
                name: '签名'
            },
            {
                path: '/home/function/vertifyCode',
                name: '滑动验证'
            },
            {
                path: '/home/function/pinia',
                name: 'pinia'
            }
        ]
    },
    {
        path: '/home/404page',
        icon: 'CircleCloseFilled',
        name: '404页面'
    }
]

