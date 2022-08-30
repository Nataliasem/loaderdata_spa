import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'
import { useUserStore } from '~/store/user'
import LdNavbar from '~/components/ui/ld-navbar.vue'
import { afterEach, describe, expect, it, vi } from 'vitest'

enableAutoUnmount(afterEach)

const componentFactory = (props = {}) => {
  return shallowMount(LdNavbar, {
    ...mountingOptions,
    props: props
  })
}

const mountingOptions = {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn
      })
    ]
  }
}

describe('LdNavbar.vue', () => {
  const userStore = useUserStore()
  const router = createRouterMock()
  injectRouterMock(router)

  let wrapper

  const findLogo = () => wrapper.find('.ld-logo')
  const findLoginButton = () => wrapper.find('#login-button')
  const findLogoutButton = () => wrapper.find('#logout-button')
  const findAccountButton = () => wrapper.find('#account-button')

  describe('пользователь прошёл аутентификацию', () => {
    it('показывает логотип', () => {
      userStore.isAuthenticated = true
      wrapper = componentFactory()
      expect(findLogo().exists()).toBe(true)
    })

    it('показывает кнопку перехода в аккаунт', () => {
      userStore.isAuthenticated = true
      userStore.user = {
        name: 'Test'
      }
      wrapper = componentFactory()
      expect(findAccountButton().exists()).toBe(true)

      console.log(findAccountButton().html())

      expect(findAccountButton().html()).toContain('Test')
      expect(findAccountButton().html()).toContain('icon-user-stub')
    })

    it('показывает кнопку выхода из системы', () => {
      userStore.isAuthenticated = true
      wrapper = componentFactory()
      expect(findLogoutButton().exists()).toBe(true)
    })

    it('скрывает кнопку входа в систему', () => {
      userStore.isAuthenticated = true
      wrapper = componentFactory()
      expect(findLoginButton().exists()).toBe(false)
    })
  })

  describe('пользователь не прошёл аутентификацию', () => {
    it('показывает логотип', () => {
      userStore.isAuthenticated = false
      wrapper = componentFactory()
      expect(findLogo().exists()).toBe(true)
    })

    it('показывает кнопку входа в систему', () => {
      userStore.isAuthenticated = false
      wrapper = componentFactory()
      expect(findLoginButton().exists()).toBe(true)
    })

    it('скрывает кнопку перехода в аккаунт', () => {
      userStore.isAuthenticated = false
      wrapper = componentFactory()
      expect(findAccountButton().exists()).toBe(false)
    })

    it('скрывает кнопку выхода из системы', () => {
      userStore.isAuthenticated = false
      wrapper = componentFactory()
      expect(findLogoutButton().exists()).toBe(false)
    })
  })
})
