export const routeList = [
    {
        path: '/dashbord',
        name: '主页'
    },
    {   
        path: '/mouseCard',
        name: '鼠标进入卡片'
    },
    {
        path: '/loading',
        name: '我的loading',
        children: [
            {
                path: '/loading/loading1',
                name: "loading1",
            },
            {
                path: '/loading/loading2',
                name: 'loading2'
            }
        ]
    },
    {
        path: '/piano',
        name: '手风琴卡片'
    },
    {
        path :'/input',
        name : '文本输入框',
        children: [
            {
                path: '/input/input1',
                name : 'input1',
            },
            {
                path: '/input/input2',
                name: 'input2'
            }
        ]
    },
    {
        path: '/404page',
        name: '404页面'
    }
]