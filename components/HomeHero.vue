<template>
  <section class="hero">
    <div class="wrapper">
      <picture>
        <source
          :srcset="
            require('~/assets/images/girl-in-park-with-balloons.jpeg?webp')
          "
          type="image/webp"
        />
        <source
          :srcset="require('~/assets/images/girl-in-park-with-balloons.jpeg')"
          type="image/jpeg"
        />
        <img
          class="image"
          :src="require('~/assets/images/girl-in-park-with-balloons.jpeg?webp')"
          width="1920"
          height="1180"
          alt="Girl in a theme park with balloons"
        />
      </picture>
      <div class="text-wrapper">
        <div class="text">
          <h1>Vacations with Character</h1>
          <p>
            Vacations with Character® is a Family-Owned, Full-Service,
            Authorized Travel Agency. Making your Vacations Dreams Come True in
            the Happiest Places on Earth is our Specialty!
          </p>
          <div>
            <nuxt-link class="button" to="/destinations">
              See Destinations
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts' as a;
@use '~/assets/scss/mixins' as m;

.wrapper {
  position: relative;
}

.image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  vertical-align: bottom;
}

.text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  color: a.color('white');
}

.text {
  @include m.container;
  height: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text h1 {
  @include m.header($size: 'xl');
}

.text p {
  margin-top: 1rem;
  margin-bottom: 3rem;
  max-width: 60ch;
}

.button {
  @include m.button;
}

@media screen and (min-width: 768px) {
  .image {
    height: auto;
    max-height: 728px;
  }
}
</style>
