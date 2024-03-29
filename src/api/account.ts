// Документация http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
import axiosInstance, { API_URL } from '~/plugins/axios'
import { User, AccountInfo } from '~/types/main'
import { AxiosResponse } from 'axios'

const config = {
  baseURL: API_URL
}

export default {
  login(accountInfo: AccountInfo): Promise<User> {
    return axiosInstance
      .post('/api/account/login', accountInfo, config)
      .then((response: AxiosResponse) => response.data)
      .then((response: Promise<User>) => response)
  },

  register(accountInfo: AccountInfo): Promise<User> {
    return axiosInstance
      .post('/api/account/register', accountInfo, config)
      .then((response: AxiosResponse) => response.data)
      .then((response: Promise<User>) => response)
  }
}
