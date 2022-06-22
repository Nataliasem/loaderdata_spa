// Экземпляр плагина axios с необходимыми настройками

import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { BASE_URL } from '~/constants'
import { useUserStore } from '~/store/user'

export const API_URL = `${BASE_URL.HOST}:${BASE_URL.PORT}`

const axiosInstance = axios.create({
  baseURL: API_URL
})

const errorHandler = (error: AxiosError) => {
  if (!error || !error.response) {
    return Promise.reject('Не удалось подключиться к серверу')
  }

  if (error.response.status >= 500) {
    error.message = 'Извините, возникла ошибка на сервере'
  }

  const message = error.response.data.message

  return Promise.reject(message)
}

const addBasicAuthToken = (config: AxiosRequestConfig) => {
  const userStore = useUserStore()

  if (userStore.token) {
    config.headers.common.Authorization = `Basic ${userStore.token}`
  }

  return config
}

axiosInstance.interceptors.request.use(addBasicAuthToken)
axiosInstance.interceptors.response.use((response) => response, errorHandler)

export default axiosInstance
