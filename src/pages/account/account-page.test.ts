import {
  shallowMount,
  flushPromises,
  enableAutoUnmount,
  VueWrapper
} from '@vue/test-utils'

import { describe, expect, it, vi, afterEach } from 'vitest'

// Типы
import { User } from '~/types/main'

// Компоненты
// import AccountPage from '~/pages/account/account-page'
import UserPreview from '~/components/user/user-preview.vue'
import UserEdit from '~/components/user/user-edit.vue'
import { ref, computed, Ref, onMounted } from 'vue'

// API и утилиты
import usersApi from '~/api/users'
import notify from '~/plugins/notify'

enableAutoUnmount(afterEach)

const AccountPage = {
  components: {
    UserPreview,
    UserEdit
  },
  setup() {
    const isEditing = ref(false)

    // id пользователя из стора
    const id = '4905bc62-cfdb-40e7-b9b8-15de8b83f888'

    // composable
    const useUser = (id: string) => {
      const isLoading = ref(true)
      const user: Ref<User | null> = ref(null)

      const isUserEmpty = computed(() => {
        return !user.value
      })

      const loadUser = () => {
        isLoading.value = true

        usersApi
          .loadUser(id)
          .then((userResponse) => (user.value = userResponse))
          .catch((error) => notify.error(error))
          .finally(() => (isLoading.value = false))
      }

      const updateUser = () => {
        return true
      }

      onMounted(() => {
        loadUser()
      })

      return {
        isLoading,
        user,
        isUserEmpty,
        loadUser,
        updateUser
      }
    }

    const { isLoading, user, isUserEmpty, updateUser } = useUser(id)

    return {
      isLoading,
      user,
      isUserEmpty,
      updateUser,
      isEditing
    }
  },
  template: `
    <div class="account-page">
    <div v-if="isLoading" class="ld-loader">Загрузка</div>

    <template v-else>
      <div v-if="isUserEmpty" class="data-error">
        Данные не загрузились. Попробуйте обновить страницу
      </div>

      <user-edit v-else-if="isEditing" :user="user" @update="updateUser" />
      <user-preview v-else :user="user" @update="updateUser" />
    </template>
    </div>
  `
}

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

  it('загружает данные пользователя', async () => {
    wrapper = componentFactory()

    usersApi.loadUser = vi
      .fn()
      .mockResolvedValue(mockUser)
      .mockRejectedValue(new Error('Пользователь не загрузился'))

    // загружаются
    expect(findLoader().exists()).toBe(true)
    expect(findDataError().exists()).toBe(false)
    expect(findUserEdit().exists()).toBe(false)
    expect(findUserPreview().exists()).toBe(false)

    // ждём первый мок - успех
    // await flushPromises()
    //
    // expect(findLoader().exists()).toBe(false)
    // expect(findDataError().exists()).toBe(false)
    // expect(findUserEdit().exists()).toBe(false)
    // expect(findUserPreview().exists()).toBe(true)

    // ждём второй мок - неудача
    // await flushPromises()
    //
    // expect(findLoader().exists()).toBe(false)
    // expect(findDataError().exists()).toBe(true)
    // expect(findUserEdit().exists()).toBe(false)
    // expect(findUserPreview().exists()).toBe(false)
  })
})
