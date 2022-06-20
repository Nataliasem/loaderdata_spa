// TODO: http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/

import axiosInstance from '~/plugins/axios'
import { User } from '~/types/main'
import { AxiosResponse } from 'axios'

export default {
  /**
   * Загрузить список пользователей с пагинацией
   * @param {object} params - параметры загрузки
   * @returns {Promise}
   */
  // TODO: Узнать параметры с бэка
  loadUsersPaginated(params = {}): Promise<User[]> {
    return axiosInstance
      .get('/api/admin/users', { params })
      .then((response: AxiosResponse) => response.data)
      .then((response: Array<User>) => response)
  },

  loadUser(id: string): Promise<User> {
    return axiosInstance
      .get(`/api/admin/users/${id}`)
      .then((response: AxiosResponse) => response.data)
      .then((response: User) => response)
  },

  createUser(user: User): Promise<User> {
    return axiosInstance
      .post('/api/admin/users', user)
      .then((response: AxiosResponse) => response.data)
      .then((response: User) => response)
  },

  updateUser(user: User): Promise<User> {
    const id = user.id

    return axiosInstance
      .put(`/api/admin/users/${id}`, user)
      .then((response: AxiosResponse) => response.data)
      .then((response: User) => response)
  },

  // TODO: Узнать, что возвращает эндпоинт
  removeUser(id: string): Promise<void> {
    return axiosInstance.delete(`/api/admin/users/${id}`)
  }
}
