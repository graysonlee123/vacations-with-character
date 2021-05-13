<template>
  <div
    class="block"
    :class="{ 'block-wide': width === 'wide', 'block-tall': height === 'tall' }"
  >
    <div class="text-wrapper">
      <h3 class="title">
        <slot name="title">Title</slot>
      </h3>
      <p class="text">
        <slot name="text"></slot>
      </p>
      <div class="socials">
        <a
          v-for="{ id, link, ariaLabel, alt } of socials"
          :key="id"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="ariaLabel"
          class="social"
        >
          <img
            src="https://via.placeholder.com/96x96"
            width="48"
            height="48"
            :alt="alt"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
  },
  computed: {
    socials() {
      return this.$store.state.socials
    },
  },
}
</script>

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

.socials {
  margin-top: 1rem;
  display: flex;
  gap: 14px;
}

.social {
  @include m.social-hover;
}

@media screen and (min-width: 768px) {
  .block {
    aspect-ratio: 1;
    margin-top: 0;
    grid-row-start: unset;
  }

  .block-wide {
    aspect-ratio: 2 / 1;
    grid-column: auto / span 2;
  }

  .block-tall {
    aspect-ratio: 1 / 2;
    grid-row: auto / span 2;
  }

  .block-tall.block-wide {
    aspect-ratio: 1;
  }
}

@media screen and (min-width: 1200px) {
  .text-wrapper {
    padding: 2.5rem;
  }

  .socials {
    margin-top: 2.5rem;
    flex-flow: row wrap;
    max-width: 200px;
  }
}
</style>
