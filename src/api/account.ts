// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
import axiosInstance, { API_URL } from '~/plugins/axios'
import { User } from '~/types/main'
import { AxiosResponse } from 'axios'

const config = {
  baseURL: API_URL
}

interface AccountInfo {
  name: string
  password: string
}

export default {
  login(userInfo: AccountInfo): Promise<User> {
    return axiosInstance
      .post('/api/account/login', userInfo, config)
      .then((response: AxiosResponse) => response.data)
      .then((response: Promise<User>) => response)
  },

  register(userInfo: AccountInfo): Promise<User> {
    return axiosInstance
      .post('/api/account/register', userInfo, config)
      .then((response: AxiosResponse) => response.data)
      .then((response: Promise<User>) => response)
  }
}
