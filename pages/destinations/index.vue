<template>
  <div>
    <Hero>
      <template #title> Destinations </template>
      <template #subtitle>
        Our agents have the experience, expert knowledge, and training to not
        only help create an amazing vacation - but one you'll cherish forever.
      </template>
    </Hero>

    <Spacer height="4rem" />

    <Container
      v-for="(
        { label, image, imageAlt, text, link, linkText }, index
      ) of destinationItems"
      :key="$slugify(label)"
      :class="{ flip: index % 2 }"
    >
      <Row align="center">
        <Column :width="[12, 5]">
          <ImageBox
            :filename="image"
            :width="780"
            :height="780"
            :alt="imageAlt"
          />
        </Column>
        <Column :width="[0, 1]" />
        <Column :width="[12, 6]">
          <h2>{{ label }}</h2>
          <p>
            {{ text }}
          </p>
          <nuxt-link :to="link" class="button">
            {{ linkText }}
          </nuxt-link>
        </Column>
      </Row>

      <Spacer height="4rem" />
    </Container>

    <ImageCallToAction />

    <Spacer height="4rem" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      destinationItems: [
        {
          label: 'Disney',
          image: 'castle-at-twilight.jpeg',
          imageAlt: 'A castle at twilight with starts and moon visible',
          text:
            "There is so much to see and do! From Walt Disney World, Disneyland, Disney Cruise Line, Adventures by Disney, Disney's Beach Resorts, to Disney's Aulani Resort and Spa in Hawaii, ​we can help you plan a magical vacation with memories that will last a lifetime.",
          link: '/destinations/disney',
          linkText: 'Tell Me More',
        },
        {
          label: 'Universal Orlando',
          image: 'dragon-on-roof.jpeg',
          imageAlt: 'A dragon breathing fire from a rooftop',
          text:
            'This is the place where vacation becomes adventure - an entire universe of action, thrills, and excitement for all ages. Stay at a fabulous onsite resort, experience the fun of three amazing theme parks, enjoy unique dining and entertainment, plus much more.',
          link: '/destinations/universal',
          linkText: 'Tell Me More',
        },
        {
          label: 'Cruise Adventures',
          image: 'cruise-ship.jpeg',
          imageAlt: 'A cruise ship setting sail',
          text:
            "With multiple ships and endless adventures, cruises give you the chance to be in awe of the world again. Contact us for a Free Quote and we'll help you navigate the waters as cruises begin the return to sea and welcome passengers aboard once again.",
          link: '/destinations/cruising',
          linkText: 'Tell Me More',
        },
        {
          label: 'Adventures by Disney',
          image: 'family-adventuring-in-mountains.jpeg',
          imageAlt: 'Small family adventuring in the mountains',
          text:
            "We are dedicated to giving you the most enjoyable vacations and partner only with a trusted company who has years of experience. ​From TWO tour guides who meet you at the airport to the extraordinary experiences provided no where else, you'll enjoy an amazing adventure.",
          link: '/destinations/adventures-by-disney',
          linkText: 'Tell Me More',
        },
        {
          label: 'All Inclusive Resorts',
          image: 'thatch-roofs-and-resort-pool.jpeg',
          imageAlt: 'Thatched roofs and a resort pool',
          text:
            "Searching for the perfect destination? You have enough to do and we have information at our fingertips from Hawaii to the Caribbean or even Europe. Let us take the worry out of this part of your planning. ​Contact us for a Free Quote and tell us what you're dreaming of!",
          link: '/destinations/all-inclusive-resorts',
          linkText: 'Tell Me More',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.flip {
  direction: rtl;

  .column {
    direction: ltr;
  }
}

h2 {
  @include m.header;
  color: a.color('deep-ocean');
}

p,
p + .button {
  margin-top: 1rem;
}

.button {
  @include m.button;
}
</style>
