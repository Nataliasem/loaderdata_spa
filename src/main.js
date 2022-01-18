import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

import App from './App.vue'

import startPage from './pages'
import logIn from './pages/auth/log-in'
import adminDashboard from './pages/desktop/admin/dashboard'
import desktopPage from './pages/desktop'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: startPage
        },
        {
            path: '/desktop',
            component: desktopPage
        },
        {
            path: '/auth/log-in',
            component: logIn
        },
        {
            path: '/desktop/admin/dashboard',
            component: adminDashboard
        }
    ]
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')


