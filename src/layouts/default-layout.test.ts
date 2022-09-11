import { shallowMount, enableAutoUnmount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '~/store/user'
import DefaultLayout from '~/layouts/default-layout.vue'
import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest'
import { User } from '~/types/main'

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

const MOCK_USER: User = {
  id: '733da1f7-34ec-4870-9123-f1217bc25d68',
  name: 'username',
  roleId: 1,
  avatarId: 1,
  isActive: true,
  basicAuthToken: 'basicAuthToken',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt'
}

describe('defaultLayout.vue', () => {
  const userStore = useUserStore()

  let wrapper: VueWrapper

  const findLdNavbar = () => wrapper.findComponent({ name: 'LdNavbar' })
  const findLdSidebar = () => wrapper.findComponent({ name: 'LdSidebar' })

  describe('пользователь прошёл аутентификацию', () => {
    beforeEach(() => {
      userStore.user = MOCK_USER
    })

    it('показывает навбар', () => {
      wrapper = componentFactory()
      expect(findLdNavbar().exists()).toBe(true)
    })

    it('показывает сайдбар', () => {
      wrapper = componentFactory()
      expect(findLdSidebar().exists()).toBe(true)
    })
  })

  describe('пользователь не прошёл аутентификацию', () => {
    beforeEach(() => {
      userStore.user = null
    })

    it('показывает навбар', () => {
      wrapper = componentFactory()
      expect(findLdNavbar().exists()).toBe(true)
    })

    it('скрывает сайдбар', () => {
      wrapper = componentFactory()
      expect(findLdSidebar().exists()).toBe(false)
    })
  })
})
