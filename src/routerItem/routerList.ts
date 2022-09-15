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
        clildren: [
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
    }
]