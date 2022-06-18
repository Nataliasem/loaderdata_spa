<!-- Стартовая страница LoaderData -->

<template>
  <div class="home-page">
    <div v-if="isAuthenticated">Привет, Username!</div>
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

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isAuthenticated = computed(() => {
  return store.getters.isAuthenticated || false
})
</script>
