export const routeList:Array<myRouterItem> = [
    {
        path: '/home/dashbord',
        name: '主页'
    },
    {   
        path: '/home/mouseCard',
        name: '鼠标进入卡片'
    },
    {
        path: '/home/loading',
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
        name: '手风琴卡片'
    },
    {
        path :'/home/input',
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
        name: '列表介绍',
        children: [
            {
                path: '/home/list/userlist',
                name : '人物列表',
            }
        ]
    },
    {
        path: '/home/404page',
        name: '404页面'
    }
]

