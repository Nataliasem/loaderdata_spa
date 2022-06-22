<template>
  <div class="home-page">
    <div v-if="userStore.isAuthenticated">
      Привет, {{ userStore.user.name }}!
    </div>
    <div v-else class="text-center">
      <router-link to="/auth/login" class="underline">
        Войти или зарегистрироваться
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { useRouter } from 'vue-router'
const router = useRouter()

const userStore = useUserStore()

// TODO: Отправлять пользователя на его страницу
const redirectUrl = userStore.isAdmin ? '/admin/dashboard' : '/'
router.push(redirectUrl)
</script>
