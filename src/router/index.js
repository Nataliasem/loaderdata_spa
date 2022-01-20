import { createRouter, createWebHistory } from 'vue-router'

import homePage from '../pages/home'
import logIn from '../pages/auth/log-in'
import adminDashboard from '../pages/admin/dashboard'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/auth/log-in',
            component: logIn
        },
        {
            path: '/admin/dashboard',
            component: adminDashboard
        }
    ]
})

export default router
