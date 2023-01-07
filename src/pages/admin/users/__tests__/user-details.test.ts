import {
  shallowMount,
  flushPromises,
  enableAutoUnmount,
  VueWrapper
} from '@vue/test-utils'

import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest'
import { User } from '~/types/main'
import UserDetails from '~/pages/admin/users/user-details.vue'
import usersApi from '~/api/users'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

const TEST_USER_ID = '733da1f7-34ec-4870-9123-f1217bc25d68'

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

enableAutoUnmount(afterEach)

const componentFactory = () => {
  return shallowMount(UserDetails)
}

describe('AccountPage.vue', () => {
  const router = createRouterMock()

  router.setQuery({
    id: TEST_USER_ID
  })

  beforeEach(() => {
    injectRouterMock(router)
  })

  let wrapper: VueWrapper

  const findLoader = () => wrapper.find('.ld-loader')
  const findDataError = () => wrapper.find('.ld-data-error')
  const findUserEdit = () => wrapper.findComponent({ name: 'UserEdit' })

  it('корректно отображает страницу во время загрузки данных', () => {
    wrapper = componentFactory()

    expect(findLoader().exists()).toBe(true)
    expect(findDataError().exists()).toBe(false)
    expect(findUserEdit().exists()).toBe(false)
  })

  it('корректно отображает страницу после успешной загрузки данных', async () => {
    usersApi.loadUser = vi.fn().mockResolvedValueOnce(MOCK_USER)

    wrapper = componentFactory()

    await flushPromises()

    expect(usersApi.loadUser).toHaveBeenCalledTimes(1)
    expect(usersApi.loadUser).toHaveBeenCalledWith(TEST_USER_ID)

    expect(findLoader().exists()).toBe(false)
    expect(findDataError().exists()).toBe(false)
    expect(findUserEdit().exists()).toBe(true)
  })

  it('корректно отображает страницу в случае ошибки при загрузке', async () => {
    usersApi.loadUser = vi
      .fn()
      .mockRejectedValueOnce(new Error('Пользователь не загрузился'))

    wrapper = componentFactory()

    await flushPromises()

    expect(usersApi.loadUser).toHaveBeenCalledTimes(1)
    expect(usersApi.loadUser).toHaveBeenCalledWith(TEST_USER_ID)

    expect(findLoader().exists()).toBe(false)
    expect(findDataError().exists()).toBe(true)
    expect(findUserEdit().exists()).toBe(false)
  })
})
