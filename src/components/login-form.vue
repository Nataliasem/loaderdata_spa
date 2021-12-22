<template>
  <form name="authentication" @submit.prevent="loginUser" class="login-form">
    <input name="username" id="username" placeholder="Логин" v-model="username" class="app-input">
    <input name="password" id="password" type="password" placeholder="Пароль" v-model="password" class="app-input">
    <button type="submit" :disabled="disabled" class="submit-button">Войти в систему</button>
  </form>
</template>

<script>
import { BASE_URL } from '/src/constants.js'

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
      const data = JSON.stringify({
        username: this.username,
        password: this.password
      });

      const url = `${BASE_URL.HOST}:${BASE_URL.PORT}/api/users/login`

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: data
      })
          .then(response => {
            if (!response.ok) {
              return response.json().then(response => Promise.reject(new Error(response.message)))
            }
            return Promise.resolve(response.json())

            // if (response.ok) {
            //   return response.json()
            // }
            //
            // return response.json().then(response => {
            //   throw new Error(response.message)
            // })
          })
          .then(response => console.log(response))
          .catch(error => {
            console.log(error.message)
          })
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
