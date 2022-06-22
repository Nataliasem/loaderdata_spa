<template>
  <div class="flex justify-between py-5 px-20 bg-blue-1">
    <!-- ЛОГОТИП -->
    <div
      class="font-bold text-size-30 text-blue-1 cursor-pointer text-white"
      @click="backToHomePage"
    >
      loader<span class="text-blue-3">.</span>
    </div>

    <div class="flex space-x-2">
      <!-- АККАУНТ ПОЛЬЗОВАТЕЛЯ -->
      <button type="button" class="text-grey-1 cursor-not-allowed" disabled>
        <span class="flex space-x-3">
          <app-icon-user class="inline-block text-white" />
          <span>{{ userName }}</span>
        </span>
      </button>

      <!-- ВЫХОД ИЗ СИСТЕМЫ -->
      <button v-if="userStore.isAuthenticated" type="button" @click="logout">
        <app-icon-logout class="inline-block text-white" />
      </button>

      <!-- ВОЙТИ -->
      <button v-else type="button" @click="$router.push('/auth/login')">
        <app-icon-login class="inline-block text-white" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useUserStore } from '~/store/user'
import { useRouter } from 'vue-router'

export default {
  name: 'AppNavbar',
  components: {
    AppIconUser: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-user.vue')
    ),
    AppIconLogout: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-logout.vue')
    ),
    AppIconLogin: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-login.vue')
    )
  },
  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    const userName = computed(() => {
      const user = userStore.user || null
      return (user && user.name) || ''
    })

    const logout = () => {
      userStore.setUser(null)

      backToHomePage()
    }

    const backToHomePage = () => {
      router.push('/')
    }

    return {
      userStore,
      userName,
      logout,
      backToHomePage
    }
  }
}
</script>
