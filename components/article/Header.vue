<template>
  <header class="header">
    <h1>
      {{ title }}
    </h1>
    <p>{{ updated }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    updated: {
      type: String,
      required: true,
    },
  },
}
</script>
