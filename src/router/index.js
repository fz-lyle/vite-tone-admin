import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@layout/index.vue'

export const constantRouterMap = [
    {
        path: '/login',
        component: () => import('@pages/login/index.vue')
    }
]

export const asyncRouterMap = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@pages/dashboard/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRouterMap,
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router