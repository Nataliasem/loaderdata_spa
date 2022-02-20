<template>
  <!-- ЗАГОЛОВОК -->
  <div>Панель администратора</div>

  <!-- ЗАГРУЗЧИК -->
  <div v-if="loading">
    Загрузка
  </div>

  <!-- КАРТОЧКИ ПОЛЬЗОВАТЕЛЕЙ -->
  <template v-else>
    <div
      v-for="user in users"
      :key="user.userId"
      class="user-card"
    >
      <!-- СТАТУС -->
      <div :class="user.isActive ? 'text-green-1' : 'text-red-1'">
        {{ getFormattedStatus(user.isActive) }}
      </div>

      <!-- ИМЯ -->
      <div>{{ user.username }}</div>

      <!-- РОЛЬ -->
      <div>{{ getFormattedRole(user.roleId) }}</div>

      <div class="space-x-5">
        <!-- РЕДАКТИРОВАТЬ -->
        <button type="button">
          Редактировать
        </button>

        <!-- УДАЛИТЬ -->
        <button
          type="button"
          :title="checkDeleteButtonDisabled(user) ? 'Нельзя удалить самого себя' : ''"
          :class="{ 'text-gray-3 cursor-not-allowed' : checkDeleteButtonDisabled(user)}"
          :disabled="checkDeleteButtonDisabled(user)"
          @click="deleteUser(user.userId)"
        >
          Удалить
        </button>
      </div>
    </div>
  </template>
</template>

<script>
import usersApi from '../../api/users.js'
import { ROLES } from '../../constants.js'

export default {
  name: 'admin-dashboard',
  middleware: ['auth', 'admin'],
  data: () => ({
    /**
     * Список пользователей
     * @type {Array}
     */
    users: [],

    /**
     * Флаг загрузки
     * @type {boolean}
     */
    loading: false,

    /**
     * Флаг сохранения
     * @type {boolean}
     */
    saving: false
  }),
  mounted() {
    this.loadUsers()
  },
  methods: {
    /**
     * Загрузить пользователей
     * @returns {void}
     */
    loadUsers() {
      this.loading = true

      usersApi.loadUsersPaginated()
          .then(users => this.users = users)
          .catch(error => console.log(error))
          .finally(() => (this.loading = false))
    },

    /**
     * Получить отображение роли пользователя
     * @param {number} roleId - идентификатор роли
     * @returns {string}
     */
    getFormattedRole(roleId) {
      return roleId === 1 ? ROLES.ADMIN.NAME : ROLES.DEFAULT_USER.NAME
    },

    /**
     * Получить отображение статуса пользователя
     * @param {boolean} isActive - статус
     * @returns {string}
     */
    getFormattedStatus(isActive) {
      return isActive ? 'Действующий' : 'Удалён'
    },

    /**
     * Проверить блокировку кнопки удаления
     * @param {object} user - пользователь
     * @returns {boolean}
     */
    checkDeleteButtonDisabled(user) {
      if (!user) {
        return false
      }

      // Нельзя удалить самого себя
      const currentUserId = this.$store.state.user && this.$store.state.user.userId

      // Нельзя удалить, если уже удалён (деактивирован)
      const isDeleted = user.isActive === false

      return user.userId === currentUserId || isDeleted || this.saving
    },

    /**
     * Удалить пользователя
     * @param {number} id - идентификатор пользователя
     * @returns {void}
     */
    deleteUser(id) {
      this.saving = true

      usersApi.deleteUser(id)
          .catch(error => console.log(error))
          .finally(() => (this.saving = false))
    }
  }
}
</script>

<style>
.user-card {
  @apply pt-8 px-6;
}
</style>
