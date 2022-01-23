<template>
  <app-navbar />
  <div class="flex">
    <app-sidebar />
    <slot />
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
.flex {
  display: flex;
}


</style>
