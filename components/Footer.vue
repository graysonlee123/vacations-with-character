<template>
  <footer class="footer">
    <div class="container">
      <div class="flex">
        <div v-for="{ title, links } of columns" :key="title">
          <span class="label">{{ title }}</span>
          <ul>
            <li v-for="{ label, slug } of links" :key="slug">
              <a
                v-if="$links(slug)"
                :href="slug"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ label }}
              </a>
              <nuxt-link v-else :to="slug">
                {{ label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <nuxt-link to="/">
              <img
                src="https://via.placeholder.com/108x108"
                width="54"
                height="54"
                alt="Vacations with Character Logo"
              />
            </nuxt-link>
          </div>
          <p class="copyright">
            Vacations with Character ® <br />All Rights Reserved, 2021.
          </p>
          <div class="socials">
            <a
              v-for="{ id, link, ariaLabel, alt } of socials"
              :key="id"
              class="social"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="ariaLabel"
            >
              <img
                src="https://via.placeholder.com/48x48"
                width="24"
                height="24"
                :alt="alt"
              />
            </a>
          </div>
          <p>
            <a :href="`tel:+1-${phone.plain}`">{{ phone.pretty }}</a
            ><br /><a :href="`mailto:${email}`" target="_blank">{{ email }}</a>
          </p>
        </div>
      </div>
      <div class="fine">
        <div class="badges">
          <span>
            <img
              src="https://via.placeholder.com/132x30"
              width="132"
              height="30"
              alt="Placeholder"
            />
          </span>
          <span>
            <img
              src="https://via.placeholder.com/95x37"
              width="95"
              height="37"
              alt="Placeholder"
            />
          </span>
          <span>
            <img
              src="https://via.placeholder.com/77x35"
              width="77"
              height="35"
              alt="Placeholder"
            />
          </span>
          <span>
            <img
              src="https://via.placeholder.com/70x33"
              width="70"
              height="33"
              alt="Placeholder"
            />
          </span>
        </div>
        <p>
          No part of this website may be reproduced in whole or in part without
          permission of Vacations with Character® LLC. <br /><br />
          As to artwork, logos and properties:<br />
          Copyright: Disney Destinations | Universal Orlando Resorts | Royal
          Caribbean Cruise Line | Carnival Cruise Line | Norwegian Cruise Line |
          Holland America Line | Princess Cruise Line | Sandals Resorts
          <br /><br />
          Vacations with Character® LLC is registered with the State of Florida
          as a Seller of Travel: Registration No. ST42097 | Vacations with
          Character® does not sell or solicit to residents of California
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'About',
          links: [
            {
              label: 'Home',
              slug: '/',
            },
            {
              label: 'Destinations',
              slug: '/destinations',
            },
            {
              label: 'Tickets',
              slug: '/tickets',
            },
            {
              label: 'Services',
              slug: '/services',
            },
            {
              label: 'About Us',
              slug: '/about',
            },
            {
              label: 'Wellbeing',
              slug: '/wellbeing',
            },
          ],
        },
        {
          title: 'Learn',
          links: [
            {
              label: 'Request a Quote',
              slug: '/quote',
            },
            {
              label: 'Happy Clients',
              slug: '/testimonials',
            },
            {
              label: 'Blog',
              slug: 'https://vacationswithcharacter.blog',
            },
            {
              label: 'Videos',
              slug: '/',
            },
            {
              label: 'Get Help',
              slug: '/contact',
            },
            {
              label: 'FAQs',
              slug: '/',
            },
          ],
        },
        {
          title: 'Legal',
          links: [
            {
              label: 'Privacy Policy',
              slug: '/privacy-policy',
            },
            {
              label: 'Terms / Conditions',
              slug: '/terms-conditions',
            },
            {
              label: 'Authorization',
              slug: '/authorization',
            },
          ],
        },
        {
          title: 'Other',
          links: [
            {
              label: 'Careers',
              slug: '/careers',
            },
            {
              label: 'Something 1',
              slug: '/',
            },
            {
              label: 'Something 2',
              slug: '/',
            },
          ],
        },
      ],
    }
  },
  computed: {
    socials() {
      return this.$store.state.socials
    },
    email() {
      return this.$store.state.email
    },
    phone() {
      return this.$store.state.phone
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts' as a;
@use '~/assets/scss/mixins' as m;

ul {
  list-style: none;
}

li + li {
  margin-top: 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: a.color('ocean');
}

.footer {
  margin-top: 8.25rem;
  padding-bottom: 1rem;

  color: a.color('gray');
  @include m.fs(sm);
}

.container {
  @include m.container;
}

.flex {
  display: flex;
  flex-direction: column;
  gap: 4rem 3.625rem;

  margin-bottom: 3.125rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  border-top: 1px solid a.color('light-gray');
  border-bottom: 1px solid a.color('light-gray');
}

.label {
  display: inline-block;
  margin-bottom: 2rem;

  @include m.fs(base);
  font-weight: bold;
}

.copyright {
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
}

.socials {
  margin-bottom: 1rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0.75rem;
}

.social {
  transition: transform 200ms ease;
}

.social:hover {
  transform: scale(1.1);
}

.fine {
  @include m.fs('2xs');
  color: a.color('light-gray');
}

.badges {
  margin-bottom: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

@media screen and (min-width: 446px) {
  .flex {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
