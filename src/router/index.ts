import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        redirect: '/dashbord',
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
                path :'/loading',
                name: 'loading',
                redirect: '/loading/loading1',
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
                path: '/piano',
                name: 'piano',
                component: () => import('../views/piano/piano.vue')
            },
            {
                path: 'input',
                name: 'input',
                redirect: '/input/input1',
                children: [
                    {
                        path: 'input1',
                        name: 'input1',
                        component: () => import('../views/input/input-one/input1.vue')
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

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router