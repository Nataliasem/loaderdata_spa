<template>
  <div class="ld-sidebar">
    <div
      v-for="link in sidebarLinks"
      :key="link.key"
      class="link"
      :class="setActiveStyle(link.key)"
      @click="changeActiveLink(link.key)"
    >
      <Component :is="link.icon" />
      <router-link class="text-size-18" :to="link.to">
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconUsers from '~/components/ui/icons/icon-users.vue'
import IconAtom from '~/components/ui/icons/icon-atom.vue'
import { ref } from 'vue'
interface SidebarLink {
  key: string
  title: string
  icon: object
  to: string
}

const sidebarLinks: Array<SidebarLink> = [
  {
    key: 'users',
    title: 'Пользователи',
    icon: IconUsers,
    to: '/admin/dashboard'
  },
  {
    key: 'ui-kit',
    title: 'UI-kit',
    icon: IconAtom,
    to: '/admin/ui-kit'
  }
]

const DEFAULT_SIDEBAR_LINK = sidebarLinks[0].key

const activeLink = ref(DEFAULT_SIDEBAR_LINK)
const changeActiveLink = (link: string) => {
  activeLink.value = link
}

const setActiveStyle = (link: string) => {
  return link === activeLink.value ? 'active' : ''
}
</script>

<style>
.ld-sidebar {
  @apply px-8 py-10 space-y-8 h-screen;
  @apply bg-white min-w-sidebar shadow-ld-sm;
}

.ld-sidebar .link {
  @apply flex items-center space-x-3 text-blue-2;
}

.ld-sidebar .link.active {
  @apply text-purple border-dashed;
}
</style>
