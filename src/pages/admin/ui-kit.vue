<template>
  <div class="app-ui-kit space-y-40">
    <!-- КНОПКИ -->
    <div class="flex justify-center space-x-20">
      <div class="font-bold text-size-42 w-1/4">BUTTONS</div>

      <div class="flex flex-grow-1 space-x-10 w-3/4">
        <!-- BUTTON-MAIN -->
        <div class="flex flex-col space-y-6">
          <button type="button" class="app-button-main">Main default</button>
          <button type="button" class="app-button-main hover">
            Main hover
          </button>
          <button type="button" class="app-button-main active">
            Main active
          </button>
          <button type="button" class="app-button-main disabled">
            Main disabled
          </button>
        </div>

        <!-- BUTTON-SECONDARY -->
        <div class="flex flex-col space-y-6">
          <button type="button" class="app-button-secondary">
            Secondary default
          </button>
          <button type="button" class="app-button-secondary hover">
            Secondary hover
          </button>
          <button type="button" class="app-button-secondary active">
            Secondary active
          </button>
          <button type="button" class="app-button-secondary disabled">
            Secondary disabled
          </button>
        </div>

        <!-- BUTTON-ICON -->
        <div class="flex flex-col space-y-6">
          <button type="button" class="app-button-icon text-size-30">
            &#9734;
          </button>
          <button type="button" class="app-button-icon text-size-30 hover">
            &#9734;
          </button>
          <button type="button" class="app-button-icon text-size-30 active">
            &#9734;
          </button>
          <button type="button" class="app-button-icon text-size-30 disabled">
            &#9734;
          </button>
        </div>
      </div>
    </div>

    <!-- ИКОНКИ -->
    <div class="flex justify-center space-x-20">
      <div class="font-bold text-size-42 w-1/4">ICONS</div>

      <div class="flex w-3/4 space-x-8">
        <app-icon-user class="text-green-1" />
        <app-icon-login class="text-green-1" />
        <app-icon-logout class="text-green-1" />
        <app-icon-warning class="text-green-1" />
      </div>
    </div>
    <!-- TODO: Шрифт -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'UiKit',
  components: {
    AppIconWarning: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-warning.vue')
    ),
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
  middleware: 'auth'
}
</script>
