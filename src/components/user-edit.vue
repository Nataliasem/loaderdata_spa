<template>
  <div class="user-edit">
    <!-- ЛОАДЕР -->
    <div v-if="loading">Загрузка</div>

    <!-- ОШИБКА -->
    <div v-else-if="!user">Данные о пользователе недоступны</div>

    <!-- ПОЛЬЗОВАТЕЛЬ -->
    <div v-else class="space-y-16 flex flex-col items-center">
      <!-- АВАТАР -->
      <img class="avatar" alt="Аватар" :src="avatarSrc" />
      <input type="file" @input.prevent="updateAvatar" />

      <div class="max-w-1/2">
        <div class="space-4-5">
          <!-- ИМЯ -->
          <div class="space-y-4 items-center">
            <label for="name" class="input-label mr-3">Имя:</label>

            <input
              id="name"
              v-model="userLocal.name"
              class="user-input"
              name="name"
              placeholder="Имя пользователя"
            />
          </div>

          <!-- РОЛЬ -->
          <div class="space-y-5">
            <label for="role" class="input-label mr-3">Роль:</label>

            <select
              id="role"
              v-model="userLocal.roleId"
              class="user-input ld-select"
              name="edit-role"
            >
              <option
                v-for="role in roleOptions"
                :key="role.id"
                :value="role.id"
              >
                {{ role.name }}
              </option>
            </select>
          </div>
        </div>

        <!-- СОХРАНИТЬ -->
        <button
          type="button"
          :disabled="saving"
          class="ld-button-main mt-10"
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

    const updateAvatar = (event) => {
      console.log(event)
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
      updateAvatar,
      updateUser
    }
  }
}
</script>

<style>
.user-edit {
  @apply border border-grey-3;
  @apply bg-white;
  @apply p-10;
  box-shadow: 0 2px 10px 0 #00000014;
}

.user-edit .user-input {
  @apply pb-2;
  border-bottom: 1px solid #c2cfe0;
  min-width: 300px;
  font-size: 16px;
}

.user-edit .user-input:focus {
  outline: none;
  border-color: #0880ae;
}

.ld-select {
  background: white;
}

.input-label {
  @apply text-size-13;
  color: #818e9b;
}

.user-edit .avatar {
  @apply rounded-full w-53 h-53;
}
</style>
