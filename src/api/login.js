// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
import axiosBase from '../plugins/axios.js'

export default {
  /**
   * Войти в систему
   * @param {object} user - пользовательские данные для входа
   * @returns {Promise}
   */
  login(user) {
    return axiosBase.post('/api/users/login', {
      username: user.username,
      password: user.password
    })
    .then(response => response.data)
    .then(response => response)
  },

  register(user) {
    return axiosBase.post('api/users', {
      username: user.username,
      password: user.password,
      roleId: user.roleId
    })
        .then(response => response.data)
        .then(response => response)
  }
}
