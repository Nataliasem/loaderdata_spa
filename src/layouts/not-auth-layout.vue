<template>
  <app-navbar>
    <div>Войти в систему</div>
  </app-navbar>
  <slot />
</template>

<script>
import AppNavbar from '~/components/layouts/app-navbar.vue'

export default {
  name: 'not-auth-layout',
  components: {
    AppNavbar
  }
}
</script>
