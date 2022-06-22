<template>
  <div class="ld-sidebar">
    <div v-for="link in sidebarLinks" :key="link.key" class="flex flex-col">
      <div class="flex items-center space-x-3 text-blue-2">
        <Component :is="link.icon" />
        <router-link class="text-size-18" :to="link.to">
          {{ link.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconUsers from '~/components/ui/icons/icon-users.vue'
import IconLightning from '~/components/ui/icons/icon-lightning.vue'
import IconAtom from '~/components/ui/icons/icon-atom.vue'
import { ref, Ref } from 'vue'
interface SidebarLink {
  key: string
  title: string
  icon: string
  to: string
}

const activeLink = ref('')

const sidebarLinks: Ref<Array<SidebarLink>> = ref([
  {
    key: 'users',
    title: 'Пользователи',
    icon: 'users',
    to: '/admin/dashboard'
  },
  {
    key: 'system',
    title: 'Система',
    icon: 'lightning',
    to: '/admin/dashboard'
  },
  {
    key: 'ui-kit',
    title: 'UI-kit',
    icon: 'atom',
    to: '/admin/ui-kit'
  }
])
</script>

<style>
.ld-sidebar {
  @apply h-screen py-16 px-16 space-y-5;
  @apply bg-grey-2;
}
</style>
