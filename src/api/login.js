// TODO: Ссылка на swagger
// Аутентификация пользователя

import axiosInstance from '../plugins/axios.js'

export default {
  login(username, password) {
    return axiosInstance.post('/users/login', {
      username: username,
      password: password
    })
      .then(response => response)
  }
}
