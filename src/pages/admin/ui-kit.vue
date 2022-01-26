<template>
  <div class="page-title">
    UI KIT
  </div>
  <!-- КНОПКИ -->
  <div class="button-wrapper">
    <!-- MAIN -->
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

    <!-- SECONDARY -->
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

  <!-- TODO: Шрифт-->
  <!-- TODO: Иконки-->
</template>

<script>
export default {
  name: 'ui-kit'
}
</script>

<style>
.page-title {
  @apply font-bold pb-6;
}

.button-wrapper {
  @apply grid grid-cols-4 gap-4;
}

.app-button-main {
  @apply text-white bg-green-1 py-3 px-6;
  @apply border border-transparent;
  border-radius: 50px;
}

.app-button-main:hover,
.app-button-main.hover {
  background-color: #3da378;
}

.app-button-main:active,
.app-button-main.active {
  @apply border border-pink;
}

.app-button-main:disabled,
.app-button-main.disabled {
  color: #bcbcbc;
  background-color: #dbdbdb;
}

.app-button-secondary {
  @apply border-green-3 text-grey-3 py-3 px-6;
  border-width: 2px;
  border-radius: 50px;
}

.app-button-secondary:hover,
.app-button-secondary.hover {
  @apply border-green-1 text-green-1;
}

.app-button-secondary:active,
.app-button-secondary.active {
  border-color: #858585;
  color: #858585;
}

.app-button-secondary:disabled,
.app-button-secondary.disabled {
  @apply text-grey-2;
  border-color: #9c9c9c;
}

</style>
