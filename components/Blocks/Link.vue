<template>
  <div
    class="block"
    :class="{ 'block-wide': width === 'wide', 'block-tall': height === 'tall' }"
  >
    <img
      src="https://via.placeholder.com/100x100"
      alt="Placeholder"
      class="image"
    />
    <div class="text-wrapper">
      <nuxt-link :to="link" class="link">
        <span class="link-text">
          <slot>Title</slot>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.block {
  aspect-ratio: 1;
  position: relative;
  @include m.box;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.link {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  text-align: center;
  color: a.color('white');
  text-decoration: none;
}

.link-text {
  @include m.header($weight: bold);
}

@media screen and (min-width: 768px) {
  .image {
    transition: transform 300ms ease-in-out 100ms;
  }

  .link-text {
    transition: transform 200ms ease;
  }

  .block:hover .image {
    transform: scale(1.1);
  }

  .block:hover .link-text {
    transform: scale(1.1);
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
</style>
