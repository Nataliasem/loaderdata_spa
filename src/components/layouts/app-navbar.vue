<template>
  <div class="app-navbar">
    <!-- ЛОГОТИП-->
    <div
      class="logo"
      @click="backToHomePage"
    >
      Loader<span class="text-secondary">Data</span>
    </div>

    <div class="flex space-x-5">
      <!-- АККАУНТ ПОЛЬЗОВАТЕЛЯ-->
      <button
        type="button"
        class="text-gray-3 cursor-not-allowed"
        disabled
      >
        <span class="flex space-x-3">
          <app-icon-user class="inline-block" />
          <span>{{ user && user.name || '' }}</span>
        </span>
      </button>


      <!-- ВЫХОД ИЗ СИСТЕМЫ-->
      <button
        v-if="isAuthenticated"
        type="button"
        @click="logout"
      >
        <app-icon-logout class="inline-block" />
      </button>

      <!-- ВОЙТИ -->
      <button
        v-else
        type="button"
        @click="$router.push('/auth/login')"
      >
        <app-icon-login class="inline-block" />
      </button>
    </div>
  </div>
</template>

<script>
import AppIconUser from '/src/components/icons/app-icon-user.vue'
import AppIconLogout from '/src/components/icons/app-icon-logout.vue'
import AppIconLogin from '/src/components/icons/app-icon-login.vue'

export default {
  name: 'app-navbar',
  components: {
    AppIconUser,
    AppIconLogout,
    AppIconLogin
  },
  computed: {
    /**
     * Флаг, что пользователь авторизован
     * @returns {boolean}
     */
    isAuthenticated() {
      return this.$store.getters.isAuthenticated || false
    },

    /**
     * Текущий пользователь
     * @returns {object}
     */
    user() {
      return this.$store.state.user || null
    }
  },
  methods: {
    /**
     * Вернуться на домашнюю страницу
     * @returns {void}
     */
    backToHomePage() {
      this.$router.push('/')
    },

    /**
     * Выйти из системы
     * @returns {void}
     */
    logout() {
      this.$store.commit('SET_USER', null)

      this.backToHomePage()
    }
  }
}
</script>

<style>
.app-navbar {
  @apply flex justify-between p-5;
}

.app-navbar .logo {
  @apply font-bold text-size-30 text-primary cursor-pointer;
}
</style>
