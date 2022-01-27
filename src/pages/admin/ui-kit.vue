<template>
  <!-- КНОПКИ -->
  <div class="button-section flex justify-between">
    <div class="font-bold text-size-42">
      BUTTONS
    </div>

    <div class="flex flex-grow-1 space-x-10">
      <!-- BUTTON-MAIN -->
      <div class="flex flex-col space-y-6">
        <button
          type="button"
          class="app-button-main"
        >
          Main default
        </button>
        <button
          type="button"
          class="app-button-main hover"
        >
          Main hover
        </button>
        <button
          type="button"
          class="app-button-main active"
        >
          Main active
        </button>
        <button
          type="button"
          class="app-button-main disabled"
        >
          Main disabled
        </button>
      </div>

      <!-- BUTTON-SECONDARY -->
      <div class="flex flex-col space-y-6">
        <button
          type="button"
          class="app-button-secondary"
        >
          Secondary default
        </button>
        <button
          type="button"
          class="app-button-secondary hover"
        >
          Secondary hover
        </button>
        <button
          type="button"
          class="app-button-secondary active"
        >
          Secondary active
        </button>
        <button
          type="button"
          class="app-button-secondary disabled"
        >
          Secondary disabled
        </button>
      </div>

      <!-- BUTTON-ICON -->
      <div class="flex flex-col space-y-6">
        <button
          type="button"
          class="app-button-icon text-size-30"
        >
          &#9734;
        </button>
        <button
          type="button"
          class="app-button-icon text-size-30 hover"
        >
          &#9734;
        </button>
        <button
          type="button"
          class="app-button-icon text-size-30 active"
        >
          &#9734;
        </button>
        <button
          type="button"
          class="app-button-icon text-size-30 disabled"
        >
          &#9734;
        </button>
      </div>
    </div>
  </div>

  <!-- TODO: Шрифт-->
  <!-- TODO: Иконки-->
</template>

<script>
export default {
  name: 'ui-kit'
}
</script>

<style>
.button-wrapper {
  @apply flex;
}
</style>
