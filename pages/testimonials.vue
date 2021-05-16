<template>
  <div>
    <Hero link="/quote">
      <template #title> Happy Clients </template>
      <template #subtitle> This is why we do what we do! </template>
      <template #link> Get a Quote </template>
    </Hero>

    <Spacer height="4rem" />

    <Container>
      <h2 class="testimonials-header">Testimonials</h2>
      <Spacer height="2rem" />
      <div class="columns">
        <div
          class="item"
          v-for="({ name, quote }, i) of testimonials"
          :key="$slugify(name)"
          :class="{ odd: i % 2, wide: quote.length > 400 }"
        >
          <Testimonial class="testimonial" :name="name" :quote="quote" />
        </div>
      </div>
    </Container>

    <Spacer height="8.5rem" class="clear" />

    <Container>
      <Row>
        <Column :width="[12, 6]">
          <ImageBox
            filename="statue-and-dragon.jpeg"
            :width="880"
            :height="880"
            alt="A statue and a draon breathing fire"
          ></ImageBox>
        </Column>
        <Column :width="[12, 6]">
          <Dropdown :items="promiseDropdownItems" title="Our Promise To You" />
        </Column>
      </Row>
    </Container>

    <Spacer height="8.5rem" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: 'Kyle & Hannah',
          quote:
            'Jacqui - Hannah and I would like to take a minute to thank you and share the experience we had on our trip to Disney World. It was FANTASTIC. Thank you for your help and making our experience much more enjoyable!',
        },
        {
          name: 'Katie S',
          quote:
            'Allison was awesome! She planned the perfect trip to the parks for my family! She reserved great fast passes! She booked Bibbidi Bobbidi boutique for my daughter with short notice! Even got us dinner reservations! She made our trip planning stress free and so easy! ',
        },
        {
          name: 'Anonymous',
          quote:
            "Nicole helped us to have everything covered. Her flexibility and personal knowledge were a dream to work with. The trip was so seamless: she knew what we wanted and we are ao gratified and happy that we didn't have to do very much to have the best time that we could possibly have.",
        },
        {
          name: 'Jessie H',
          quote:
            "Jessica M. was so helpful in making sure we had every aspect of our trip planned. It was a huge help having everything already mapped out so we weren't wandering around one of the busiest places to vacation. Her tips helped us make the most of our trip and I HIGHLY recommend her!",
        },
        {
          name: 'Emily L',
          quote:
            'We just finished our 3rd family trip to Disney and first trip to Universal. We greatly  appreciated all of Jessica R’s help, including finding us a last minute breakfast reservation at Hollywood Studios! She was just a text away when we had day of questions about Jedi training and adding dining reservations, not to mention answering all our Universal dining plan questions and figuring out trip insurance. It was truly a magical vacation and we cannot wait to book our next one!',
        },
        {
          name: 'Michelle M',
          quote:
            'Robin - We had the best time!!! We got to do all the things we wanted to do and the Lowe’s Sapphire Falls Resort was absolutely beautiful - just as you said it would be. Thank you for everything from beginning to end. It truly was a magical vacation!',
        },
        {
          name: 'Sarah',
          quote:
            'Beth helped me get our Disney tickets and recommended many rides and opportunities to meet my family’s needs. It’s been many years since my husband and I have been there so she was very helpful in explaining all the new rules and processes like fast pass use and rider swap. She also sent a ton of great tip sheets that were really helpful! ',
        },
        {
          name: 'Hollie C',
          quote:
            'Amy helped us plan the best family vacation! She price checked every option and worked with us to find the perfect hotel. Any bumps in the road she fixed right away and gave us a very sweet thank you for booking with her. She was the best agent we have ever used!',
        },
        {
          name: 'Karyn C',
          quote:
            "Annemarie was great help in planning our family vacation last week (two families for a total of 7 people). She was patient & kind, listened to our concerns & offered a lot of help with getting us into character breakfasts, Fast Passes, air travel & everything in between. We all had a great time & are already planning another trip in a 2 years. She always answered our questions quickly & confidently. We can't thank her enough for the great memories that were made for our children & families.",
        },
        {
          name: 'M Walsch',
          quote:
            'Tracie is always willing to go the extra mile to make sure our trip is perfect! She has booked everything from huge family cruises to disney tickets. In addition to making the bookings she will help make sure every detail is perfect!',
        },
        {
          name: 'The Harris Family',
          quote:
            'We had a fantastic time! Our hotel, itinerary and theater tickets were truly the best! Thank you for always making our life easier when it comes to travel.',
        },
        {
          name: 'Donna F',
          quote:
            'We had a wonderful time and want to thank you for the great job you did in preparing everything we needed to make this trip so enjoyable! You thought of everything and the little personal touches meant a lot!',
        },
        {
          name: 'L Haynes',
          quote:
            'Thank you so much for helping us with our vacation. We already have found great benefit in working with you on our trips to Disney. You go above and beyond and we Thank you!!!',
        },
      ],
      promiseDropdownItems: [
        {
          label: 'Best Prices',
          text:
            'Having a good relationship with our suppliers allows us to provide the best prices possible for your vacation and even monitor it for new discounts right up until you travel, saving you time and money!',
        },
        {
          label: 'Personal Touch',
          text:
            'You will always have access to your agent and not a random person or computer. This also allows us to provide personal and thoughtful touches to your vacation - something that can\'t be "googled"!',
        },
        {
          label: 'Guidance',
          text:
            'The internet is overwhelming and impersonal! We have the knowledge, experience, tools. and connections to provide insightful, expert guidance for YOUR specific needs.',
        },
        {
          label: 'Memories',
          text:
            'We love what we do and provide the highest level of service to make your vacation a truly memorable one! We are proud to say more and more families TRUST us to plan their vacations each year!',
        },
        {
          label: 'Safety Net',
          text:
            "Sometimes things don't turn out as planned. We truly care for you from pre to post vacation and are here to assist you in case of emergency or travel disruptions, and more!",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.testimonials-header {
  @include m.header();
  color: a.color('deep-ocean');
}

.columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1rem;
  gap: 1rem;
}

.item {
  display: inline-block;
}

@media screen and (min-width: 768px) {
  .item.wide {
    grid-column: span 2;
  }
}
</style>
