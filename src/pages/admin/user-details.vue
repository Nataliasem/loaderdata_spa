<template>
  <div class="user-details">
    <div v-if="isLoading" class="ld-loader">Загрузка</div>

    <div v-else-if="isUserEmpty" class="ld-data-error">
      Ошибка при загрузке данных пользователя. Попробуйте обновить страницу
    </div>

    <template v-else>
      <user-edit :user="user" @update="updateUser" />
      <div class="user-activities">Компонент активности пользователя</div>
    </template>
  </div>
</template>

<script lang="ts">
import UserEdit from '~/components/user-edit.vue'
import { computed, ref, Ref, onMounted } from 'vue'
import { User, UserInfo } from '~/types/main'
import { useRoute } from 'vue-router'
import usersApi from '~/api/users'
import notify from '~/plugins/notify'

export default {
  name: 'UserDetails',
  components: {
    UserEdit
  },
  middleware: ['auth', 'admin'],
  setup() {
    const route = useRoute()

    const id = computed(() => {
      return (route.query?.id || '').toString()
    })

    const isLoading = ref(true)

    const user: Ref<User | null> = ref(null)

    const isUserEmpty = computed(() => {
      return !user.value
    })

    const loadUser = () => {
      if (!id.value) {
        return
      }

      isLoading.value = true

      usersApi
        .loadUser(id.value)
        .then((userResponse) => (user.value = userResponse))
        .catch((error) => notify.error(error))
        .finally(() => (isLoading.value = false))
    }

    const updateUser = (user: UserInfo) => {
      if (!user) {
        return
      }

      usersApi
        .updateUser(user)
        .then(() => notify.success('Пользователь обновлён'))
        .catch((error) => notify.error(error))
    }

    onMounted(() => {
      loadUser()
    })

    return {
      id,
      user,
      isLoading,
      isUserEmpty,
      updateUser
    }
  }
}
</script>

<style>
.user-details {
  @apply flex space-x-8;
}

.user-activities {
  @apply border border-grey-3;
  @apply bg-white;
  @apply py-10 pl-16 w-full h-screen;
  box-shadow: 0 2px 10px 0 #00000014;
}
</style>
