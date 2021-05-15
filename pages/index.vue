<template>
  <div>
    <Hero link="/">
      <template #title> Vacations with Character </template>
      <template #subtitle>
        Vacations with Character® is a Family-Owned, Full-Service, Authorized
        Travel Agency. Making your Vacations Dreams Come True in the Happiest
        Places on Earth is our Specialty!
      </template>
      <template #link> See Destinations </template>
    </Hero>

    <Notice>
      Worried about wellbeing and safety measures during the Covid-19 pandemic?
      <nuxt-link to="/wellbeing">Here’s what we’re doing to help.</nuxt-link>
    </Notice>

    <Spacer height="5.5rem" />

    <Container>
      <Row>
        <Column :width="[12, 8]">
          <ImageBox
            filename="french-polynesia-island.jpeg"
            :width="1464"
            :height="724"
            alt="French Polynesia Island"
            link="/services"
          >
            Our<br />Services
          </ImageBox>
        </Column>
        <Column :width="[12, 4]">
          <ImageBox
            filename="hat-camera-sunglasses.jpeg"
            :width="732"
            :height="732"
            alt="Hat, camera, and sunglasses on a table"
            link="/"
          >
            Why Book<br />With Us
          </ImageBox>
        </Column>
        <Column :width="[12, 4]">
          <BlocksSocial>
            <template v-slot:title>Follow us!</template>
            <template v-slot:text>
              We post about relevant <strong>news</strong>, fun
              <strong>photos</strong>, and helpful <strong>tips</strong> to save
              you time and money.
            </template>
          </BlocksSocial>
        </Column>
        <Column :width="[12, 4]">
          <ImageBox
            filename="kayaking-at-sunset.jpeg"
            :width="724"
            :height="724"
            alt="Couple kayaking at sunset"
            link="/"
          >
            Meet Our<br />Team
          </ImageBox>
        </Column>
        <Column :width="[12, 4]">
          <ImageBox
            filename="palm-trees-from-below.jpeg"
            :width="724"
            :height="724"
            alt="Palm trees from below"
            link="/quote"
          >
            Request<br />a Quote
          </ImageBox>
        </Column>
      </Row>
    </Container>

    <Spacer height="8.5rem" />

    <DestinationSlider />

    <Spacer height="8.5rem" />

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

    <ImageCallToAction />

    <Spacer height="8.5rem" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
