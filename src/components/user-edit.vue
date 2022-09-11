<template>
  <div class="admin-user-edit">
    <!-- ЛОАДЕР -->
    <div v-if="loading">Загрузка</div>

    <!-- ОШИБКА -->
    <div v-else-if="!user">Данные о пользователе недоступны</div>

    <!-- ПОЛЬЗОВАТЕЛЬ -->
    <div v-else class="flex items-center space-x-10">
      <img class="rounded-full w-2/12" alt="Аватар" :src="avatarSrc" />

      <div class="space-y-5">
        <!-- ИМЯ -->
        <div class="flex space-x-4 items-center">
          <span>Имя:</span>

          <input
            v-if="isEditingName"
            id="edit-name"
            v-model="userLocal.name"
            class="app-input"
            name="name"
            placeholder="Имя пользователя"
          />

          <div v-else class="flex space-x-2">
            <span>{{ userLocal.name }}</span>
            <span
              class="cursor-pointer text-blue-2"
              @click="isEditingName = true"
            >
              <icon-edit />
            </span>
          </div>
        </div>

        <!-- РОЛЬ -->
        <div class="flex space-x-4 items-center">
          <span>Роль:</span>

          <select
            v-if="isEditingRole"
            v-model="userLocal.roleId"
            name="edit-role"
            class="app-input"
          >
            <option v-for="role in roleOptions" :key="role.id" :value="role.id">
              {{ role.name }}
            </option>
          </select>

          <div v-else class="flex space-x-2">
            <span>{{ userLocal.roleId }}</span>
            <span
              class="cursor-pointer text-blue-2"
              @click="isEditingRole = true"
            >
              <icon-edit />
            </span>
          </div>
        </div>

        <!-- СОХРАНИТЬ -->
        <button
          v-if="isEditingName || isEditingRole"
          type="button"
          :disabled="saving"
          class="ld-button-main"
          @click="updateUser"
        >
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import usersApi from '~/api/users'
import { ROLES } from '~/constants'
import notify from '~/plugins/notify'
import { ref, computed, defineAsyncComponent, onMounted, Ref } from 'vue'
import { User, Avatar } from '~/types/main'

const IconEdit = defineAsyncComponent(
  () => import('~/components/ui/icons/icon-edit.vue')
)

export default {
  name: 'AdminUserEdit',
  components: {
    IconEdit
  },
  middleware: ['auth', 'admin'],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const roleOptions = ref([
      { id: ROLES.ADMIN.ID, name: ROLES.ADMIN.NAME },
      { id: ROLES.DEFAULT_USER.ID, name: ROLES.DEFAULT_USER.NAME }
    ])

    const isEditingName = ref(false)
    const isEditingRole = ref(false)

    const userLocal = ref({ ...props.user })

    // Загрузить аватар
    const loading = ref(true)

    const avatar: Ref<Avatar | null> = ref(null)
    const avatarSrc = computed(() => {
      const data = avatar.value?.avatarData || ''

      return data ? `data:image/png;base64, ${data}` : '/public/favicon'
    })

    const id = computed(() => {
      return props.user?.id || ''
    })

    const loadAvatar = () => {
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

    // Обновить пользователя
    const saving = ref(false)
    const updateUser = () => {
      saving.value = true

      usersApi
        .updateUser(userLocal.value)
        .then((response) => (userLocal.value = response))
        .then(() => notify.success('Данные сохранены'))
        .then(() => emit('update', userLocal))
        .catch((error) => notify.error(error))
        .finally(() => (saving.value = false))
    }

    onMounted(() => {
      loadAvatar()
    })

    return {
      isEditingName,
      isEditingRole,
      loading,
      saving,
      roleOptions,
      userLocal,
      avatar,
      avatarSrc,
      updateUser
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
  font-size: 16px;
}

.admin-user-edit .app-input:focus {
  outline: none;
  border-color: #0880ae;
  border-width: 2px;
}
</style>
