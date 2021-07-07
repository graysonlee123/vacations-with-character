<template>
  <div>
    <Spacer height="6rem" />
    <Container size="sm">
      <h1 v-if="error.statusCode === 404">404 Not Found</h1>
      <h1 v-else>Error</h1>
      <Spacer height="2rem" />
      <p>
        <nuxt-link to="/" class="button"> Back to Home </nuxt-link>
      </p>
    </Container>
    <Spacer height="6rem" />
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;

.button {
  @include m.button;
}
</style>
