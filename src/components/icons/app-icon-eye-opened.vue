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
      d="M0.916016 11.0003C0.916016 11.0003 4.58268 3.66699 10.9993 3.66699C17.416 3.66699 21.0827 11.0003 21.0827 11.0003C21.0827 11.0003 17.416 18.3337 10.9993 18.3337C4.58268 18.3337 0.916016 11.0003 0.916016 11.0003Z"
    />
    <path
      d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48122 12.5188 8.25 11 8.25C9.48122 8.25 8.25 9.48122 8.25 11C8.25 12.5188 9.48122 13.75 11 13.75Z"
    />
  </svg>
</template>

<script>
export default {
  name: 'app-icon-eye-opened',
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
