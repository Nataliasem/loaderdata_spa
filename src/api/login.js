// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
import axiosInstance, { API_URL } from '~/plugins/axios.ts'

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
    return axiosInstance
      .post('/api/users/login', user, config)
      .then((response) => response.data)
      .then((response) => response)
  },

  /**
   * Зарегистрироваться в системе
   * @param {object} user - пользовательские данные для входа
   * @returns {Promise}
   */
  register(user) {
    return axiosInstance
      .post('/api/users/register', user, config)
      .then((response) => response.data)
      .then((response) => response)
  }
}
