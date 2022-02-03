<template>
  <div>Панель администратора</div>
  <div
    v-for="user in users"
    :key="user.userId"
    class="user-card"
  >
    <div :class="user.isActive ? 'text-green-1' : 'text-red-1'">
      {{ getFormattedStatus(user.isActive) }}
    </div>
    <div>{{ user.username }}</div>
    <div>{{ getFormattedRole(user.roleId) }}</div>
    <div class="space-x-5">
      <button type="button">
        Редактировать
      </button>
      <button
        type="button"
        @click="deleteUser"
      >
        Удалить
      </button>
    </div>
  </div>
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
    users: []
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
      usersApi.loadUsers()
          .then(users => this.users = users)
          .catch(error => console.log(error))
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
     * Получить отображение роли пользователя
     * @param {boolean} isActive - статус
     * @returns {string}
     */
    getFormattedStatus(isActive) {
      return isActive ? 'Действующий' : 'Удалён'
    },

    /**
     * Удалить пользователя
     * @returns {void}
     */
    deleteUser() {

    }
  }
}
</script>

<style>
.user-card {
  @apply pt-8 px-6;
}
</style>
