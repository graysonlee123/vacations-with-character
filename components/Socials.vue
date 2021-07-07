<template>
  <div class="socials">
    <a
      v-for="{ id, link, ariaLabel, alt } of socials"
      :key="$slugify(id)"
      class="social"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="ariaLabel"
    >
      <img
        :src="`/images/social-icons/${id}.svg`"
        :width="size"
        :height="size"
        :alt="alt"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 24,
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

.socials {
  margin-bottom: 1rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.75rem;
}

.social {
  @include m.social-hover;
}
</style>
