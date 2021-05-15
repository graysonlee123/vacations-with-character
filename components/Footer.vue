<template>
  <footer class="footer">
    <Container size="sm">
      <div class="flex">
        <div v-for="{ title, links } of columns" :key="$slugify(title)">
          <span class="label">{{ title }}</span>
          <ul>
            <li v-for="{ label, slug } of links" :key="$slugify(label)">
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
                :src="require('~/assets/images/logo-button.svg')"
                width="54"
                height="54"
                alt="Vacations with Character Logo"
              />
            </nuxt-link>
          </div>
          <p class="copyright">
            Vacations with Character ® <br />All Rights Reserved, 2021.
          </p>
          <Socials />
          <p>
            <a :href="`tel:+1-${phone.plain}`">{{ phone.pretty }}</a
            ><br /><a :href="`mailto:${email}`" target="_blank">{{ email }}</a>
          </p>
        </div>
      </div>
      <div class="fine">
        <div class="badges">
          <span
            v-for="{ filename, width, height, alt } in badges"
            :key="$slugify(filename)"
          >
            <img
              :src="require(`~/assets/images/badges/${filename}`)"
              :width="width"
              :height="height"
              :alt="alt"
              :title="alt"
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
    </Container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      badges: [
        {
          filename: 'disney-authorized-vacation-planner.jpeg',
          width: 70.5,
          height: 33.5,
          alt: 'Disney Authorized Vacation Planner',
        },
        {
          filename: 'travel-leaders-network.jpeg',
          width: 78,
          height: 36,
          alt: 'Travel Leaders Network Member',
        },
        {
          filename: 'clia-agent.jpeg',
          width: 96.5,
          height: 36.5,
          alt: 'CLIA Agent',
        },
        {
          filename: 'universal-preferred-agency.jpeg',
          width: 132,
          height: 31.5,
          alt: 'Universal Preferred Travel Agency',
        },
      ],
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
              label: 'Careers',
              slug: '/careers',
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
              slug: '/questions',
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
          title: 'Destinations',
          links: [
            {
              label: 'Disney',
              slug: '/destinations/disney',
            },
            {
              label: 'Universal Orlando',
              slug: '/destinations/universal',
            },
            {
              label: 'Cruising Adventures',
              slug: '/destinations/cruising',
            },
            {
              label: 'Adventures by Disney',
              slug: '/destinations/adventures-by-disney',
            },
            {
              label: 'All Inclusive Resorts',
              slug: '/destinations/all-inclusive-resorts',
            },
          ],
        },
      ],
    }
  },
  computed: {
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
  padding-bottom: 1rem;

  color: a.color('gray');
  @include m.fs(sm);
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
