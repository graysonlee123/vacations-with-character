<template>
  <section class="destinations">
    <div class="container">
      <h2 class="title">Destinations - Where the Fun Begins</h2>
    </div>
    <client-only>
      <Splide :options="splideOptions">
        <SplideSlide>
          <ImageBox
            filename="castle-at-twilight.jpeg"
            :width="780"
            :height="780"
            alt="Castle at twilight with stars and moon"
            link="/destinations/disney"
            >Disney<br />
            Destinations</ImageBox
          >
        </SplideSlide>
        <SplideSlide>
          <ImageBox
            filename="dragon-on-roof.jpeg"
            :width="780"
            :height="780"
            alt="A dragon breathing fire from a rooftop"
            link="/destinations/universal-orlando"
            >Universal<br />
            Orlando</ImageBox
          >
        </SplideSlide>
        <SplideSlide>
          <ImageBox
            filename="cruise-ship.jpeg"
            :width="780"
            :height="780"
            alt="A cruise ship setting sail"
            link="/destinations/cruising"
            >Cruising<br />
            Adventures</ImageBox
          >
        </SplideSlide>
        <SplideSlide>
          <ImageBox
            filename="family-adventuring-in-mountains.jpeg"
            :width="780"
            :height="780"
            alt="A small family adventuring in the mountains"
            link="/destinations/adventures-by-disney"
            >Adventures by<br />
            Disney</ImageBox
          >
        </SplideSlide>
        <SplideSlide>
          <ImageBox
            filename="thatch-roofs-and-resort-pool.jpeg"
            :width="780"
            :height="780"
            alt="Thatch roofs and resort pool"
            link="/destinations/all-inclusive-resorts"
            >All-inclusive<br />
            Resorts</ImageBox
          >
        </SplideSlide>
      </Splide>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      splideOptions: {
        fixedWidth: 390,
        fixedHeight: 390,
        gap: 19,
        padding: 32,
        arrows: true,
        pagination: true,
        trimSpace: true,
        breakpoints: {
          456: {
            arrows: false,
            fixedWidth: 240,
            fixedHeight: 240,
          },
        },
      },
    }
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
</style>
