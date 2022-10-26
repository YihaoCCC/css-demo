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
                path: '/home/list/threeD',
                name: '3D旋转介绍'
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
                path: '/home/intersting/yourname',
                name: '手写签名'
            },
            {
                path: '/home/intersting/textBackImg',
                name: '文字背景运动'
            },
            {
                path: '/home/intersting/iphone14',
                name: '灵动岛'
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
        path: '/home/404page',
        icon: 'CircleCloseFilled',
        name: '404页面'
    }
]

