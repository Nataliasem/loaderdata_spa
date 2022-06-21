<template>
  <div class="page-content access-denied">
    <div class="error-message">
      <app-icon-warning class="text-red inline-block" />

      <div class="flex flex-col">
        <span>{{ error }}</span>
        <router-link class="ld-link underline" to="/">
          Вернуться на главную
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

const AppIconWarning = defineAsyncComponent(() =>
  import('~/components/ui/icons/icon-warning.vue')
)

const route = useRoute()
const error = computed(() => {
  return route.params.error || 'У вас нет прав для просмотра этой страницы'
})
</script>

<style>
.access-denied .error-message {
  @apply flex space-x-2 flex-wrap;
  @apply bg-red p-4 w-1/2 mx-auto;
  @apply border border-red rounded-ld-md;
}
</style>
