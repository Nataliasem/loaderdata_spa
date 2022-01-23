<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import Default from './layouts/default-layout'
import NotAuthenticated from './layouts/not-auth-layout.vue'

export default {
  name: 'app',
  components: {
    Default,
    NotAuthenticated
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');

body {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
