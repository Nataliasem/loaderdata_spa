<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 22 22"
    fill="none"
    stroke-width="2"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 1L2.09344 11.6879C1.74463 12.1064 1.57023 12.3157 1.56756 12.4925C1.56524 12.6461 1.63372 12.7923 1.75324 12.8889C1.89073 13 2.16316 13 2.70802 13H9.99998L8.99998 21L17.9065 10.3121C18.2553 9.89358 18.4297 9.68429 18.4324 9.50754C18.4347 9.35388 18.3663 9.2077 18.2467 9.11111C18.1092 9 17.8368 9 17.292 9H9.99998L11 1Z"
    />
  </svg>
</template>

<script>
export default {
  name: 'AppIconLogin',
  props: {
    /**
     * Ширина
     * @type {number}
     */
    width: {
      type: Number,
      default: 24
    },

    /**
     * Высота
     * @type {number}
     */
    height: {
      type: Number,
      default: 24
    }
  }
}
</script>
