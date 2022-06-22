// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
import axiosInstance, { API_URL } from '~/plugins/axios'
import { User } from '~/types/main'
import { AxiosResponse } from 'axios'

const config = {
  baseURL: API_URL
}

interface UserInfo {
  username: string
  password: string
}

export default {
  login(userInfo: UserInfo): Promise<User> {
    return axiosInstance
      .post('/api/users/login', userInfo, config)
      .then((response: AxiosResponse) => response.data)
      .then((response: Promise<User>) => response)
  },

  register(userInfo: UserInfo): Promise<User> {
    return axiosInstance
      .post('/api/users/register', userInfo, config)
      .then((response: AxiosResponse) => response.data)
      .then((response: Promise<User>) => response)
  }
}
