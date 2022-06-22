import { Ref, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { User } from '~/types/main'

export const useUserStore = defineStore('user', () => {
  const user: Ref<User | null> = ref(null)

  const token = computed(() => {
    return (user.value && user.value.basicAuthToken) || ''
  })

  const isAuthenticated = computed(() => {
    return Boolean(token.value)
  })

  const setUser = (newUser: User) => {
    user.value = newUser
  }

  return {
    user,
    token,
    isAuthenticated,
    setUser
  }
})
