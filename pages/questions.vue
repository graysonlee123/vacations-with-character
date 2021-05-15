<template>
  <div>
    <Spacer height="4rem" />

    <Container>
      <Row align="center">
        <Column :width="[12, 6]">
          <Dropdown title="Frequently Asked Questions" :items="questions" />
        </Column>
      </Row>
    </Container>

    <Spacer height="4rem" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          label: 'How much are your services?',
          text:
            "Free! We don't charge you at all for our services. You will never pay more when you book with us. In fact, in most cases you’ll save money and, depending on the type of vacation, you may even receive exclusive amenities like shipboard credits, prepaid gratuities, cabin upgrades, a gift card or more.",
        },
        {
          label: 'Can you save me money?',
          text:
            "When it comes to vacations we have access to the best prices possible and in many cases, to private sales not available to the general public. You will never pay more when you book with us. In fact, in most cases you’ll save money and, depending on the type of vacation, you may even receive exclusive amenities like shipboard credits, prepaid gratuities, cabin upgrades, a gift card or more. We also monitor our client's reservations for future discounts and apply them automatically! You won't find that level of service when working with a supplier directly.",
        },
        {
          label: 'What are the perks of a travel agent?',
          text:
            "We have the knowledge, experience, connections, and training needed to help you plan that perfect, stress-free vacation you have been dreaming of! Plus... we've got your back should anything go wrong. This is an invaluable service, something the internet can't provide!",
        },
        {
          label: 'What if I like to plan things myself?',
          text:
            'As professionals, we truly listen to your needs and we can do as little or as much as you need us to do when it comes to your vacation. You have complete control and access to your reservations online - just as you would if you booked it yourself. Nothing changes except that we are here to answer any questions you may have, share our expertise if needed, and because of our knowledge, make certain all of the details are perfect so there are no costly mistakes.',
        },
        {
          label: "I'm already booked but want your services!",
          text:
            "You can transfer your reservation to us, but don't worry - if you transfer your reservation to our agency, it remains the same! For example, if you have booked a cruise on your own and you really love your cabin choice, you get to keep the same cabin, same booking number, and the same rate as you have with the cruise line but you will also get to take advantage of our offers and our services.",
        },
        {
          label: 'So... how does it work?',
          text:
            'To benefit from these extra perks plus our personal travel assistance and expertise, you must book your reservation with us or transfer your reservation to us. Also, when you book with us, please know all financial transactions are handled directly through the supplier. As a policy, we never handle cash or accept payments to our agency at any time. This will be evidenced on your credit card billing statement or by your financial institute.',
        },
        {
          label: 'How do we get started?',
          text:
            "Simply contact one of our Travel Professionals or fill out a quote form! For those wishing to transfer your reservation, most suppliers encourage clients to work with Authorized Travel Agents and therefore, have made the process to transfer your booking over to our agency fairly easy. There are some stipulations, so you'll want to contact one of our Travel Professionals for more information. Usually, all that's required is a simple form to fill out. Once your booking as been successfully transferred, we will begin to provide our personal assistance and automatically add any special offers and/or amenities.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;
</style>
