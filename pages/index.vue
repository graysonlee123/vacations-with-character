<template>
  <div>
    <HomeHero />
    <Notice>
      Worried about wellbeing and safety measures during the Covid-19 pandemic?
      <nuxt-link to="/wellbeing">Here’s what we’re doing to help.</nuxt-link>
    </Notice>
    <BlocksGrid>
      <BlocksLink width="wide" link="/services">Our<br />Services</BlocksLink>
      <BlocksLink link="/">Why Book <br />With Us</BlocksLink>
      <BlocksSocial>
        <template v-slot:title>Follow us!</template>
        <template v-slot:text>
          We post about relevant <strong>news</strong>, fun
          <strong>photos</strong>, and helpful <strong>tips</strong> to save you
          time and money.
        </template>
      </BlocksSocial>
      <BlocksLink link="/">Meet Our <br />Team</BlocksLink>
      <BlocksLink link="/quote">Request <br />a Quote</BlocksLink>
    </BlocksGrid>
    <DestinationSlider />
    <ImageCallToAction />
  </div>
</template>
