<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <ul class="dropdowns">
      <li
        v-for="({ label, text }, index) of items"
        :key="makeSlug(label)"
        class="dropdown"
      >
        <div class="label">
          <button
            class="button"
            @click="e => handleClick(e, index)"
            :aria-expanded="index === openedItem ? 'true' : 'false'"
            :aria-controls="`#${makeSlug(label)}`"
          >
            {{ label }}
          </button>
        </div>
        <transition
          name="dropdown"
          @enter="handleTransitionEnter"
          @after-enter="handleTransitionAfterEnter"
          @leave="handleTransitionLeave"
        >
          <div
            :id="makeSlug(label)"
            :aria-hidden="index === openedItem ? 'false' : 'true'"
            class="content"
            v-show="index === openedItem"
          >
            <p class="text">{{ text }}</p>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openedItem: 0,
    }
  },
  methods: {
    handleClick(e, index) {
      e.preventDefault()

      if (this.openedItem === index) {
        this.openedItem = -1
      } else {
        this.openedItem = index
      }
    },
    handleTransitionEnter(el) {
      const width = getComputedStyle(el).width

      el.style.width = width
      el.style.position = 'absolute'
      el.style.visibility = 'hidden'
      el.style.height = 'auto'

      const height = getComputedStyle(el).height

      el.style.width = null
      el.style.position = null
      el.style.visibility = null
      el.style.height = 0

      // Force repaint
      getComputedStyle(el).height

      // Request animation
      requestAnimationFrame(() => {
        el.style.height = height
      })
    },
    handleTransitionAfterEnter(el) {
      el.style.height = 'auto'
    },
    handleTransitionLeave(el) {
      const height = getComputedStyle(el).height

      el.style.height = height

      // Force repaint
      getComputedStyle(el).height

      // Request animation
      requestAnimationFrame(() => {
        el.style.height = 0
      })
    },
    makeSlug(text) {
      return text.replace(' ', '-').trim().toLowerCase()
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/abstracts' as a;
@use '~/assets/scss/mixins' as m;

.dropdowns {
  list-style: none;
}

.title {
  @include m.header;
  color: a.color('deep-ocean');
  margin-bottom: 46px;
  padding-left: 20px;
}

.text {
  padding: 20px;
}

.button {
  appearance: none;
  background: none;
  border: none;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;

  position: relative;
  display: block;
  width: 100%;
  padding: 14px 20px 18px;

  cursor: pointer;

  text-align: left;
  font-weight: 500;

  border-bottom: 2px solid a.color('very-light-gray');

  transition: color 150ms ease, border-color 150ms ease;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 14px;
    height: 2px;
    background-color: a.color('light-gray');
  }

  &::after {
    transition: 150ms ease transform 150ms;
  }

  &[aria-expanded='true'] {
    color: a.color('ocean');
    border-color: a.color('ocean');

    &::after {
      transform: rotate(90deg);
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: height 300ms ease;
  overflow: hidden;
}

.dropdown-enter,
.dropdown-leave-to {
  height: 0;
}
</style>
