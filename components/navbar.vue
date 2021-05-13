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
        <span v-for="{ label, slug } of links" :key="slug">
          <a
            v-if="$links(slug)"
            :href="slug"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ label }}
          </a>
          <nuxt-link v-else class="link" :to="slug">{{ label }}</nuxt-link>
        </span>
      </div>
      <div class="hamburger-wrapper">
        <button
          class="hamburger"
          aria-controls="mobile-navigation"
          :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
          @click="handleHamburgerClick"
        ></button>
      </div>
    </div>
    <MobileMenu :open="mobileMenuOpen" />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      links: [
        {
          label: 'Home',
          slug: '/',
        },
        {
          label: 'Destinations',
          slug: '/destinations',
        },
        {
          label: 'Tickets',
          slug: '/tickets',
        },
        {
          label: 'Testimonials',
          slug: '/testimonials',
        },
        {
          label: 'Services',
          slug: '/services',
        },
        {
          label: 'About',
          slug: '/about',
        },
        {
          label: 'Blog',
          slug: 'https://vacationswithcharacter.blog',
        },
      ],
    }
  },
  methods: {
    handleHamburgerClick(e) {
      e.preventDefault()

      this.mobileMenuOpen = !this.mobileMenuOpen
    },
  },
  watch: {
    $route() {
      this.mobileMenuOpen = false
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

a.nuxt-link-exact-active {
  font-weight: bold;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
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

.hamburger {
  @include m.button-reset;

  width: 42px;
  height: 42px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 2px;
    border-radius: 1px;
    background-color: a.color('white');
    transition: transform 600ms ease-in-out;
  }

  &::before {
    transform: translate(-50%, -50%) translateY(-4px);
  }

  &::after {
    transform: translate(-50%, -50%) translateY(4px);
  }

  &[aria-expanded='true'] {
    &::before {
      transform: translate(-50%, -50%) translateY(0) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) translateY(0) rotate(-45deg);
    }
  }
}

@media screen and (min-width: 768px) {
  .links-wrapper {
    display: initial;
  }

  .hamburger-wrapper {
    display: none;
  }
}
</style>
