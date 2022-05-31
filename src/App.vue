<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from './layouts/default-layout.vue'
import NotAuthLayout from './layouts/not-auth-layout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout,
    NotAuthLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  }
}
</script>
