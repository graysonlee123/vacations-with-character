<template>
  <figure class="person">
    <div class="flex">
      <div class="photo">
        <nuxt-picture
          :src="person.image"
          :width="200"
          :height="200"
          :alt="`Picture of ${person.name}`"
          class="image"
        />
      </div>
      <div class="details">
        <header class="name">
          {{ person.name }}
        </header>
        <p v-if="person.email" class="email">
          <a :href="`mailto:${person.email}`" target="_blank">
            {{ person.email }}
          </a>
        </p>
        <p v-if="person.phone" class="phone">
          <a :href="`tel:+${parsePhone(person.phone).tel}`">
            {{ parsePhone(person.phone).readable }}
            <span v-if="person.ext"> x {{ person.ext }}</span>
          </a>
        </p>
        <p v-if="person.other" class="other">
          {{ person.other }}
        </p>
      </div>
    </div>
  </figure>
</template>

<script>
import phoneify from 'phoneify'

export default {
  props: {
    person: {
      type: Object,
      required: true,
      validator: prop => {
        if (!prop.name) return false
        else return true
      },
    },
  },
  methods: {
    parsePhone(number) {
      const result = phoneify(number)

      console.log({ result })

      return {
        tel: result.countryCodeIntact.addDashes,
        readable: result.countryCodeRemoved.addTrailingSlashes,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.person {
  margin-bottom: 2rem;
}

.flex {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.5rem 1.5rem;
  text-align: center;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 200px minmax(0, 1fr);
    align-items: center;
    text-align: left;
  }
}

.photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-inline: auto;

  ::v-deep img {
    width: 100%;
  }
}

.name {
  @include m.fs('lg');
  font-weight: 300;
  color: a.color('deep-ocean');
}

.name,
.phone,
.email {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.phone a,
.email a {
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}
</style>
