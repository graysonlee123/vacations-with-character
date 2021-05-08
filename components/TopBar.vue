<template>
  <section class="bar">
    <div class="container">
      <span class="tagline">
        Specializing in Disney and Universal Orlando&nbsp;Destinations&nbsp;♥
      </span>
      <span class="tel">
        <a href="tel:+1-800-908-3005"> (800) 908-3005 </a>
      </span>
      <span class="email">
        <a href="mailto:info@vacationswithcharacter.com" target="_blank">
          info@vacationswithcharacter.com
        </a>
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts' as a;
@use '~/assets/scss/mixins' as m;

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: a.color('ocean');
}

.bar {
  color: a.color('gray');
}

.container {
  @include m.container;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  @include m.fs(xs);
}

@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;
  }

  .tel {
    margin-left: auto;
  }
}
</style>
