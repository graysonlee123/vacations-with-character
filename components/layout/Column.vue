<template>
  <div
    class="column"
    :class="[
      `width-${Array.isArray(width) ? width[0] : width}`,
      Array.isArray(width) && width[1] && `width-${width[1]}-lg`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, Array],
      required: true,
      validator: prop => {
        if (typeof prop === 'number') {
          return prop < 13
        } else {
          prop.forEach(value => {
            if (value < 13) return false
          })

          return true
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;

@for $i from 1 through 12 {
  .width-#{$i} {
    grid-column-start: span #{$i};
  }
}

@media screen and (min-width: 768px) {
  @for $i from 1 through 12 {
    .width-#{$i}-lg {
      grid-column-start: span #{$i};
    }
  }
}
</style>
