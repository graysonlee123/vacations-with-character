<template>
  <div
    class="box"
    :class="{ 'box-full': fill }"
    :style="{ '--padding-top': !fill && paddingRatio }"
  >
    <div class="content">
      <img
        class="image"
        src="https://source.unsplash.com/600x600/?beach"
        alt="Placeholder"
      />
      <nuxt-link v-if="link" :to="link" class="link">
        <span class="text">
          <slot>Say Something...</slot>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: String,
      default: '1:1',
    },
    link: String,
  },
  computed: {
    fill() {
      return this.ratio === 'full'
    },
    paddingRatio() {
      const [width, height] = this.ratio.split(':')

      return `${(width / height) * 100}%`
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.box {
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%), 0px 0px 15px rgb(0 0 0 / 15%);
  border-radius: 6px;
  padding-top: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.link {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;

  text-align: center;
  text-decoration: none;
  color: a.color('white');
}

.text {
  @include m.header($weight: bold);
}

@media screen and (min-width: 768px) {
  .box {
    padding-top: var(--padding-top);
  }

  .box-full {
    height: 100%;
  }
}
</style>
