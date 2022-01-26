<template>
  <div class="default-layout">
    <div class="page-wrapper">
      <app-navbar />

      <div class="flex">
        <app-sidebar />

        <div class="page-content">
          <slot />
        </div>
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
  @apply h-full;
}

.default-layout .page-wrapper {
  @apply w-full;
}

.default-layout .page-content {
  @apply p-8;
}
</style>
