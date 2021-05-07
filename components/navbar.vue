<template>
  <nav class="navbar">Navbar</nav>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts/' as a;

.navbar {
  background-color: a.custom-color('blue');
  padding: 2rem;
}
</style>
