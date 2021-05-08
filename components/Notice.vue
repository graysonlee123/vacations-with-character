<template>
  <section class="notice">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.notice {
  padding-top: 1rem;
  padding-bottom: 1rem;

  text-align: center;
  color: a.color('white');
  @include m.fs;
  background-color: a.color('ocean');
}

.container {
  @include m.container;
}

a {
  color: inherit;
  text-decoration: underline;
}
</style>
