<template>
  <div class="admin-user-edit">
    <!-- ЗАГОЛОВОК СТРНИЦЫ -->
    <div class="text-size-18 font-bold mb-4">
      {{ title }}
    </div>

    <!-- ЛОАДЕР -->
    <div v-if="loading">Загрузка</div>

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
      <select v-model="user.roleId" name="edit-role" class="app-input">
        <option v-for="role in roleOptions" :key="role.id" :value="role.id">
          {{ role.name }}
        </option>
      </select>

      <!-- СОХРАНИТЬ -->
      <button type="submit" :disabled="saving" class="submit-button">
        Сохранить
      </button>
    </form>
    <div v-else>Данные о пользователе недоступны</div>
  </div>
</template>

<script>
import usersApi from '~/api/users.ts'
import { ROLES } from '~/constants.ts'
import notify from '~/plugins/notify.js'
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'AdminUserEdit',
  middleware: ['auth', 'admin'],
  setup() {
    const route = useRoute()

    const roleOptions = ref([
      { id: ROLES.ADMIN.ID, name: ROLES.ADMIN.NAME },
      { id: ROLES.DEFAULT_USER.ID, name: ROLES.DEFAULT_USER.NAME }
    ])

    const loading = ref(true)
    const saving = ref(false)

    const user = ref(null)
    const userModel = reactive({
      name: '',
      password: '',
      roleId: null
    })

    const id = computed(() => {
      return route.query.id || ''
    })

    const title = computed(() => {
      return id.value ? 'Редактировать пользователя' : 'Создать пользователя'
    })

    onMounted(() => {
      loadUser()
    })

    const loadUser = () => {
      if (!id.value) {
        user.value = userModel
        loading.value = false
        return
      }

      loading.value = true

      usersApi
        .loadUser(id.value)
        .then((response) => (user.value = response))
        .catch((error) => notify.error(error))
        .finally(() => (loading.value = false))
    }

    const saveUser = () => {
      saving.value = true

      Promise.resolve()
        .then(() => {
          return id.value
            ? usersApi.updateUser(user.value)
            : usersApi.createUser(user.value)
        })
        .then((response) => (user.value = response))
        .then(() => notify.success('Данные сохранены'))
        .catch((error) => notify.error(error))
        .finally(() => (saving.value = false))
    }

    return {
      loading,
      saving,
      roleOptions,
      title,
      user,
      saveUser
    }
  }
}
</script>

<style>
.admin-user-edit .user-form {
  max-width: 600px;
}

.admin-user-edit .app-input {
  border: 1px solid #dbe2ea;
  border-radius: 3px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
}

.admin-user-edit .app-input:focus {
  outline: none;
  border-color: #0880ae;
  border-width: 2px;
}

.admin-user-edit .submit-button {
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0880ae;
  color: white;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.admin-user-edit .submit-button:disabled {
  background-color: #dbe2ea;
  color: #b1b5bf;
}
</style>
