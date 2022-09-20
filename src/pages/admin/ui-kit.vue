<template>
  <div class="app-ui-kit">
    <!-- ЗАГОЛОВОК -->
    <div
      class="text-size-18 text-blue-2 font-bold pb-5 border-b border-b-grey-1 mb-8"
    >
      Дизайн-система
    </div>

    <div class="space-y-16">
      <!-- КНОПКИ -->
      <div class="flex space-x-10">
        <div class="font-bold text-size-30 text-grey-1 w-1/3">BUTTONS</div>

        <div class="flex space-x-10">
          <!-- BUTTON-MAIN -->
          <div class="flex flex-col space-y-6">
            <button type="button" class="ld-button-main">Main default</button>
            <button type="button" class="ld-button-main hover">
              Main hover
            </button>
            <button type="button" class="ld-button-main active">
              Main active
            </button>
            <button type="button" class="ld-button-main disabled">
              Main disabled
            </button>
          </div>

          <!-- BUTTON-SECONDARY -->
          <div class="flex flex-col space-y-6">
            <button type="button" class="ld-button-secondary">
              Secondary default
            </button>
            <button type="button" class="ld-button-secondary hover">
              Secondary hover
            </button>
            <button type="button" class="ld-button-secondary active">
              Secondary active
            </button>
            <button type="button" class="ld-button-secondary disabled">
              Secondary disabled
            </button>
          </div>

          <!-- BUTTON-LINK -->
          <div class="flex flex-col space-y-6">
            <button type="button" class="ld-button-link">Link default</button>
            <button type="button" class="ld-button-link hover">
              Link hover
            </button>
            <button type="button" class="ld-button-link active">
              Link active
            </button>
            <button type="button" class="ld-button-link disabled">
              Link disabled
            </button>
          </div>
        </div>
      </div>

      <!-- ИКОНКИ -->
      <div class="flex space-x-10">
        <div class="font-bold text-size-30 text-grey-1 w-1/3">ICONS</div>

        <div
          class="ds-icons-wrapper flex flex-col space-y-8"
          :style="{ color: currentColor }"
        >
          <div class="flex space-x-5">
            <label>
              <input v-model="currentColor" type="color" />
              <span class="ml-2">currentColor</span>
            </label>
          </div>

          <div class="flex items-center space-x-8">
            <icon-atom />
            <icon-eye-closed />
            <icon-eye-opened />
            <icon-lightning />
            <icon-user />
            <icon-users />
            <icon-login />
            <icon-logout />
            <icon-warning />
            <icon-lock />
            <icon-unlock />
          </div>
        </div>
      </div>

      <!-- ЛЕЙБЛЫ -->
      <div class="flex space-x-10">
        <div class="font-bold text-size-30 text-grey-1 w-1/3">LABELS</div>

        <div class="space-y-4">
          <div class="ld-label-green">Активный</div>
          <div class="ld-label-red">Заблокированный</div>
          <div class="ld-label-yellow">Ожидание</div>
          <div class="ld-label-purple">Архив</div>
        </div>
      </div>

      <div class="flex space-x-10">
        <div class="font-bold text-size-30 text-grey-1 w-1/3">INPUTS</div>

        <!-- ИНПУТЫ -->
        <div class="flex flex-col space-y-5">
          <ld-input />
          <ld-password />
          <ld-textarea />
          <ld-checkbox />
          <ld-radiobutton />
        </div>
      </div>

      <!-- TODO: Шрифт -->
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'

export default {
  name: 'UiKit',
  components: {
    IconAtom: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-atom.vue')
    ),
    IconEyeClosed: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-eye-closed.vue')
    ),
    IconEyeOpened: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-eye-opened.vue')
    ),
    IconLightning: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-lightning.vue')
    ),
    IconUser: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-user.vue')
    ),
    IconUsers: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-users.vue')
    ),
    IconLogout: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-logout.vue')
    ),
    IconLogin: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-login.vue')
    ),
    IconWarning: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-warning.vue')
    ),
    IconLock: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-lock.vue')
    ),
    IconUnlock: defineAsyncComponent(() =>
      import('~/components/ui/icons/icon-unlock.vue')
    ),
    LdInput: defineAsyncComponent(() =>
      import('~/components/fields/ld-input.vue')
    ),
    LdTextarea: defineAsyncComponent(() =>
      import('~/components/fields/ld-textarea.vue')
    ),
    LdCheckbox: defineAsyncComponent(() =>
      import('~/components/fields/ld-checkbox.vue')
    ),
    LdRadiobutton: defineAsyncComponent(() =>
      import('~/components/fields/ld-radiobutton.vue')
    ),
    LdPassword: defineAsyncComponent(() =>
      import('~/components/fields/ld-password.vue')
    )
  },
  // middleware: 'auth',
  setup() {
    const currentColor = ref('#0077db')

    return {
      currentColor
    }
  }
}
</script>
