<template>
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
</template>

<script lang="ts">
import UserPreview from '~/components/user/user-preview.vue'
import UserEdit from '~/components/user/user-edit.vue'
import { computed, onMounted, Ref, ref } from 'vue'
import { User } from '~/types/main'
import { useRoute } from 'vue-router'
import usersApi from '~/api/users'
import notify from '~/plugins/notify'

export default {
  name: 'AccountPage',
  components: {
    UserPreview,
    UserEdit
  },
  setup() {
    const route = useRoute()

    const id = computed(() => {
      return (route.query?.id || '').toString()
    })

    const isEditing = ref(false)

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

    const { isLoading, user, isUserEmpty, loadUser, updateUser } = useUser(
      id.value
    )

    return {
      id,
      isEditing,
      isLoading,
      user,
      isUserEmpty,
      loadUser,
      updateUser
    }
  }
}
</script>
