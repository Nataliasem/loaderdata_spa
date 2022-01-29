<template>
  <div class="default-layout">
    <div class="page-wrapper">
      <!-- ЛОГОТИП + УПРАВЛЕНИЕ АККАУНТОМ-->
      <app-navbar />

      <!-- НАВИГАЦИЯ ПО ПРИЛОЖЕНИЮ-->
      <top-menu />

      <!-- СОДЕРЖИМОЕ СТРАНИЦЫ-->
      <div class="page-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/layouts/app-navbar.vue'
import TopMenu from '../components/layouts/top-menu.vue'

export default {
  name: 'default-layout',
  components: {
    AppNavbar,
    TopMenu
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
