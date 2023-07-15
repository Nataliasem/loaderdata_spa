import { createRouter, createWebHistory } from 'vue-router'
import { checkMiddleware } from './middleware'

import DefaultLayout from '~/layouts/default-layout.vue'
import NotAuthLayout from '~/layouts/not-auth-layout.vue'
import accessDenied from '~/pages/access-denied.vue'
import adminDashboard from '~/pages/admin/users/users-dashboard.vue'
import uiKit from '~/pages/admin/ui-kit.vue'
import logIn from '~/pages/auth/login-page.vue'
import homePage from '~/pages/home-page.vue'
import notFound from '~/pages/not-found.vue'
import accountPage from '~/pages/account/account-page.vue'
import userDetails from '~/pages/admin/users/user-details.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: homePage,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/auth/login',
      component: logIn,
      meta: {
        layout: NotAuthLayout
      }
    },
    {
      path: '/account',
      component: accountPage,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/admin/dashboard',
      component: adminDashboard,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/admin/ui-kit',
      component: uiKit,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      path: '/admin/user-details',
      component: userDetails,
      meta: {
        layout: DefaultLayout
      }
    },
    {
      name: 'access-denied',
      path: '/access-denied',
      component: accessDenied,
      meta: {
        layout: NotAuthLayout
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: notFound,
      meta: {
        layout: NotAuthLayout
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
