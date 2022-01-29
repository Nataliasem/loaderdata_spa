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
      <button type="button">
        <app-icon-user class="inline-block" />
      </button>

      <!-- ВЫХОД ИЗ СИСТЕМЫ-->
      <button
        type="button"
        @click="logout"
      >
        <app-icon-logout class="inline-block" />
      </button>
    </div>
  </div>
</template>

<script>
import AppIconUser from '/src/components/icons/app-icon-user.vue'
import AppIconLogout from '/src/components/icons/app-icon-logout.vue'

export default {
  name: 'app-navbar',
  components: {
    AppIconUser,
    AppIconLogout
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
      this.$store.state.user = null

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
