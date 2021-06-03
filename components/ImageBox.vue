<template>
  <div
    class="box"
    :class="{ 'box-hover': link }"
    :style="{ '--padding-top': paddingRatio }"
  >
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
  box-shadow: a.$shadow-box;
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

// Hover
.box-hover {
  .image {
    transition: transform 800ms ease;
  }

  .text {
    transition: transform 700ms cubic-bezier(0.79, -1.04, 0.3, 1.5);
  }

  &:hover {
    .image {
      transform: scale(1.05);
    }

    .text {
      transform: scale(1.1);
    }
  }
}
</style>
