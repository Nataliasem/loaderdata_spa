import {
  shallowMount,
  flushPromises,
  enableAutoUnmount,
  VueWrapper
} from '@vue/test-utils'

import { describe, expect, it, vi, afterEach } from 'vitest'
import { User } from '~/types/main'
import AccountPage from '~/pages/account/account-page.vue'
import usersApi from '~/api/users'

enableAutoUnmount(afterEach)

const componentFactory = () => {
  return shallowMount(AccountPage)
}

const mockUser: User = {
  id: 'b0b54ee6-ad85-4437-8839-4436a1801bc9',
  name: 'username',
  roleId: 1,
  avatarId: 1,
  isActive: true,
  basicAuthToken: 'basicAuthToken',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt'
}

describe('AccountPage.vue', () => {
  let wrapper: VueWrapper

  const findLoader = () => wrapper.find('.ld-loader')
  const findDataError = () => wrapper.find('.data-error')
  const findUserEdit = () => wrapper.findComponent({ name: 'UserEdit' })
  const findUserPreview = () => wrapper.findComponent({ name: 'UserPreview' })

  usersApi.loadUser = vi
    .fn()
    .mockResolvedValueOnce(mockUser)
    .mockRejectedValueOnce(new Error('Пользователь не загрузился'))

  it('загружает данные пользователя', async () => {
    wrapper = componentFactory()

    // загружаются
    expect(findLoader().exists()).toBe(true)
    expect(findDataError().exists()).toBe(false)
    expect(findUserEdit().exists()).toBe(false)
    expect(findUserPreview().exists()).toBe(false)

    // ждём первый мок - успех
    await flushPromises()

    expect(usersApi.loadUser).toHaveBeenCalled()
    expect(usersApi.loadUser).toHaveBeenCalledTimes(1)

    expect(findLoader().exists()).toBe(false)
    expect(findDataError().exists()).toBe(false)
    expect(findUserEdit().exists()).toBe(false)
    expect(findUserPreview().exists()).toBe(true)
  })

  it('показывает ошибку при загрузке данных пользователя', async () => {
    wrapper = componentFactory()

    // загружаются
    expect(findLoader().exists()).toBe(true)
    expect(findDataError().exists()).toBe(false)
    expect(findUserEdit().exists()).toBe(false)
    expect(findUserPreview().exists()).toBe(false)

    // ждём второй мок - неудача
    await flushPromises()

    console.log(wrapper.html())

    expect(usersApi.loadUser).toHaveBeenCalled()
    expect(usersApi.loadUser).toHaveBeenCalledTimes(2) // mockClear

    expect(findLoader().exists()).toBe(false)
    expect(findDataError().exists()).toBe(true)
    expect(findUserEdit().exists()).toBe(false)
    expect(findUserPreview().exists()).toBe(false)
  })
})
