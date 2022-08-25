import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '~/store/user'
import defaultLayout from '~/layouts/default-layout.vue'
import { describe, expect, it, vi } from 'vitest'

const componentFactory = (props = {}) => {
  return mount(defaultLayout, {
    ...mountingOptions,
    props: props
  })
}

const mountingOptions = {
  global: {
    stubs: {
      LdNavbar: true,
      LdSidebar: true
    },
    plugins: [
      createTestingPinia({
        createSpy: vi.fn
      })
    ]
  }
}

const userStore = useUserStore()

describe('defaultLayout.vue', () => {
  describe('пользователь прошёл аутентифицирован', () => {
    it('показывает навбар', () => {
      userStore.isAuthenticated = true
      const wrapper = componentFactory()
      expect(wrapper.findComponent({ name: 'LdNavbar' }).exists()).toBe(true)
    })

    it('показывает сайдбар', () => {
      userStore.isAuthenticated = true
      const wrapper = componentFactory()
      expect(wrapper.findComponent({ name: 'LdSidebar' }).exists()).toBe(true)
    })
  })

  describe('пользователь не прошёл аутентификацию', () => {
    it('показывает навбар', () => {
      userStore.isAuthenticated = false
      const wrapper = componentFactory()
      expect(wrapper.findComponent({ name: 'LdNavbar' }).exists()).toBe(true)
    })

    it('скрывает сайдбар', () => {
      userStore.isAuthenticated = false
      const wrapper = componentFactory()
      expect(wrapper.findComponent({ name: 'LdSidebar' }).exists()).toBe(false)
    })
  })
})
