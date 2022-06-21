<template>
  <!-- ЗАГОЛОВОК -->
  <div class="flex space-x-5 items-center justify-between pb-5 border-b border-b-grey-1 mb-5">
    <div class="text-size-18">Управление пользователями</div>
    <button type="button" class="lg-button-main">Создать</button>
  </div>

  <!-- ЗАГРУЗЧИК -->
  <div v-if="loading">Загрузка</div>

  <!-- КАРТОЧКИ ПОЛЬЗОВАТЕЛЕЙ -->
  <div v-else class="space-y-4">
    <div v-for="user in users" :key="user.id" class="user-card">
      <!-- СТАТУС -->
      <div :class="user.isActive ? 'text-green' : 'text-red'">
        {{ getFormattedStatus(user.isActive) }}
      </div>

      <!-- ИМЯ -->
      <div>{{ user.name }}</div>

      <!-- РОЛЬ -->
      <div>{{ getFormattedRole(user.roleId) }}</div>

      <div class="space-x-5">
        <!-- РЕДАКТИРОВАТЬ -->
        <router-link :to="`/admin/admin-user-edit?id=${user.id}`">
          Редактировать
        </router-link>

        <!-- УДАЛИТЬ -->
        <button
          type="button"
          :title="getDisabledRemovalReason(user)"
          :class="{
            'text-grey-1 cursor-not-allowed': checkIsRemovalDisable(user)
          }"
          :disabled="checkIsRemovalDisable(user)"
          @click="removeUser(user.id)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import usersApi from '~/api/users'
import { ROLES } from '~/constants'
import notify from '~/plugins/notify'
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { User } from '~/types/main'
import type { Ref } from 'vue'

export default defineComponent({
  middleware: ['auth', 'admin'],
  setup() {
    const store = useStore()

    const loading = ref(false)
    const saving = ref(false)

    const users: Ref<Array<User>> = ref([])

    onMounted(() => loadUsers())

    const loadUsers = (): void => {
      loading.value = true

      usersApi
        .loadUsersPaginated()
        .then((response: Array<User>) => (users.value = response))
        .catch((error: string) => notify.error(error))
        .finally(() => (loading.value = false))
    }

    const getFormattedRole = (roleId: number): string => {
      return roleId === 1 ? ROLES.ADMIN.NAME : ROLES.DEFAULT_USER.NAME
    }

    const getFormattedStatus = (isActive: boolean): string => {
      return isActive ? 'Действующий' : 'Удалён'
    }

    const checkIsRemovalDisable = (user: User): boolean => {
      return Boolean(getDisabledRemovalReason(user))
    }

    const getDisabledRemovalReason = (user: User): string => {
      if (saving.value) {
        return 'Нельзя удалить, пока идёт сохранение'
      }

      const currentUserId = store.state.user?.id
      if (user.id === currentUserId) {
        return 'Нельзя удалить самого себя'
      }

      if (!user.isActive) {
        return 'Нельзя удалить деактивированного пользователя'
      }

      return ''
    }

    const removeUser = (id: string) => {
      if (!id) {
        return
      }

      saving.value = true

      usersApi
        .removeUser(id)
        .then(() => notify.success('Пользователь удалён'))
        .catch((error: string) => notify.error(error))
        .finally(() => (saving.value = false))
    }

    return {
      loading,
      saving,
      users,
      getFormattedRole,
      getFormattedStatus,
      checkIsRemovalDisable,
      getDisabledRemovalReason,
      removeUser
    }
  }
})
</script>

<style>
.user-card {
  @apply py-8 px-6;
  background-color: #f7fafc;
}
</style>
