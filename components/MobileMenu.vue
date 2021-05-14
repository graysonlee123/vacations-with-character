<template>
  <transition name="expand">
    <div
      id="mobile-navigation"
      :aria-hidden="open ? 'false' : 'true'"
      class="wrapper"
      v-show="open"
    >
      <ul class="list">
        <li class="row" v-for="{ slug, label } of links" :key="$slugify(label)">
          <a
            v-if="$links(slug)"
            class="link"
            :href="slug"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ label }}
          </a>
          <nuxt-link v-else class="link" :to="slug">
            {{ label }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      links: [
        {
          slug: '/',
          label: 'Home',
        },
        {
          slug: '/destinations',
          label: 'Destinations',
        },
        {
          slug: '/tickets',
          label: 'Tickets',
        },
        {
          slug: '/testimonials',
          label: 'Testimonials',
        },
        {
          slug: '/services',
          label: 'Services',
        },
        {
          slug: '/about',
          label: 'About',
        },
        {
          slug: 'https://vacationswithcharacter.blog',
          label: 'Blog',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts' as a;
@use '~/assets/scss/mixins' as m;

$border-style: 1px solid
  adjust-color(
    $color: a.color('white'),
    $alpha: -0.5,
  );

.wrapper {
  position: fixed;
  z-index: 5;
  top: 60px;
  left: 0;

  width: 100%;
  height: calc(100% - 60px);
  background-color: a.color('ocean');
  color: a.color('white');
  border-top: $border-style;
}

.list {
  padding: 2rem;
  list-style: none;
}

.row {
  padding: 0.25rem 0;

  &:not(:first-child) {
    border-top: $border-style;
  }
}

.link {
  text-decoration: none;
  color: inherit;

  &.nuxt-link-exact-active {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translateY(-50%);
      width: 7px;
      height: 7px;
      border-radius: 3.5px;
      border: 2px solid a.color('white');
    }
  }
}

@media screen and (min-width: 768px) {
  .wrapper {
    display: none;
  }
}

// Transition
.expand-enter-active,
.expand-leave-active {
  transition: height 700ms ease;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
