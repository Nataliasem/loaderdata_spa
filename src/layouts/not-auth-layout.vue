<template>
  <app-navbar>
    <div>Войти в систему</div>
  </app-navbar>
  <slot />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'NotAuthLayout',
  components: {
    AppNavbar: defineAsyncComponent(() =>
      import('~/components/ui/ld-navbar.vue')
    )
  }
}
</script>
