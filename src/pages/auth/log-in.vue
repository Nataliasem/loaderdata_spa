<template>
  <form name="authentication" @submit.prevent="loginUser" class="login-form">
    <input name="username" id="username" placeholder="Логин" v-model="username" class="app-input">
    <input name="password" id="password" type="password" placeholder="Пароль" v-model="password" class="app-input">
    <button type="submit" :disabled="disabled" class="submit-button">Войти в систему</button>
  </form>
</template>

<script>
import logInApi from '../../api/login.js'

export default {
  name: 'App',
  data: () => ({
    username: '',
    password: ''
  }),
  computed: {
    disabled() {
      return !this.username || !this.password
    }
  },
  methods: {
    loginUser() {
      logInApi.login(this.username, this.password)
        .then(user => this.saveUser(user))
        .catch(error => console.log(error))
    },

    saveUser(user) {
      console.log(user)

      const encoded = window.btoa(`${this.username}:${this.password}`)
      console.log(encoded)

      this.$router.push('/admin/dashboard')
    }

    // Сохранить пользователя в сторе и локал сторадже
    // проверить пермишены. Если админ - редирект на админ-панель
    // если юзер - редирект на страницу аккаунта
  }
}
</script>

<style>
.login-form {
  width: 600px;
  margin: 200px auto;
}

.login-form .app-input {
  border: 1px solid #DBE2EA;
  border-radius: 3px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
}

.login-form .app-input:focus {
  outline: none;
  border-color: #0880AE;
  border-width: 2px;
}

.login-form .submit-button {
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #0880AE;
  color: white;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.login-form .submit-button:disabled {
  background-color: #DBE2EA;
  color: #b1b5bf;
}
</style>
