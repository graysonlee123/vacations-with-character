<template>
  <article class="article">
    <ArticleHeader :title="document.title" :updated="document.updated" />
    <main class="main">
      <nuxt-content :document="document" />
    </main>
  </article>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@use '~/assets/scss/base/content';
</style>
