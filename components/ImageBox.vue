<template>
  <div class="box" :style="{ '--padding-top': paddingRatio }">
    <div class="content">
      <picture>
        <img
          class="image"
          :src="require(`~/assets/images/image-box/${filename}`)"
          :width="width"
          :height="height"
          :alt="alt"
        />
      </picture>
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
    filename: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    link: String,
  },
  computed: {
    paddingRatio() {
      return `${(this.height / this.width) * 100}%`
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
}
</style>
