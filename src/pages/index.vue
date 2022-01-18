<!-- Стартовая страница LoaderData -->

<template>
  <div>Стартовая страница</div>
</template>

<script>
export default {
  name: 'start-page',
  // layout: 'no-auth'
  // middleware: ['get-user']
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
      const url = this.isAuthenticated ? '/desktop' : '/auth/log-in'
      this.$router.push(url)
    })
  }
}
</script>
