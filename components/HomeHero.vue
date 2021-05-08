<template>
  <section class="hero">
    <div class="wrapper">
      <img
        class="image"
        src="https://via.placeholder.com/1440x728?text=Placeholder"
        alt="Placeholder"
      />
      <div class="text-wrapper">
        <div class="text">
          <h1>Vacations with Character</h1>
          <p>
            Vacations with Character® is a Family-Owned, Full-Service,
            Authorized Travel Agency. Making your Vacations Dreams Come True in
            the Happiest Places on Earth is our Specialty!
          </p>
          <div>
            <nuxt-link class="button" :to="{ hash: 'destinations' }">
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
