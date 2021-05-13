<template>
  <section class="destinations">
    <div class="container">
      <h2 class="title">Destinations - Where the Fun Begins</h2>
    </div>
    <client-only>
      <Splide :options="splideOptions">
        <SplideSlide>
          <BlocksLink link="/destinations">Destinations</BlocksLink>
        </SplideSlide>
        <SplideSlide>
          <BlocksLink link="/destinations">Destinations</BlocksLink>
        </SplideSlide>
        <SplideSlide>
          <BlocksLink link="/destinations">Destinations</BlocksLink>
        </SplideSlide>
        <SplideSlide>
          <BlocksLink link="/destinations">Destinations</BlocksLink>
        </SplideSlide>
        <SplideSlide>
          <BlocksLink link="/destinations">Destinations</BlocksLink>
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
        flickMaxPages: 3,
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
</style>
