<template>
  <main>
    <TopBar class="desktop" />
    <Navbar />
    <Spacer height="6rem" />
    <Container size="sm">
      <h2>Under Construction!</h2>
      <p>Please check back soon...</p>
      <Spacer height="2rem" />
      <p>
        <nuxt-link to="/" class="button"> Back to Home </nuxt-link>
      </p>
    </Container>
    <Spacer height="6rem" />
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;

.button {
  @include m.button;
}

.desktop {
  display: none;
}

@media screen and (min-width: 768px) {
  .desktop {
    display: block;
  }
}
</style>

<style lang="scss">
html {
  margin-top: 60px;
}
</style>
