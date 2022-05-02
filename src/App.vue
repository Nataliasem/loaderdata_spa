<template>
  <component :is="layout === 'default-layout' ? DefaultLayout : NotAuthLayout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/default-layout.vue'
import NotAuthLayout from './layouts/not-auth-layout.vue'

const layout = computed(() => {
  const route = useRoute()
  return route.meta.layout || 'default-layout'
})
</script>
