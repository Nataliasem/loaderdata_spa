<template>
  <div class="ld-navbar">
    <!-- ЛОГОТИП -->
    <div class="ld-logo" @click="backToHomePage">
      loader<span class="text-blue-3">.</span>
    </div>

    <div class="flex space-x-8">
      <template v-if="isAuthenticated">
        <!-- АККАУНТ ПОЛЬЗОВАТЕЛЯ -->
        <button
          id="account-button"
          type="button"
          class="text-grey-1 cursor-not-allowed"
          disabled
        >
          <span class="flex space-x-2 items-center">
            <icon-user class="inline-block text-white" />
            <span>{{ name }}</span>
          </span>
        </button>

        <!-- ВЫХОД ИЗ СИСТЕМЫ -->
        <button id="logout-button" type="button" @click="logout">
          <icon-logout class="inline-block text-white" />
        </button>
      </template>

      <!-- ВОЙТИ -->
      <button
        v-else
        id="login-button"
        type="button"
        @click="$router.push('/auth/login')"
      >
        <icon-login class="inline-block text-white" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useUserStore } from '~/store/user'
import { useRouter } from 'vue-router'

export default {
  name: 'LdNavbar',
  components: {
    IconUser: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-user.vue')
    ),
    IconLogout: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-logout.vue')
    ),
    IconLogin: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-login.vue')
    )
  },
  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    const isAuthenticated = computed(() => {
      return userStore.isAuthenticated || false
    })

    const name = computed(() => {
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
      isAuthenticated,
      name,
      logout,
      backToHomePage
    }
  }
}
</script>

<style>
.ld-navbar {
  @apply flex justify-between py-5 pl-20 pr-10 bg-blue-1;
}

.ld-navbar .ld-logo {
  @apply font-bold text-size-30 text-blue-1 cursor-pointer text-white;
}
</style>
