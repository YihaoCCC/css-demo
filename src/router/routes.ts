import { RouteRecordRaw } from 'vue-router'

export const routes:RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     name: 'profile',
    //     component: () => import('../views/profile/profile.vue')
    // },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile/profile.vue')
    },
    {
        path: '/',
        redirect: '/UI',
    },
    {
        path : '/UIwelcome',
        name: 'doorIndex',
        component: () => import('../views/doorIndex/index.vue')
    },
    {
        path: '/UI',
        name: 'UIHome',
        component: () => import('../views/home/home.vue'),
        redirect: '/UI/dashbord',
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
                redirect: '/UI/loading/loading1',
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
                redirect: '/UI/input/input1',
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
                redirect: '/UI/list/userlist',
                children: [
                    {
                        path: 'userlist',
                        name: 'userlist',
                        component: () => import('../views/List/userlist/user.vue')
                    },
                    {
                        path: 'introdution',
                        name: 'introdution',
                        component: () => import('../views/List/introduction/introduction.vue')
                    }
                ]

            },
            {
                path: 'intersting',
                name: 'intersting',
                redirect: '/UI/intersting/testpeople',
                children: [
                    {
                        path: 'testpeople',
                        name: 'testpeople',
                        component: () => import('../views/interested/textPeople/testPeople.vue')
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
                    },
                    {
                        path: '2023',
                        name: '2023',
                        component: () => import('../views/interested/2023/2023.vue') 
                    },
                    {
                        path: 'draw',
                        name: 'draw',
                        component: () => import('../views/interested/draw/draw.vue')
                    },
                    {
                        path: 'redbook',
                        name: 'redbook',
                        component: () => import('../views/interested/redbook/index.vue')
                    }
                ]
            },
            {
                path: 'navbar',
                name: 'navbar',
                redirect: '/UI/navbar/nav-one',
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
            },
            {
                path: 'function',
                name: 'function',
                redirect: '/UI/function/vertifyCode',
                children: [
                    {
                        path: 'vertifyCode',
                        name: 'vertify',
                        component: () => import('../views/function/vertifyCode/vertifyImgCode.vue')
                    },
                    {
                        path: 'yourname',
                        name: 'yourname',
                        component: () => import('../views/function/yourName/yourName.vue')
                    },
                    {
                        path: 'pinia',
                        name: 'pinia',
                        component: () => import('../views/function/pinia/pinia.vue')
                    },
                    {
                        path: 'directive',
                        name: 'directive',
                        component: () => import('../views/function/directive/directive.vue')
                    }
                ]
            },
            {
                path: '/scroll',
                name: 'Scroll',
                redirect: '/scroll/text',
                children: [
                    {
                        path: '/scroll/text',
                        name: 'ScrollText',
                        component: () => import('../views/scroll/text/text.vue')
                    },
                    
                    {
                        path: '/scroll/scrollIn',
                        name: 'ScrollIn',
                        component: () => import('../views/scroll/scrollIn.vue')
                    },
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