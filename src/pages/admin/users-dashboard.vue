<template>
  <!-- ЗАГОЛОВОК -->
  <div
    class="flex space-x-5 items-center justify-between pb-5 border-b border-b-grey-1 mb-5"
  >
    <div class="text-size-18 text-blue-2 font-bold">
      Управление пользователями
    </div>
    <button type="button" class="ld-button-main">Создать</button>
  </div>

  <!-- ЗАГРУЗЧИК -->
  <div v-if="loading">Загрузка</div>

  <!-- КАРТОЧКИ ПОЛЬЗОВАТЕЛЕЙ -->
  <div v-else class="space-y-4">
    <div v-for="user in users" :key="user.id" class="user-card">
      <div class="flex items-center space-x-6">
        <!-- СТАТУС -->
        <div :class="user.isActive ? 'ld-label-green' : 'ld-label-red'">
          {{ getFormattedStatus(user.isActive) }}
        </div>

        <!-- БЛОКИРОВАТЬ/РАЗБЛОКИРОВАТЬ -->
        <button v-if="user.isActive" type="button" title="Блокировать">
          <icon-lock class="text-red" />
        </button>
        <button v-else title="Разблокировать">
          <icon-unlock class="text-yellow" />
        </button>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import usersApi from '~/api/users'
import { ROLES } from '~/constants'
import notify from '~/plugins/notify'
import { defineComponent, ref, onMounted, defineAsyncComponent } from 'vue'
import { User } from '~/types/main'
import type { Ref } from 'vue'

export default defineComponent({
  components: {
    IconLock: defineAsyncComponent(
      () => import('~/components/ui/icons/icon-lock.vue')
    ),
    IconUnlock: defineAsyncComponent(
      () => import('~/components/ui/icons/icon-unlock.vue')
    )
  },
  middleware: ['auth', 'admin'],
  setup() {
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
      return isActive ? 'Активный' : 'Заблокирован'
    }

    return {
      loading,
      saving,
      users,
      getFormattedRole,
      getFormattedStatus
    }
  }
})
</script>

<style>
.user-card {
  @apply py-8 px-6 space-y-4;
  background-color: #f7fafc;
}
</style>
