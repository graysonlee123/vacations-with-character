<template>
  <Article :document="document" />
</template>

<script>
export default {
  async asyncData({ $content }) {
    const document = await $content('privacy-policy')
      .fetch()
      .catch(err => {
        console.error({ err })
        error({ statusCode: 404, message: 'Page Not Found' })
      })

    return { document }
  },
}
</script>
