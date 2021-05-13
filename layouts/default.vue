<template>
  <main>
    <TopBar class="desktop" />
    <Navbar />
    <Nuxt />
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
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
