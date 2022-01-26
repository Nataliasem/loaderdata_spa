<template>
  <div class="app-sidebar">
    <ul>
      <router-link
        class="sidebar-link"
        to="/admin/dashboard"
      >
        Панель администратора
      </router-link>
      <router-link
        class="sidebar-link"
        to="/admin/ui-kit"
      >
        Ui kit
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app-sidebar'
}
</script>

<style>
.app-sidebar {
  @apply p-5 bg-grey-2 h-screen;
  width: 300px;
}

.app-sidebar .sidebar-link {
  display: block;
  @apply p-3;
}
</style>
