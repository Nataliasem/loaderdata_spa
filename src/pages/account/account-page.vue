<template>
  <div class="account-page">
    <user-edit :user="user" @update="updateUser" />
  </div>
</template>

<script lang="ts">
import UserEdit from '~/components/user-edit.vue'
import { computed, ComputedRef } from 'vue'
import { User } from '~/types/main'
import { useUserStore } from '~/store/user'
export default {
  name: 'AccountPage',
  components: {
    UserEdit
  },
  middleware: ['auth'],
  setup() {
    const userStore = useUserStore()

    const user: ComputedRef<User | null> = computed(() => {
      return userStore.user
    })

    const updateUser = (user: User) => {
      if (!user) {
        return
      }

      userStore.setUser(user)
    }

    return {
      user,
      updateUser
    }
  }
}
</script>
