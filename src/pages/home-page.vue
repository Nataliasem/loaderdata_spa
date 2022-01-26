<!-- Стартовая страница LoaderData -->

<template>
  <div class="home-page">
    <div>Стартовая страница</div>
    <div v-if="isAuthenticated">
      Блок с информацией о пользователе
    </div>
    <div>Динамическая статистика о проекте</div>
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
  },
  mounted() {
    /**
     * Перенаправить пользователя
     * @returns {void}
     */
    this.$nextTick(() => {
      const url = this.isAuthenticated ? '/' : '/auth/log-in'
      this.$router.push(url)
    })
  }
}
</script>
