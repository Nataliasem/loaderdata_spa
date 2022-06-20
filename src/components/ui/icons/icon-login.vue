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
      d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
    />
    <path d="M10 17L15 12L10 7" />
    <path d="M15 12H3" />
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
