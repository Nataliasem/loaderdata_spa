import { ROLES } from '~/constants.ts'
import { useUserStore } from '~/store/user'

const checkIsAdmin = () => {
  const userStore = useUserStore()
  const roleId = (userStore.user && userStore.user.roleId) || ''
  if (!roleId) {
    return false
  }

  return roleId === ROLES.ADMIN.ID
}

const MIDDLEWARE = {
  auth: () => {
    const userStore = useUserStore()
    return userStore.isAuthenticated || false
  },
  admin: checkIsAdmin
}

const getComponentMiddleware = (matched) => {
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
export const checkMiddleware = (to) => {
  const middlewareArray = getComponentMiddleware(to.matched)

  if (!middlewareArray || middlewareArray.length === 0) {
    return true
  }

  return middlewareArray.every((middlewareName) => {
    const middlewareFunction = MIDDLEWARE[middlewareName]

    if (!middlewareFunction) {
      console.error('Неизвестная middleware', middlewareName)

      return false
    }

    return middlewareFunction()
  })
}
