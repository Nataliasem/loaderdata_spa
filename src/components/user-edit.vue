<template>
  <div class="admin-user-edit">
    <div>
      <img :src="avatarData" />
    </div>

    <pre>{{ avatar }}</pre>

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
      <button type="submit" :disabled="saving" class="ld-button-main">
        Сохранить
      </button>
    </form>
    <div v-else>Данные о пользователе недоступны</div>
  </div>
</template>

<script lang="ts">
import usersApi from '~/api/users'
import { ROLES } from '~/constants'
import notify from '~/plugins/notify'
import { ref, computed } from 'vue'

export default {
  name: 'AdminUserEdit',
  middleware: ['auth', 'admin'],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const roleOptions = ref([
      { id: ROLES.ADMIN.ID, name: ROLES.ADMIN.NAME },
      { id: ROLES.DEFAULT_USER.ID, name: ROLES.DEFAULT_USER.NAME }
    ])

    const loading = ref(true)
    const saving = ref(false)

    const userModel = {
      name: '',
      password: '',
      roleId: null
    }

    const user = ref(userModel)
    const avatar = ref(null)

    const avatarData = computed(() => {
      return `data:image/png;base64, ${avatar.value.avatarData}`
    })

    const id = computed(() => {
      return props.user?.id || ''
    })

    const title = computed(() => {
      return id.value ? 'Редактировать пользователя' : 'Создать пользователя'
    })

    const loadUser = () => {
      if (!id.value) {
        loading.value = false
        return
      }

      loading.value = true

      usersApi
        .loadAvatar(id.value)
        .then((response) => (avatar.value = response))
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

    loadUser()

    return {
      loading,
      saving,
      roleOptions,
      avatar,
      avatarData,
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
</style>
