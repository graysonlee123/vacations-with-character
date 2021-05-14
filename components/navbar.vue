<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo-wrapper">
        <nuxt-link to="/">
          <img
            class="logo"
            :src="require('~/assets/images/logo.svg')"
            width="38"
            height="38.07"
            alt="Vacations With Character Logo"
          />
        </nuxt-link>
      </div>
      <div class="links-wrapper">
        <span v-for="{ label, slug } of links" :key="$slugify(label)">
          <a
            v-if="$links(slug)"
            class="link"
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
  height: 60px;
  z-index: 5;
  display: flex;
  align-items: center;

  @include m.fs('base');
  color: a.color('white');
  background-color: a.color('ocean');
}

.container {
  @include m.container;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
