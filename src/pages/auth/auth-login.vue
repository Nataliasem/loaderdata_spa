<template>
  <form name="authentication" @submit.prevent="loginUser" class="login-form">
    <input name="username" id="username" placeholder="Логин" v-model="username" class="app-input">
    <input name="password" id="password" type="password" placeholder="Пароль" v-model="password" class="app-input" autocomplete="password">
    <button type="submit" :disabled="disabled" class="submit-button">Войти в систему</button>
  </form>
</template>

<script>
import logInApi from '../../api/login.js'

export default {
  name: 'auth-login',
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
    /**
     * Войти в систему
     * @returns {void}
     */
    loginUser() {
      logInApi.login(this.username, this.password)
        .then(user => this.setUser(user))
        .catch(error => console.log(error))
    },

    /**
     * Сохранить пользователя
     * @param {object} user - информация о пользователе
     * @returns {void}
     */
    setUser(user) {
      this.$store.commit('SET_USER', user)

      // На главную страницу
      this.$router.push('/')
    }
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
