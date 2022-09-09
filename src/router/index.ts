import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: "/",
        redirect: 'home/dashbord',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        redirect: '/home/dashbord',
        children: [
            {
                path: '/home/dashbord',
                name: 'dashbord',
                component: () => import('../views/dashbord/dashbord.vue')
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router