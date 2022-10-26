import { RouteRecordRaw } from 'vue-router'

export const routes:RouteRecordRaw[] = [
    {
        path : '/',
        name: 'doorIndex',
        component: () => import('../views/doorIndex/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        redirect: '/home/dashbord',
        children: [
            {
                path: 'dashbord',
                name: 'dashbord',
                component: () => import('../views/dashbord/dashbord.vue')
            },
            {
                path: 'mouseCard',
                name: 'mouseCard',
                component: () => import('../views/mouseCard/mouseCard.vue')
            },
            {
                path :'loading',
                name: 'loading',
                redirect: '/home/loading/loading1',
                children: [
                    {
                        path: "loading1",
                        name: 'loading1',
                        component: () => import('../views/loading/loading-one/loading.vue')
                    },
                    {
                        path: "loading2",
                        name: 'loading2',
                        component: () => import('../views/loading/loading-two/loading2.vue')
                    }
                ]
            },
            {
                path: 'piano',
                name: 'piano',
                component: () => import('../views/piano/piano.vue')
            },
            {
                path: 'input',
                name: 'input',
                redirect: '/home/input/input1',
                children: [
                    {
                        path: 'input1',
                        name: 'input1',
                        component: () => import('../views/input/input-one/input1.vue')
                    },
                    {
                        path: 'input2',
                        name: 'input2',
                        component: () => import('../views/input/input-two/input2.vue')
                    }
                ]
            },
            {
                path: 'list',
                name: 'list',
                redirect: '/home/list/userlist',
                children: [
                    {
                        path: 'userlist',
                        name: 'userlist',
                        component: () => import('../views/List/userlist/user.vue')
                    }
                ]

            },
            {
                path: 'intersting',
                name: 'intersting',
                redirect: '/home/intersting/testpeople',
                children: [
                    {
                        path: 'testpeople',
                        name: 'testpeople',
                        component: () => import('../views/interested/textPeople/testPeople.vue')
                    },
                    {
                        path: 'yourname',
                        name: 'yourname',
                        component: () => import('../views/interested/yourName/yourName.vue')
                    },
                    {
                        path: 'textBackImg',
                        name: 'textBackImg',
                        component: () => import('../views/interested/text/textBackImg.vue')
                    },
                    {
                        path: 'iphone14',
                        name: 'iphone14',
                        component: () => import('../views/interested/iphone14/iphone14.vue')
                    }
                ]
            },
            {
                path: 'navbar',
                name: 'navbar',
                redirect: '/home/navbar/nav-one',
                children: [
                    {
                        path: 'nav-one',
                        name: 'nav-one',
                        component: () => import('../views/navbar/nav-one/nav-one.vue')
                    },
                    {
                        path: 'nav-two',
                        name: 'nav-two',
                        component: () => import('../views/navbar/nav-two/nav-two.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404/404.vue')
    }
]