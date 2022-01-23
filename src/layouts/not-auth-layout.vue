<template>
  <div>
    <div>This is a layout for not-authenticated users</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NotAuthLayout'
}
</script>
