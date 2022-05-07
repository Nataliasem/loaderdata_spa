<template>
  <div class="default-layout">
    <div class="page-wrapper">
      <!-- ЛОГОТИП + УПРАВЛЕНИЕ АККАУНТОМ -->
      <app-navbar />

      <!-- НАВИГАЦИЯ ПО ПРИЛОЖЕНИЮ -->
      <top-menu v-if="isAuthenticated" />

      <!-- СОДЕРЖИМОЕ СТРАНИЦЫ -->
      <div class="page-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'default-layout',
  components: {
    AppNavbar: defineAsyncComponent(() => import('~/components/layouts/app-navbar.vue')),
    TopMenu: defineAsyncComponent(() => import('~/components/layouts/top-menu.vue')),
  },
  computed: {
    /**
     * Флаг, что пользователь авторизован
     * @returns {boolean}
     */
    isAuthenticated() {
      return this.$store.getters.isAuthenticated || false
    }
  }
}
</script>


<style>
/* Глобальные стили */
.page-wrapper {
  @apply w-full;
}

.page-content {
  @apply p-8;
}
</style>
