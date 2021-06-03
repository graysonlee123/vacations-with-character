<template>
  <figure class="card">
    <blockquote class="blockquote">
      <div class="icon">
        <svg
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5107 1.71838C8.64984 3.214 6.68091 4.6619 5.60388 6.06206C4.56052 7.43039 4.03883 8.92602 4.03883 10.5489C4.03883 11.4718 4.32492 12.2355 4.89709 12.8401C5.46926 13.4447 6.14239 13.9539 6.9165 14.3675C7.72427 14.7494 8.41424 15.0835 8.98641 15.3699C9.59223 15.6245 9.89515 15.8791 9.89515 16.1337C9.89515 17.3111 9.49126 18.2498 8.68349 18.9499C7.87573 19.65 6.74822 20 5.30097 20C3.61812 20 2.3055 19.4909 1.36311 18.4726C0.454369 17.4224 0 15.9109 0 13.9379C0 12.0605 0.353398 10.3262 1.06019 8.73509C1.76699 7.11218 2.87767 5.58473 4.39223 4.15274C5.94045 2.68894 7.9767 1.30469 10.501 0L11.5107 1.71838ZM26 1.71838C23.1392 3.214 21.1702 4.6619 20.0932 6.06206C19.0498 7.43039 18.5282 8.92602 18.5282 10.5489C18.5282 11.4718 18.8142 12.2355 19.3864 12.8401C19.9586 13.4447 20.6317 13.9539 21.4058 14.3675C22.2136 14.7494 22.9036 15.0835 23.4757 15.3699C24.0816 15.6245 24.3845 15.8791 24.3845 16.1337C24.3845 17.3111 23.9806 18.2498 23.1728 18.9499C22.365 19.65 21.2375 20 19.7903 20C18.1074 20 16.7948 19.4909 15.8524 18.4726C14.9437 17.4224 14.4893 15.9109 14.4893 13.9379C14.4893 12.0605 14.8427 10.3262 15.5495 8.73509C16.2563 7.11218 17.367 5.58473 18.8816 4.15274C20.4298 2.68894 22.466 1.30469 24.9903 0L26 1.71838Z"
            fill="currentColor"
            class="path"
          />
        </svg>
      </div>
      <p class="quote">{{ quote }}</p>
      <figcaption class="name">&mdash; {{ name }}</figcaption>
    </blockquote>
  </figure>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/mixins' as m;
@use '~/assets/scss/abstracts' as a;

.card {
  border-radius: 6px;
  box-shadow: a.$shadow-box;
  padding: 2rem 1rem;
}

.card,
.blockquote {
  height: 100%;
}

.blockquote {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

.name {
  @include m.fs('sm');
  padding-top: 0.5rem;
  font-weight: bold;
}

.quote {
  font-family: a.$serif-families;
}

.icon {
  padding-bottom: 0.5rem;
  margin-bottom: auto;
}

.card path {
  fill: a.color('ocean');
}

.odd {
  .card {
    background-color: a.color('ocean');
    color: a.color('white');
  }

  path {
    fill: a.color('white');
  }
}
</style>
