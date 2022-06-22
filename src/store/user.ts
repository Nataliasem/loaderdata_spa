import { Ref, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { RoleId, User } from '~/types/main'
import { StorageSerializers, useLocalStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  // Указать сериалайзер, чтобы начальным значением был null
  // https://vueuse.org/core/useStorage/#custom-serialization
  const user: Ref<User | null> = ref(
    useLocalStorage('userStore', null, {
      serializer: StorageSerializers.object
    })
  )

  const token = computed(() => {
    return user.value?.basicAuthToken || ''
  })

  const isAuthenticated = computed(() => {
    return Boolean(token.value)
  })

  const isAdmin = computed(() => {
    return (user.value?.roleId || '') === RoleId.Admin
  })

  const setUser = (newUser: User) => {
    user.value = newUser
  }

  return {
    user,
    token,
    isAuthenticated,
    isAdmin,
    setUser
  }
})
