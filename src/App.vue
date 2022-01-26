<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from './layouts/default-layout'
import NotAuthLayout from './layouts/not-auth-layout.vue'

export default {
  name: 'app',
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
