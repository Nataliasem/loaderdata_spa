<template>
  <ld-navbar />
  <slot />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'NotAuthLayout',
  components: {
    LdNavbar: defineAsyncComponent(() =>
      import('~/components/ui/ld-navbar.vue')
    )
  }
}
</script>
