<!-- Стартовая страница LoaderData -->

<template>
  <div>Стартовая страница</div>
</template>

<script>
export default {
  name: 'start-page',
  // layout: 'no-auth'
  // middleware: ['get-user']
  // computed: {
    // Флаг авторизации пользователя
    // isAuthenticated() {
    //   return this.$store.getters.isAuthenticated || false
    // }
  // },
  mounted() {
    this.$nextTick(() => {
      // const url = this.isAuthenticated ? '/desktop' : '/auth/log-in'
      this.$router.push('/auth/log-in')
    })
  }
}
</script>
