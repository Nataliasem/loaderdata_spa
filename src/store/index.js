import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state() {
        return {
            /**
             * Пользователь
             * @type {object|null}
             */
            user: null
        }
    },
    getters: {
        /**
         * Флаг, что пользователь авторизован
         * @param {object} state - состояние хранилища Vuex
         * @returns {boolean}
         */
        isAuthenticated: state => Boolean(state.user)
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
        }
    },
    plugins: [
        // Сохраняем некоторые свойства хранилища в LocalStorage
        createPersistedState({ paths: ['user']})
    ]
})

export default store
