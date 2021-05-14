<template>
  <div class="block">
    <div class="text-wrapper">
      <h3 class="title">
        <slot name="title">Title</slot>
      </h3>
      <p class="text">
        <slot name="text"></slot>
      </p>
      <Socials :size="48" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.block {
  aspect-ratio: unset;
  grid-row-start: 5;
  margin-top: 4rem;
  overflow: hidden;
}

.text-wrapper {
  padding: 0.5rem;
}

.title {
  @include m.header;
  color: a.color('deep-ocean');
  margin-bottom: 1rem;
}

.text {
  margin-bottom: 1rem;
}

@media screen and (min-width: 768px) {
  .block {
    aspect-ratio: 1;
    margin-top: 0;
    grid-row-start: unset;
  }
}

@media screen and (min-width: 1200px) {
  .text-wrapper {
    padding: 2.5rem;
  }

  .text {
    margin-bottom: 3rem;
  }
}
</style>
