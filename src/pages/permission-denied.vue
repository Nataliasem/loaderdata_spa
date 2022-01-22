<template>
<div>{{ error }}</div>
</template>

<script>
export default {
  name: 'permission-denied',
  computed: {
    /**
     * Ошибка доступа
     * @type {object}
     */
    error() {
      return this.$route.params.error || ''
    }
  }
}
</script>
