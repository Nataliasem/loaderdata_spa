import { createStore } from 'vuex'

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
        }
    }
})

export default store
