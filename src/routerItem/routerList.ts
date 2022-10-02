export const routeList:Array<myRouterItem> = [
    {
        path: '/home/dashbord',
        icon: 'HomeFilled',
        name: '主页'
    },
    {   
        path: '/home/mouseCard',
        icon: 'Promotion',
        name: '鼠标进入卡片'
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
        name: '手风琴卡片'
    },
    {
        path:'/home/input',
        icon: 'EditPen',
        name : '文本输入框',
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
        name: '列表介绍',
        children: [
            {
                path: '/home/list/userlist',
                name : '人物列表',
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
                name: '文字渲染图片'
            },
            {
                path: '/home/intersting/yourname',
                name: '手写签名'
            }
        ]
    },
    {
        path: '/home/404page',
        icon: 'CircleCloseFilled',
        name: '404页面'
    }
]

