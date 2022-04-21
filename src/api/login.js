// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
import axiosInstance, { API_URL } from '~/plugins/axios.js'

const config = {
    baseURL: API_URL
}

export default {
  /**
   * Войти в систему
   * @param {object} user - пользовательские данные для входа
   * @returns {Promise}
   */
  login(user) {
    const data = {
      username: user.username,
      password: user.password
    }

    return axiosInstance.post('/api/users/login', data, config)
        .then(response => response.data)
        .then(response => response)
  },

  /**
   * Зарегистрироваться в системе
   * @param {object} user - пользовательские данные для входа
   * @returns {Promise}
   */
  register(user) {
    const data = {
      username: user.username,
      password: user.password,
      roleId: user.roleId
    }

      return axiosInstance.post('/api/users/register', data, config)
          .then(response => response.data)
          .then(response => response)
  }
}
