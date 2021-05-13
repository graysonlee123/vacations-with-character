<template>
  <div class="dropdown">
    <ul>
      <li v-for="{ label, text } of items" :key="label">
        <p>
          <span>{{ label }}</span>
        </p>
        <p>{{ text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
