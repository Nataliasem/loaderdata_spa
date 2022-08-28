import {
  shallowMount,
  flushPromises,
  enableAutoUnmount,
  VueWrapper
} from '@vue/test-utils'
// import AccountPage from '~/pages/account/account-page'
import { describe, expect, it, vi, afterEach } from 'vitest'
import { User } from '~/types/main'
import usersApi from '~/api/users'
enableAutoUnmount(afterEach)

const AccountPage = {
  template: `
  <div class="account-page">
   <div v-if="isLoading" class="ld-loader">Загрузка</div>
   
   <template v-else>
    <div v-if="emptyUser" class="data-error">
      Данные не загрузились. Попробуйте обновить страницу
    </div>

    <user-details v-else :user=":user" @update="updateUser" />
   </template>
  </div>
  `
}

const componentFactory = () => {
  return shallowMount(AccountPage)
}

const mockUser: User = {
  id: 'b0b54ee6-ad85-4437-8839-4436a1801bc9',
  username: 'username',
  roleId: 1,
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
  const findUserDetails = () => wrapper.findComponent({ name: 'UserDetails' })

  it('загружает данные пользователя', async () => {
    wrapper = componentFactory()

    usersApi.loadUser = vi
      .fn()
      .mockResolvedValue(mockUser)
      .mockRejectedValue(new Error('Пользователь не загрузился'))

    // отправляем запрос на загрузку
    // await flushPromises()
    await usersApi.loadUser('b0b54ee6-ad85-4437-8839-4436a1801bc9')

    expect(findLoader().exists()).toBe(true)
    expect(findDataError().exists()).toBe(false)
    expect(findUserDetails().exists()).toBe(false)

    // ошибка, данные не загрузились
    expect(findLoader().exists()).toBe(false)
    expect(findDataError().exists()).toBe(true)
    expect(findUserDetails().exists()).toBe(false)

    // данные успешно загрузились
    expect(findLoader().exists()).toBe(false)
    expect(findDataError().exists()).toBe(false)
    expect(findUserDetails().exists()).toBe(true)
  })
})
