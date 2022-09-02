<template>
  <user-preview></user-preview>
  <user-edit></user-edit>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'UserInfo',
  components: {
    UserPreview: defineAsyncComponent(
      () => import('~/components/user/user-preview.vue')
    ),
    UserEdit: defineAsyncComponent(
      () => import('~/components/user/user-edit.vue')
    )
  }
})
</script>
