<template>
  <div class="default-layout">
    <app-sidebar />
    <div class="page-wrapper">
      <app-navbar>
        <div class="navbar-item">
          Аккаунт
        </div>
        <div class="navbar-item">
          Выход
        </div>
      </app-navbar>
      <div class="page-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/layouts/app-navbar.vue'
import AppSidebar from '../components/layouts/app-sidebar.vue'

export default {
  name: 'default-layout',
  components: {
    AppNavbar,
    AppSidebar
  }
}
</script>


<style>
.default-layout {
  display: flex;
  height: 100vh;
}

.default-layout .page-wrapper {
  width: 100%;
}

.default-layout .page-content {
  width: 100%;
  padding: 20px;
}
</style>
