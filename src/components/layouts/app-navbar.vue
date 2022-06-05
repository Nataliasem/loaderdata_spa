<template>
  <div class="app-navbar">
    <!-- ЛОГОТИП -->
    <div class="logo" @click="backToHomePage">
      Loader<span class="text-secondary">Data</span>
    </div>

    <div class="flex space-x-5">
      <!-- АККАУНТ ПОЛЬЗОВАТЕЛЯ -->
      <button type="button" class="text-gray-3 cursor-not-allowed" disabled>
        <span class="flex space-x-3">
          <app-icon-user class="inline-block" />
          <span>{{ userName }}</span>
        </span>
      </button>

      <!-- ВЫХОД ИЗ СИСТЕМЫ -->
      <button v-if="isAuthenticated" type="button" @click="logout">
        <app-icon-logout class="inline-block" />
      </button>

      <!-- ВОЙТИ -->
      <button v-else type="button" @click="$router.push('/auth/login')">
        <app-icon-login class="inline-block" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'AppNavbar',
  components: {
    AppIconUser: defineAsyncComponent(() =>
      import('~/components/icons/app-icon-user.vue')
    ),
    AppIconLogout: defineAsyncComponent(() =>
      import('~/components/icons/app-icon-logout.vue')
    ),
    AppIconLogin: defineAsyncComponent(() =>
      import('~/components/icons/app-icon-login.vue')
    )
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const isAuthenticated = computed(() => {
      return store.getters.isAuthenticated || false
    })

    const userName = computed(() => {
      const user = store.state.user || null
      return (user && user.name) || ''
    })

    const logout = () => {
      store.commit('SET_USER', null)

      backToHomePage()
    }

    const backToHomePage = () => {
      router.push('/')
    }

    return {
      isAuthenticated,
      userName,
      logout,
      backToHomePage
    }
  }
}
</script>

<style>
.app-navbar {
  @apply flex justify-between p-5;
}

.app-navbar .logo {
  @apply font-bold text-size-30 text-primary cursor-pointer;
}
</style>
