export default function ({ app }, inject) {
  inject('links', link => {
    const regex = /^http(s)?:\/\//

    return regex.test(link)
  })
}
