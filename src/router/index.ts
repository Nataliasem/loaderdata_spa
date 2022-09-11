import { createRouter, createWebHistory } from 'vue-router'
import { checkMiddleware } from './middleware'

import accessDenied from '~/pages/access-denied.vue'
import adminDashboard from '~/pages/admin/users-dashboard.vue'
import adminUserEdit from '~/components/user-edit.vue'
import uiKit from '~/pages/admin/ui-kit.vue'
import logIn from '~/pages/auth/login-page.vue'
import homePage from '~/pages/home-page.vue'
import notFound from '~/pages/not-found.vue'
import accountPage from '~/pages/account/account-page.vue'

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
      path: '/auth/login',
      component: logIn,
      meta: {
        layout: 'not-auth-layout'
      }
    },
    {
      path: '/account',
      component: accountPage,
      meta: {
        layout: 'default-layout'
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
      path: '/admin/admin-user-edit',
      component: adminUserEdit,
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

router.beforeResolve((to, from, next) => {
  const allowed = checkMiddleware(to)

  if (allowed) {
    next()
  } else {
    next({
      name: 'access-denied',
      params: { error: 'У вас нет прав доступа к этой странице' }
    })
  }
})

export default router
