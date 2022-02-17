// TODO: http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/

import axiosInstance from '../plugins/axios.js'

export default {
    /**
     * Загрузить список пользователей с пагинацией
     * @param {object} params - параметры загрузки
     * @returns {Promise}
     */
    loadUsersPaginated(params) {
        return axiosInstance
            .get('/api/admin/users', { params })
            .then(response => response.data)
            .then(response => response)
    },

    /**
     * Загрузить информацию о пользователе
     * @param {string} id - идентификатор пользователя
     * @returns {Promise}
     */
    loadUser(id) {
        return axiosInstance
            .get(`/api/admin/users/${id}`)
            .then(response => response.data)
            .then(response => response)
    },

    /**
     * Создать пользователя
     * @param {object} user - данные пользователя
     * @returns {Promise}
     */
    createUser(user) {
        return axiosInstance
            .post('/api/admin/users', user)
            .then(response => response.data)
            .then(response => response)
    },

    /**
     * Обновить информацию о пользователе
     * @param {object} user - данные пользователя
     * @returns {Promise}
     */
    updateUser(user) {
        const id = user.id

        return axiosInstance
            .put(`/api/admin/users/${id}`, user)
            .then(response => response.data)
            .then(response => response)
    },

    /**
     * Удалить пользователя
     * @param {number} id - идентификатор пользователя
     * @returns {Promise}
     */
    deleteUser(id) {
        return axiosInstance
            .delete(`/api/admin/user/${id}`)
            .then(response => response.data)
            .then(response => response)
    }
}
