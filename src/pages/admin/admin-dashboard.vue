<template>
  <div>Панель администратора</div>
</template>

<script>
export default {
  name: 'admin-dashboard',
  middleware: ['auth', 'admin']
}
</script>

<style scoped>

</style>
