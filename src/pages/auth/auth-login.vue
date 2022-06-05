<template>
  <form
    v-if="formType === 'register'"
    name="registration"
    class="login-form"
    @submit.prevent="registerUser"
  >
    <input
      id="register-username"
      v-model="user.username"
      name="username"
      placeholder="Логин"
      class="app-input"
    />
    <input
      id="register-password"
      v-model="user.password"
      type="password"
      placeholder="Пароль"
      class="app-input"
    />
    <select v-model="user.roleId" name="register-role" class="app-input">
      <option :value="1">Owner</option>
      <option :value="2">Admin</option>
      <option :value="3">Advanced user</option>
      <option :value="4">Default user</option>
    </select>
    <button type="submit" :disabled="disabled" class="submit-button">
      Зарегистрироваться
    </button>
  </form>

  <form
    v-else
    name="authentication"
    class="login-form"
    @submit.prevent="loginUser"
  >
    <input
      id="auth-username"
      v-model="user.username"
      name="username"
      placeholder="Логин"
      class="app-input"
    />
    <input
      id="auth-password"
      v-model="user.password"
      type="password"
      placeholder="Пароль"
      class="app-input"
    />
    <button type="submit" :disabled="disabled" class="submit-button">
      Войти в систему
    </button>
  </form>
</template>

<script setup>
import logInApi from '~/api/login.js'
import notify from '~/plugins/notify.js'
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = useStore()

const user = reactive({
  username: '',
  password: '',
  roleId: null
})

const disabled = computed(() => {
  return false
  // return !user.name || !user.password
})

const formType = computed(() => {
  return route.query.type || ''
})

const loginUser = () => {
  logInApi
    .login(user)
    .then((user) => setUser(user))
    .catch((error) => notify.error(error))
}

const registerUser = () => {
  logInApi
    .register(user)
    .then((user) => setUser(user))
    .then(() => notify.success('Вы успешно зарегистрировались в системе'))
    .catch((error) => notify.error(error))
}

const setUser = (user) => {
  store.commit('SET_USER', user)

  router.push('/')
}
</script>

<style>
.login-form {
  width: 600px;
  margin: 200px auto;
}

.login-form .app-input {
  border: 1px solid #dbe2ea;
  border-radius: 3px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
}

.login-form .app-input:focus {
  outline: none;
  border-color: #0880ae;
  border-width: 2px;
}

.login-form .submit-button {
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0880ae;
  color: white;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.login-form .submit-button:disabled {
  background-color: #dbe2ea;
  color: #b1b5bf;
}
</style>
