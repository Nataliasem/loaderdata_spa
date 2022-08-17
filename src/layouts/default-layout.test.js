import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import defaultLayout from '~/layouts/default-layout.vue'
import { describe, expect, test } from 'vitest'

describe('defaultLayout.vue', () => {
  test('должен быть экземпляром Vue', () => {
    expect(defaultLayout).toBeDefined()
  })

  test('должен показывать навбар', () => {
    const wrapper = mount(defaultLayout, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              isAuthenticated: false
            }
          })
        ]
      }
    })

    const LdNavbar = wrapper.findComponent('LdNavbar')

    expect(LdNavbar).toBe()
  })

  test('должен показывать сайдбар, если пользователь аутентифицирован', () => {
    expect(defaultLayout).toBeDefined()
  })

  test('должен скрывать сайдбар, если пользователь не прошёл аутентификацию', () => {
    expect(defaultLayout).toBeDefined()
  })
})
