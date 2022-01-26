<template>
  <div class="app-navbar">
    <span class="logo">Loaderdata</span>
    <div class="flex">
      <div class="navbar-item">
        Аккаунт
      </div>
      <div class="navbar-item">
        Выход
      </div>
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
  @apply flex justify-between;
  height: 70px;
  padding: 20px;
}

.app-navbar .logo {
  @apply font-bold text-green-1 text-size-30;
}

.app-navbar .navbar-item {
  margin-left: 10px;
}
</style>
