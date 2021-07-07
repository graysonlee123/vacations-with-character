<template>
  <section class="bar">
    <div class="container">
      <span class="tagline">
        Specializing in Disney and Universal Orlando&nbsp;Destinations&nbsp;♥
      </span>
      <span class="tel">
        <a :href="`tel:+1-${phone.plain}`">{{ phone.pretty }}</a>
      </span>
      <span class="email">
        <a :href="`mailto:${email}`" target="_blank">
          {{ email }}
        </a>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    email() {
      return this.$store.state.email
    },
    phone() {
      return this.$store.state.phone
    },
  },
}
</script>

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

.container {
  @include m.container;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  @include m.fs(sm);
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
