// TODO: http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/

import axiosInstance from '../plugins/axios.js'

/**
 * Получить список пользователей с пагинацией (только для администратора)
 * @param {params} params - параметры загрузки
 * @param {string} id - идентификатор информационной системы
 * @returns {Promise}
 */
export default {
    loadUsers() {
        return axiosInstance
            .get('/api/admin/users')
            .then(response => response)
    }
}

// TODO: Обновить информацию о пользователе
// TODO: Создать нового пользователя
// TODO: Удалить пользователя

