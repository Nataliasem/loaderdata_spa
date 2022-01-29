// Экземпляр плагина axios с необходимыми настройками

import axios from 'axios'
import { BASE_URL } from '../constants';

const API_URL = `${BASE_URL.HOST}:${BASE_URL.PORT}/api`

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: { 'Authorization': 'Basic b3duZXI6MTIzNA=='}
})

const errorHandler = error => {
    const message = error.response.data.message

    return Promise.reject(message)
}

axiosInstance.interceptors.response.use(response => response, errorHandler)

export default axiosInstance
