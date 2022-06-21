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
      d="M10 7L14 11M14 11L10 15M14 11H1M1.33782 6C3.06687 3.01099 6.29859 1 10 1C15.5228 1 20 5.47715 20 11C20 16.5228 15.5228 21 10 21C6.29859 21 3.06687 18.989 1.33782 16"
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
