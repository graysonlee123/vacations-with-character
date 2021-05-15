<template>
  <div class="row" :class="{ 'align-center': align === 'center' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'stretch',
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5rem;
}

.align-center {
  align-items: center;
}
</style>
