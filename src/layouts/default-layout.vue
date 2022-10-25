<template>
  <div class="default-layout">
    <div class="page-wrapper">
      <ld-navbar />

      <div class="flex">
        <ld-sidebar v-if="isAuthenticated" />

        <div class="page-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useUserStore } from '~/store/user'
export default {
  name: 'DefaultLayout',
  components: {
    LdNavbar: defineAsyncComponent(() =>
      import('~/components/ui/ld-navbar.vue')
    ),
    LdSidebar: defineAsyncComponent(() =>
      import('~/components/ui/ld-sidebar.vue')
    )
  },
  setup() {
    const userStore = useUserStore()

    const isAuthenticated = computed(() => {
      return userStore.isAuthenticated || false
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
  @apply p-16 w-full;
}
</style>
