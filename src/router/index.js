import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import homePage from '../pages/home-page'
import accessDenied from '../pages/access-denied'
import logIn from '../pages/auth/auth-login'
import adminDashboard from '../pages/admin/admin-dashboard'
import uiKit from '../pages/admin/ui-kit'
import notFound from '../pages/not-found'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: homePage,
            meta: {
                layout: 'default-layout'
            }
        },
        {
            path: '/auth/log-in',
            component: logIn,
            meta: {
                layout: 'not-auth-layout'
            }
        },
        {
            path: '/admin/dashboard',
            component: adminDashboard,
            meta: {
                layout: 'default-layout'
            }
        },
        {
            path: '/admin/ui-kit',
            component: uiKit,
            meta: {
                layout: 'default-layout'
            }
        },
        {
            name: 'access-denied',
            path: '/access-denied',
            component: accessDenied,
            meta: {
                layout: 'not-auth-layout'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            component: notFound,
            meta: {
                layout: 'not-auth-layout'
            }
        }
    ]
})


const MIDDLEWARE = {
    'auth': () => store.getters.isAuthenticated,
    'admin': () => store.state.user.data.authorities.includes('manage_settings')
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
        next({name: 'access-denied', params: { error: 'У вас нет прав доступа к этой странице' } })
    }
})

export default router


