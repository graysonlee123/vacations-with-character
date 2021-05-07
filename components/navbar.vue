<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo-wrapper">
        <nuxt-link to="/">
          <img
            class="logo"
            src="https://via.placeholder.com/88x88"
            width="44"
            height="44"
            alt="Vacations With Character Logo"
          />
        </nuxt-link>
      </div>
      <div class="links-wrapper">
        <nuxt-link
          class="link"
          v-for="{ label, slug } of links"
          :key="slug"
          :to="slug"
          >{{ label }}</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: 'Home',
          slug: '/',
        },
        {
          label: 'Destinations',
          slug: '/',
        },
        {
          label: 'Tickets',
          slug: '/',
        },
        {
          label: 'Testimonials',
          slug: '/',
        },
        {
          label: 'Services',
          slug: '/',
        },
        {
          label: 'About',
          slug: '/',
        },
        {
          label: 'Blog',
          slug: '/',
        },
      ],
    }
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

a.nuxt-link-active {
  font-weight: bold;
}

.navbar {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @include m.fs('base');
  color: a.color('white');
  background-color: a.color('ocean');
}

.container {
  @include m.container;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  vertical-align: bottom;
}

.links-wrapper {
  display: none;
}

.link {
  padding: 0.5rem 0.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

@media screen and (min-width: 768px) {
  .links-wrapper {
    display: initial;
  }
}
</style>
