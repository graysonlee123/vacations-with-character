<template>
  <section class="cta">
    <div class="container">
      <nuxt-picture
        :src="`/images/girl-with-parent-with-castle.jpeg`"
        width="2220"
        height="1096"
        alt="Girl with her parent and a castle in background"
      />
      <div class="text-wrapper">
        <h2 class="title">
          An investment in travel is an investment in yourself!
        </h2>
        <div class="button-wrapper">
          <nuxt-link to="/quote" class="button"> Get Quote </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.container {
  position: relative;
}

.image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  vertical-align: bottom;
}

.text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  color: a.color('white');
}

.title {
  @include m.header();
}

.button-wrapper {
  margin-top: 1.75rem;
}

.button {
  @include m.button;
}

@media screen and (min-width: 768px) {
  .image {
    object-fit: initial;
    height: auto;
  }

  .container {
    @include m.container;

    border-radius: 6px;
    overflow: hidden;
    box-shadow: a.$shadow-box;
  }
}
</style>
