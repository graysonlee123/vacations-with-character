<template>
  <div
    :class="{ container: size === 'DEFAULT', 'container-sm': size === 'sm' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'DEFAULT',
      validator: prop => ['DEFAULT', 'sm'].indexOf(prop) > -1,
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;

.container {
  @include m.container;
}

.container-sm {
  @include m.container('sm');
}
</style>
