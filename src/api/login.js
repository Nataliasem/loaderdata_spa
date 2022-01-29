// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/

import axiosInstance from '../plugins/axios.js'

/**
 * Войти в систему
 * @param {object} user - пользовательские данные для входа
 * @param {string} id - идентификатор информационной системы
 * @returns {Promise}
 */
export default {
  login(user) {
    return axiosInstance.post('/users/login', {
      username: user.username,
      password: user.password
    })
    .then(response => response)
  }
}
