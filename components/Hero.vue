<template>
  <section class="hero">
    <div class="wrapper">
      <nuxt-picture
        :src="imageSrc"
        :width="imageWidth"
        :height="imageHeight"
        :alt="imageAlt"
        class="image"
      />
      <div class="text-wrapper">
        <div class="text">
          <h1><slot name="title">Title here...</slot></h1>
          <p>
            <slot name="subtitle"></slot>
          </p>
          <div v-if="link">
            <nuxt-link class="button" :to="link">
              <slot name="link">Button text...</slot>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    link: String,
    imageSrc: {
      type: String,
      default: '/images/girl-in-park-with-balloons.jpeg',
    },
    imageWidth: {
      type: Number,
      default: 1920,
    },
    imageHeight: {
      type: Number,
      default: 1180,
    },
    imageAlt: {
      type: String,
      default: 'A girl in the park with balloons',
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts' as a;
@use '~/assets/scss/mixins' as m;

.wrapper {
  position: relative;
}

.image {
  position: absolute;
  inset: 0;
  z-index: -1;

  ::v-deep img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
}

.text-wrapper {
  display: grid;
  place-content: center;
  width: 100%;
  height: min(500px, 80vh);

  background-color: rgba(0, 0, 0, 0.35);
  text-align: center;
  color: a.color('white');
}

.text {
  @include m.container;
  height: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text h1 {
  @include m.header($size: 'xl');
}

.text p {
  margin-top: 1rem;
  margin-bottom: 3rem;
  max-width: 60ch;
}

.button {
  @include m.button;
}
</style>
