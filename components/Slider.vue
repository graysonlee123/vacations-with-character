<template>
  <section class="destinations">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
    </div>
    <client-only>
      <Splide :options="mergedOptions">
        <slot>
          <SplideSlide> This slider is empty... </SplideSlide>
        </slot>
      </Splide>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      defaultOptions: {
        gap: 19,
        padding: 32,
        arrows: true,
        pagination: true,
        trimSpace: true,
      },
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    mergedOptions() {
      return Object.assign(this.defaultOptions, this.options)
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.container {
  @include m.container;
}

.title {
  @include m.header;
  color: a.color('deep-ocean');
  margin-bottom: 1.75rem;
}
</style>

<style lang="scss">
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.splide {
  .splide__track {
    padding-bottom: 3rem;
  }

  .splide__pagination {
    .splide__pagination__page {
      opacity: 1;
      background: a.color('very-light-gray');

      &.is-active {
        transform: scale(1);
        background: a.color('ocean');
      }
    }
  }

  .splide__arrow {
    background: adjust-color($color: a.color('white'), $alpha: -0.2);
    color: a.color('light-gray');
    opacity: 0.75;
    width: 38px;
    height: 38px;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 1;
    }

    &[disabled] {
      transition-duration: 400ms;
      opacity: 0;
    }

    path {
      fill: currentColor;
    }
  }
}
</style>
