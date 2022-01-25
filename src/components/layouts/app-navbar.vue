<template>
  <div class="app-navbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'app-navbar'
}
</script>

<style>
.app-navbar {
  display: flex;
  justify-content: end;
  height: 70px;
  padding: 20px;
}

.app-navbar .navbar-item {
  margin-left: 10px;
}
</style>
