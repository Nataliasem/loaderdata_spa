<template>
  <div class="default-layout">
    <div class="page-wrapper">
      <app-navbar />

      <top-menu v-if="isAuthenticated" />

      <div class="page-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'DefaultLayout',
  components: {
    AppNavbar: defineAsyncComponent(() =>
      import('~/components/layouts/app-navbar.vue')
    ),
    TopMenu: defineAsyncComponent(() =>
      import('~/components/layouts/top-menu.vue')
    )
  },
  setup() {
    const store = useStore()

    const isAuthenticated = computed(() => {
      return store.getters.isAuthenticated || false
    })

    return { isAuthenticated }
  }
}
</script>

<style>
.page-wrapper {
  @apply w-full;
}

.page-content {
  @apply p-8;
}
</style>
