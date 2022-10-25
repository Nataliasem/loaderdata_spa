<template>
  <input
    class="ld-input"
    :value="modelValue"
    :type="type"
    :name="name"
    :autocomplete="autocomplete"
    :placeholder="placeholder"
    :disabled="disabled"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
export default {
  name: 'LdInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'string'
    },
    name: {
      type: String,
      default: 'string'
    },
    autocomplete: {
      type: String,
      default: 'string'
    },
    placeholder: {
      type: String,
      default: 'string'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.ld-input {
  @apply w-full rounded-ld-md border-2 border-transparent;
  @apply px-4 py-4;
  @apply bg-grey-3;
  @apply text-size-16;
}

.ld-input:focus {
  @apply outline-none border-blue-1;
}
</style>
