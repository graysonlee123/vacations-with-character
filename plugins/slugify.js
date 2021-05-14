import slugify from 'slugify'

export default function ({ app }, inject) {
  inject('slugify', text => {
    return slugify(text, {
      replacement: '-',
      lower: true,
    })
  })
}
