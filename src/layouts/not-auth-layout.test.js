import { mount } from '@vue/test-utils'
import NotAuthLayout from '~/layouts/not-auth-layout.vue'
import { describe, expect, it } from 'vitest'

describe('defaultLayout.vue', () => {
  it('показывает навбар', () => {
    const wrapper = mount(NotAuthLayout, {
      global: {
        stubs: {
          LdNavbar: true
        }
      }
    })
    expect(wrapper.findComponent({ name: 'LdNavbar' }).exists()).toBe(true)
  })
})
