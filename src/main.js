import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import startPage from './pages'
import logIn from './pages/auth/log-in'
import adminDashboard from './pages/desktop/admin/dashboard'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: startPage
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

const app = createApp(App)

app.use(router)

app.mount('#app')


