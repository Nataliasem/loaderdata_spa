<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white p-11 rounded-ld-xl space-y-6">
      <!-- ЛОГОТИП-->
      <div class="font-bold text-size-30 text-blue-1 text-center">
        loader<span class="text-blue-3">.</span>
      </div>

      <form name="auth" class="space-y-8" @submit.prevent="handleAuth">
        <!-- ЛОГИН-->
        <label class="inline-block w-full">
          <input
            id="username"
            v-model="user.username"
            name="username"
            placeholder="Логин"
            class="ld-input"
          />
        </label>

        <!-- ПАРОЛЬ -->
        <label class="inline-block w-full">
          <input
            id="password"
            v-model="user.password"
            type="password"
            PLACEHOLDER="Пароль"
            class="ld-input"
          />
        </label>

        <!-- ВОЙТИ В СИСТЕМУ -->
        <div class="flex items-center space-x-6">
          <button
            type="submit"
            :disabled="disabled"
            class="ld-button-main"
            @click="loginMode = true"
          >
            Войти в систему
          </button>

          <!-- ЗАРЕГИСТРИРОВАТЬСЯ -->
          <button
            type="submit"
            :disabled="disabled"
            class="ld-button-link"
            @click="loginMode = false"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import logInApi from '~/api/login.ts'
import notify from '~/plugins/notify.ts'
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/store/user'

const router = useRouter()
const userStore = useUserStore()

const user = reactive({
  username: '',
  password: ''
})

const disabled = computed(() => {
  return !user.username || !user.password
})

const loginMode = ref(true)

const handleAuth = () => {
  Promise.resolve()
    .then(() => (loginMode.value ? loginUser() : registerUser()))
    .then((user) => userStore.setUser(user))
    .then(() => router.push('/'))
    .catch((error) => notify.error(error))
}

const loginUser = () => {
  return logInApi.login(user).then((user) => {
    notify.success(`С возвращением, ${user.name}`)
    return user
  })
}

const registerUser = () => {
  return logInApi.register(user).then((user) => {
    notify.success('Вы успешно зарегистрировались в системе')
    return user
  })
}
</script>
