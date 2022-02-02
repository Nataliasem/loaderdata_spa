// Экземпляр плагина axios с необходимыми настройками

import axios from 'axios'
import { BASE_URL } from '../constants';
import store from '../store/index'

const API_URL = `${BASE_URL.HOST}:${BASE_URL.PORT}`

const token = (store.state.user && store.state.user.basicAuthToken) || ''

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: token ? { 'Authorization': `Basic ${token}`} : {}
})

const errorHandler = error => {
    const message = error.response.data.message

    return Promise.reject(message)
}

axiosInstance.interceptors.response.use(response => response, errorHandler)

export default axiosInstance
