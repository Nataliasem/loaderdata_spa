// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
import axios from 'axios'
import { API_URL } from '../plugins/axios'
import { useToast } from 'vue-toastification';

const config = {
    baseURL: API_URL
}

const toast = useToast();

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

    return axios.post('/api/users/login', data, config)
        .then(response => response.data)
        .then(response => response)
        .catch(error => toast.error(error.response.data.message))
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

      return axios.post('/api/users/register', data, config)
          .then(response => response.data)
          .then(response => response)
  }
}
