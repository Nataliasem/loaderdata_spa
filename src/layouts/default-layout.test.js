import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '~/store/user'
import defaultLayout from '~/layouts/default-layout.vue'
import { describe, expect, test, vi } from 'vitest'

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
  test('должен быть экземпляром Vue', () => {
    expect(defaultLayout).toBeDefined()
  })

  test('должен показывать навбар', () => {
    const wrapper = mount(defaultLayout, mountingOptions)

    // expect(wrapper.exists()).toBe(true)

    console.log(wrapper.html())

    const LdNavbar = wrapper.findComponent({ name: 'LdNavbar' })

    expect(LdNavbar.exists()).toBe(true)
  })

  test('должен показывать сайдбар, если пользователь аутентифицирован', () => {
    const wrapper = mount(defaultLayout, mountingOptions)
    userStore.isAuthenticated = true

    console.log(wrapper.html())
  })

  test('должен скрывать сайдбар, если пользователь не прошёл аутентификацию', () => {
    expect(defaultLayout).toBeDefined()
  })
})
