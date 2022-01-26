<template>
  <div class="access-denied">
    <div class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'access-denied',
  computed: {
    /**
     * Ошибка доступа
     * @type {object}
     */
    error() {
      return this.$route.params.error || 'У вас нет прав доступа к этой странице'
    }
  }
}
</script>


<style>
.access-denied .error-message {
  text-align: center;
}
</style>
