<!-- Стартовая страница LoaderData -->

<template>
  <div class="home-page">
    <div v-if="isAuthenticated">
      Привет, Username!
    </div>
    <div v-else class="text-center">
      <router-link to="/auth/login?type=auth" class="underline">
        Войти
      </router-link>
      или
      <router-link to="/auth/login?type=register" class="underline">
        зарегистрироваться
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  computed: {
    /**
     * Флаг, что пользователь авторизован
     * @returns {boolean}
     */
    isAuthenticated() {
      return this.$store.getters.isAuthenticated || false
    }
  }
}
</script>
