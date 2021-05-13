<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.5rem;
}
</style>
