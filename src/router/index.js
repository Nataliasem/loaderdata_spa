import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import homePage from '../pages/home'
import permissionDenied from '../pages/permission-denied'
import logIn from '../pages/auth/log-in'
import adminDashboard from '../pages/admin/dashboard'
import notFound from '../pages/not-found'

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
        },
        {
            name: 'permission-denied',
            path: '/permission-denied',
            component: permissionDenied
        },
        {
            path: '/:pathMatch(.*)*',
            component: notFound
        }
    ]
})


const MIDDLEWARE = {
    'auth': () => store.isAuthenticated,
    'admin': () => store.state.user.data.authorities.includes('admin')
}

const getComponentMiddleware = matched => {
    const last = matched[matched.length - 1]
    if (!last) {
        return []
    }

    const Component = last.components.default

    if (!Component) {
        return []
    }
    return getMiddlewareNames(Component) || []
}

const getMiddlewareNames = Component => {

    const middleware = Component.middleware
    if (!middleware) {
        return []
    }

    return Array.isArray(middleware) ? middleware : [middleware]
}

const checkMiddleware = (to) => {
    const middlewareArray = getComponentMiddleware(to.matched)

    if(!middlewareArray || middlewareArray.length === 0) {
        return true
    }

    return middlewareArray.every(middlewareName => {
        const middlewareFunction = MIDDLEWARE[middlewareName]

        if (!middlewareFunction) {
            console.error('Неизвестная middleware', middlewareName)

            return false
        }

        return middlewareFunction()
    })
}

router.beforeResolve((to, from, next) => {
    const allowed = checkMiddleware(to)

    if (allowed) {
        next()
    } else {
        next({name: 'permission-denied', params: { error: 'У вас нет прав доступа к этой странице' } })
    }
})

export default router


