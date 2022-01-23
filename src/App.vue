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
