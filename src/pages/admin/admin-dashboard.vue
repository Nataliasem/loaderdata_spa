<template>
  <!-- ЗАГОЛОВОК -->
  <div class="flex space-x-5">
    <div>Пользователи</div>
    <router-link to="/admin/admin-user-edit"> Создать </router-link>
  </div>

  <!-- ЗАГРУЗЧИК -->
  <div v-if="loading">Загрузка</div>

  <!-- КАРТОЧКИ ПОЛЬЗОВАТЕЛЕЙ -->
  <template v-else>
    <div v-for="user in users" :key="user.id" class="user-card">
      <!-- СТАТУС -->
      <div :class="user.isActive ? 'text-green-1' : 'text-red-1'">
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
          :title="checkRemoval(user).reason"
          :class="{
            'text-gray-3 cursor-not-allowed': !checkRemoval(user).available
          }"
          :disabled="!checkRemoval(user).available"
          @click="deleteUser(user.id)"
        >
          Удалить
        </button>
      </div>
    </div>
  </template>
</template>

<script>
import usersApi from '~/api/users.js'
import { ROLES } from '~/constants.ts'
import notify from '~/plugins/notify.js'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AdminDashboard',
  middleware: ['auth', 'admin'],
  setup() {
    const store = useStore()

    const loading = ref(false)
    const saving = ref(false)

    const users = ref([])

    onMounted(() => loadUsers())

    const loadUsers = () => {
      loading.value = true

      usersApi
        .loadUsersPaginated()
        .then((response) => (users.value = response))
        .catch((error) => notify.error(error))
        .finally(() => (loading.value = false))
    }

    const getFormattedRole = (roleId) => {
      return roleId === 1 ? ROLES.ADMIN.NAME : ROLES.DEFAULT_USER.NAME
    }

    const getFormattedStatus = (isActive) => {
      return isActive ? 'Действующий' : 'Удалён'
    }

    const checkRemoval = (user) => {
      const removal = {
        available: true,
        reason: ''
      }

      if (!user) {
        removal.available = false
        return removal
      }

      const currentUserId = store.state.user?.id
      const deleteSelf = user.id === currentUserId

      const isDeleted = user.isActive === false

      if (deleteSelf) {
        removal.available = false
        removal.reason = 'Нельзя удалить самого себя'
      }

      if (isDeleted) {
        removal.available = false
        removal.reason = 'Нельзя удалить деактивированного пользователя'
      }

      if (saving.value) {
        removal.available = false
        removal.reason = 'Нельзя удалить, пока идёт сохранение'
      }

      return removal
    }

    const deleteUser = (id) => {
      if (!id) {
        return
      }

      this.saving = true

      usersApi
        .deleteUser(id)
        .then(() => notify.success('Пользователь удалён'))
        .catch((error) => notify.error(error))
        .finally(() => (this.saving = false))
    }

    return {
      loading,
      saving,
      users,
      getFormattedRole,
      getFormattedStatus,
      checkRemoval,
      deleteUser
    }
  }
}
</script>

<style>
.user-card {
  @apply pt-8 px-6;
}
</style>
