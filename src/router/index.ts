import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'


const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((from, to, next) => {
    next()
})

export default router