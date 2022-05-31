<!-- Поле для ввода пароля -->
<template>
  <div
    class="ld-field-input-password"
  >
    <input
      :id="id"
      name="password"
      class="ld-input"
      autocomplete="password"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @input="$emit('input', $event)"
    />
    <span
      class="ld-field-input-password-icon"
      data-test-id="show-password-btn"
      :title="title"
      @click="togglePasswordVisibility"
    >
      <app-icon-eye-opened v-if="showPassword === false" />
      <app-icon-eye-closed v-else />
    </span>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, computed } from 'vue'

export default {
  name: 'LdFieldPassword',
  components: {
    AppIconEyeOpened: defineAsyncComponent(() =>
      import('~/components/icons/app-icon-eye-opened.vue')
    ),
    AppIconEyeClosed: defineAsyncComponent(() =>
      import('~/components/icons/app-icon-eye-closed.vue')
    )
  },
  props: {
    value: {
      type: String,
      default: null
    },

    id: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: ''
    }
  },
  setup() {
    const showPassword = ref(false)

    const type = computed(() => {
      return showPassword.value ? 'text' : 'password'
    })

    const title = computed(() => {
      return showPassword.value ? 'Скрыть пароль' : 'Показать пароль'
    })

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value
    }

    return {
      showPassword,
      type,
      title,
      togglePasswordVisibility
    }
  },
}
</script>

<style>
.ld-field-input-password {
  @apply relative;
  @apply flex justify-between items-center;
}

.ld-field-input-password .ld-field-input-password-icon {
  @apply absolute top-1 right-3;
}
</style>
