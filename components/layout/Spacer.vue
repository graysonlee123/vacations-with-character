<template>
  <div :style="{ height }" role="separator"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      required: true,
      validator: prop => {
        const regex = /([0-9])*(\.([0-9]))*?(rem|px|\%)/g

        return regex.test(prop)
      },
    },
  },
}
</script>
