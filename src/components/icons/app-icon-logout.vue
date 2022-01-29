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
      d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
    />
    <path
      d="M16 17L21 12L16 7"
    />
    <path
      d="M21 12H9"
    />
  </svg>
</template>

<script>
export default {
  name: 'app-icon-logout',
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
