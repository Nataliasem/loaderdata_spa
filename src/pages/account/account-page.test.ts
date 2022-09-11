import { shallowMount, enableAutoUnmount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '~/store/user'
import { describe, expect, it, vi, afterEach } from 'vitest'
import { User } from '~/types/main'
import AccountPage from '~/pages/account/account-page.vue'

enableAutoUnmount(afterEach)

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

const componentFactory = (props = {}) => {
  return shallowMount(AccountPage, {
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

describe('AccountPage.vue', () => {
  const userStore = useUserStore()

  let wrapper: VueWrapper

  it('корректно отображает страницу', () => {
    userStore.setUser(MOCK_USER)

    wrapper = componentFactory()

    const findUserEdit = () => wrapper.findComponent({ name: 'UserEdit' })

    expect(findUserEdit().exists()).toBe(true)
  })
})
