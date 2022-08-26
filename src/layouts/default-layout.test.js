import { shallowMount, enableAutoUnmount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '~/store/user'
import DefaultLayout from '~/layouts/default-layout.vue'
import { describe, expect, it, vi, afterEach } from 'vitest'

enableAutoUnmount(afterEach)

const componentFactory = (props = {}) => {
  return shallowMount(DefaultLayout, {
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

const userStore = useUserStore()

describe('defaultLayout.vue', () => {
  let wrapper

  const findLdNavbar = () => wrapper.findComponent({ name: 'LdNavbar' })
  const findLdSidebar = () => wrapper.findComponent({ name: 'LdSidebar' })

  describe('пользователь прошёл аутентификацию', () => {
    it('показывает навбар', () => {
      userStore.isAuthenticated = true
      wrapper = componentFactory()
      expect(findLdNavbar().exists()).toBe(true)
    })

    it('показывает сайдбар', () => {
      userStore.isAuthenticated = true
      wrapper = componentFactory()
      expect(findLdSidebar().exists()).toBe(true)
    })
  })

  describe('пользователь не прошёл аутентификацию', () => {
    it('показывает навбар', () => {
      userStore.isAuthenticated = false
      wrapper = componentFactory()
      expect(findLdNavbar().exists()).toBe(true)
    })

    it('скрывает сайдбар', () => {
      userStore.isAuthenticated = false
      wrapper = componentFactory()
      expect(findLdSidebar().exists()).toBe(false)
    })
  })
})
