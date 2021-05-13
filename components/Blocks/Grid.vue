<template>
  <section class="blocks">
    <div class="container">
      <h2 class="title">Full Service - An Authorized Travel Agency</h2>
      <div class="grid">
        <slot> Add a block to the slot of this component. </slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.container {
  @include m.container;
}

.title {
  margin-bottom: 1.75rem;

  @include m.header;
  color: a.color('deep-ocean');
}

.grid {
  display: grid;
  gap: 1rem 0.75rem;
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
