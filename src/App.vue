<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultLayout from '~/layouts/default-layout.vue'
import NotAuthLayout from '~/layouts/not-auth-layout.vue'

export default defineComponent({
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
})
</script>
