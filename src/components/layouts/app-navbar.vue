<template>
  <div class="app-navbar">
    <span class="logo">Loader<span class="text-secondary">Data</span></span>
    <div class="flex space-x-5">
      <div>Аккаунт</div>
      <div>Выход</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-navbar'
}
</script>

<style>
.app-navbar {
  @apply flex justify-between p-5;
}

.app-navbar .logo {
  @apply font-bold text-size-30 text-primary;
}
</style>
