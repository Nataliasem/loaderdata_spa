// Экземпляр плагина axios с необходимыми настройками

import axios from 'axios'
import { BASE_URL } from '~/constants.ts'
import store from '~/store'

export const API_URL = `${BASE_URL.HOST}:${BASE_URL.PORT}`

const axiosInstance = axios.create({
    baseURL: API_URL
})

const errorHandler = error => {
    if(!error || !error.response) {
        return Promise.reject('Не удалось подключиться к серверу')
    }

    if (error.response.status >= 500) {
        error.message = 'Извините, возникла ошибка на сервере'
    }

    const message = error.response.data.message

    return Promise.reject(message)
}

const addBasicAuthToken = config => {
    const token = (store.state.user && store.state.user.basicAuthToken) || ''

    if (token) {
        config.headers.common.Authorization = `Basic ${token}`
    }

    return config
}

axiosInstance.interceptors.request.use(addBasicAuthToken)
axiosInstance.interceptors.response.use(response => response, errorHandler)

export default axiosInstance
