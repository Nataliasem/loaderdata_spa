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
import AppIconEyeClosed from '~/components/icons/app-icon-eye-closed.vue'
import AppIconEyeOpened from '~/components/icons/app-icon-eye-opened.vue'

export default {
  name: 'LdFieldPassword',
  components: {
    AppIconEyeOpened,
    AppIconEyeClosed
  },
  props: {
    /**
     * Текущее значение
     * @type {string | null}
     */
    value: {
      type: String,
      default: null
    },

    /**
     * ID для тестирования
     * @type {string}
     */
    id: {
      type: String,
      default: ''
    },

    /**
     * Флаг блокировки
     * @type {boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Значение для плейсхолдера
     * @type {string}
     */
    placeholder: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    /**
     * Флаг, показывать ли пароль
     * @type {boolean}
     */
    showPassword: false
  }),
  computed: {
    /**
     * Тип поля пароля
     * @type {string}
     */
    type() {
      return this.showPassword ? 'text' : 'password'
    },

    /**
     * Текст атрибута title кнопки 'Показать/Скрыть пароль'
     * @type {string}
     */
    title() {
      return this.showPassword ? 'Скрыть пароль' : 'Показать пароль'
    }
  },
  methods: {
    /**
     * Переключение видимости пароля
     * @returns {void}
     */
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    }
  }
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
