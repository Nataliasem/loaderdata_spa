<template>
  <div class="admin-user-edit">
    <!-- ЗАГОЛОВОК СТРНИЦЫ -->
    <div class="text-size-18 font-bold mb-4">
      {{ title }}
    </div>

    <!-- ЛОАДЕР -->
    <div v-if="loading">
      Загрузка
    </div>

    <!-- ПОЛЬЗОВАТЕЛЬ -->
    <form
      v-else-if="loading === false && user"
      name="edit-user"
      class="user-form"
      @submit.prevent="saveUser"
    >
      <!-- ИМЯ -->
      <input
        id="edit-name"
        v-model="user.name"
        name="name"
        placeholder="Имя пользователя"
        class="app-input"
      />

      <!-- ПАРОЛЬ -->
      <input
        id="register-password"
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Пароль"
        class="app-input"
        autocomplete="password"
      />

      <!-- РОЛЬ -->
      <select
        v-model="user.roleId"
        name="edit-role"
        class="app-input"
      >
        <option
          v-for="role in roleOptions"
          :key="role.id"
          :value="role.id"
        >
          {{ role.name }}
        </option>
      </select>

      <!-- СОХРАНИТЬ -->
      <button
        type="submit"
        :disabled="saving"
        class="submit-button"
      >
        Сохранить
      </button>
    </form>
    <div v-else>
      Данные о пользователе недоступны
    </div>
  </div>
</template>

<script>
import usersApi from '~/api/users.js'
import { ROLES } from '~/constants.js'
import notify from '~/plugins/notify.js';

export default {
  name: 'admin-user-edit',
  middleware: ['auth', 'admin'],
  data: () => ({
    loading: true,
    saving: false,
    userModel: {
      name: '',
      password: '',
      roleId: null
    },
    user: null,
    roleOptions: [
      {id: ROLES.ADMIN.ID, name: ROLES.ADMIN.NAME},
      {id: ROLES.DEFAULT_USER.ID, name: ROLES.DEFAULT_USER.NAME}
    ]
  }),
  computed: {
    /**
     * Идентификатор пользователя
     * @type {string}
     */
    id() {
      return this.$route.query.id || ''
    },

    title() {
      return this.id ? 'Редактировать пользователя' : 'Создать пользователя'
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      if(!this.id) {
        this.user = this.userModel
        this.loading = false
        return
      }

      this.loading = true

      usersApi.loadUser(this.id)
          .then(user => this.user = user)
          .catch(error => notify.error(error))
          .finally(() => (this.loading = false))
    },

    saveUser() {
      this.saving = true

      this.id
          ? usersApi.updateUser(this.user)
          : usersApi.createUser(this.user)
              .then(user => (this.user = user))
              .then(() => notify.success('Данные сохранены'))
              .catch(error => notify.error(error))
              .finally(() => (this.saving = false))
    }
  }
}
</script>

<style>
.admin-user-edit .user-form {
  max-width: 600px;
}

.admin-user-edit .app-input {
  border: 1px solid #DBE2EA;
  border-radius: 3px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
}

.admin-user-edit .app-input:focus {
  outline: none;
  border-color: #0880AE;
  border-width: 2px;
}

.admin-user-edit .submit-button {
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0880AE;
  color: white;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.admin-user-edit .submit-button:disabled {
  background-color: #DBE2EA;
  color: #b1b5bf;
}
</style>
