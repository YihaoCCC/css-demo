import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { routes } from './routes'


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((from, to, next) => {
    next()
})

export default router