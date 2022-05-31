<template>
  <div class="top-menu">
    <div class="flex space-x-8">
      <router-link
        class="app-link"
        to="/admin/dashboard"
      >
        Панель администратора
      </router-link>
      <router-link
        class="app-link active"
        to="/admin/ui-kit"
      >
        Ui kit
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar'
}
</script>

<style>
.top-menu {
  @apply py-4 px-5 bg-gray-6;
}
</style>
