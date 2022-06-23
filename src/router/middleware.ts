import { ROLES } from '~/constants'
import { useUserStore } from '~/store/user'
import { RouteRecordNormalized, RouteLocationNormalized } from 'vue-router'

interface Middleware {
  auth: () => boolean
  admin: () => boolean
}

const checkIsAdmin = () => {
  const userStore = useUserStore()
  const roleId = (userStore.user && userStore.user.roleId) || ''
  if (!roleId) {
    return false
  }

  return roleId === ROLES.ADMIN.ID
}

const MIDDLEWARE: Middleware = {
  auth: () => {
    const userStore = useUserStore()
    return userStore.isAuthenticated || false
  },
  admin: checkIsAdmin
}

const getComponentMiddleware = (matched: RouteRecordNormalized[]) => {
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

const getMiddlewareNames = (Component) => {
  const middleware = Component.middleware
  if (!middleware) {
    return []
  }

  return Array.isArray(middleware) ? middleware : [middleware]
}

/**
 * Проверка middleware страницы
 * @param {object} to - объект маршрута, на который переходим
 * @returns {boolean}
 */
export const checkMiddleware = (to: RouteLocationNormalized) => {
  const middlewareArray = getComponentMiddleware(to.matched)

  if (!middlewareArray || middlewareArray.length === 0) {
    return true
  }

  return middlewareArray.every((middlewareName: 'auth' | 'admin') => {
    const middlewareFunction = MIDDLEWARE[middlewareName]

    if (!middlewareFunction) {
      console.error('Неизвестная middleware', middlewareName)

      return false
    }

    return middlewareFunction()
  })
}
