import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state() {
        return {
            /**
             * Пользователь
             * @type {object|null}
             */
            user: null,

            /**
             * Токен для базовой аутентификации
             * @type {string}
             */
            basicAuthToken: ''
        }
    },
    getters: {
        /**
         * Флаг, что пользователь авторизован
         * @param {object} state - состояние хранилища Vuex
         * @returns {boolean}
         */
        isAuthenticated: state => Boolean(state.user) || false
    },
    mutations: {
        /**
         * Сохранить пользователя
         * @param {object} state - состояние хранилища Vuex
         * @param {object} user - информация о пользователе
         * @returns {void}
         */
        SET_USER(state, user) {
            state.user = user || null
        },

        /**
         * Сохранить пользователя
         * @param {object} state - состояние хранилища Vuex
         * @param {string} token - токен аутентификации
         * @returns {void}
         */
        SET_TOKEN(state, token) {
            state.basicAuthToken = token || ''
        }
    },
    plugins: [
        // Сохраняем некоторые свойства хранилища в LocalStorage
        createPersistedState({ paths: ['user', 'token']})
    ]
})

export default store
