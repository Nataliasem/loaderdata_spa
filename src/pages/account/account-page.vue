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

<style>
.account-page {
  @apply flex space-x-8;
}
.user-notifications {
  @apply border border-grey-3;
  @apply bg-white;
  @apply py-10 pl-16 w-full h-screen;
  box-shadow: 0 2px 10px 0 #00000014;
}
</style>
