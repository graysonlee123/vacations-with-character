<template>
  <article class="article">
    <header class="header">
      <h1>
        {{ document.title }}
      </h1>
      <p>{{ document.updated }}</p>
    </header>
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
