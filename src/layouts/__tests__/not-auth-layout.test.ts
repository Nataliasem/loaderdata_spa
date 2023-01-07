import { shallowMount, enableAutoUnmount } from '@vue/test-utils'
import NotAuthLayout from '~/layouts/not-auth-layout.vue'
import { describe, expect, it, afterEach } from 'vitest'

enableAutoUnmount(afterEach)

describe('NotAuthLayout.vue', () => {
  it('показывает навбар', () => {
    const wrapper = shallowMount(NotAuthLayout, {
      global: {
        stubs: {
          LdNavbar: true
        }
      }
    })

    expect(wrapper.findComponent({ name: 'LdNavbar' }).exists()).toBe(true)
  })
})
