<template>
  <div>
    <Hero
      imageSrc="/images/girl-in-park-with-balloons.jpeg"
      :imageWidth="1920"
      :imageHeight="1180"
      imageAlt="Girl in park with balloons"
    >
      <template #title>Together, We Thrive</template>
      <template #subtitle
        >We understand life is made for living, for celebrating - and that's a
        passion and philosophy we live by.</template
      >
    </Hero>
    <Spacer height="4rem" />
    <Container>
      <Row>
        <Column :width="[12, 6]" v-for="person of people" :key="person.email">
          <Person :person="person" />
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: 'Amy Vitelli',
          phone: 8009083005,
          ext: 222,
          email: 'amy@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Andrew Collins',
          phone: 3023886048,
          email: 'andrew@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'AnneMarie Gangi',
          phone: 8009083005,
          ext: 203,
          email: 'annemarie@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Ashley Bell',
          phone: 8009083005,
          ext: 219,
          email: 'ashley@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Cara Enos',
          phone: 8009083005,
          ext: 224,
          email: 'cara@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Beth Bragg',
          phone: 8009083005,
          ext: 210,
          email: 'beth@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Denise Wenzel',
          phone: 8009083005,
          ext: 225,
          email: 'denise@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Jacqui Hudgins',
          phone: 8009083005,
          ext: 204,
          email: 'jacqui@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Jenny Beretto',
          phone: 4018644016,
          email: 'jenny@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Jerry Callahan',
          phone: 8009083005,
          ext: 201,
          email: 'jerry@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Jessica McCorvey',
          phone: 8009083005,
          ext: 208,
          email: 'jessicam@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Jessica Ripple',
          phone: 4046410249,
          email: 'jessica@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Kerrin Monroe',
          phone: 8009083005,
          ext: 212,
          email: 'kerrin@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Kristen Geltman',
          phone: 8009083005,
          ext: 216,
          email: 'kristen@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Lauren Leigh',
          phone: 8009083005,
          ext: 206,
          email: 'lauren@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Meghan Bentley',
          phone: 8009083005,
          ext: 220,
          email: 'meghan@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Piper Ross',
          other: 'Agent in training',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Shyla Lyons',
          phone: 8009083005,
          ext: 221,
          email: 'shyla@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Staci Brinson',
          phone: 8009083005,
          ext: 202,
          email: 'staci@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Tracie Perkins',
          phone: 8009083005,
          ext: 207,
          email: 'tracie@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
        {
          name: 'Robin Gantek',
          phone: 8809083005,
          ext: 0,
          email: 'robin@vacationswithcharacter.com',
          image: '/images/people/amy-vitelli.jpg',
        },
      ],
    }
  },
}
</script>
