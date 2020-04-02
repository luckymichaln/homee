<template>
  <section class="services-hero">
    <div class="content">
      <header class="services-hero__header">
        <div class="header-heading__wrapper">
          <prismic-rich-text
            :field="heading"
            class="header-heading heading-primary"
          />
          <div class="header-heading-badge">
          </div>
        </div>
        <prismic-rich-text
          :field="text"
          class="header-text text"
        />
      </header>
      <div class="services-hero__image">
        <img
          :src="image.url"
          :alt="image.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: Array,
      default: () => []
    },
    text: {
      type: Array,
      default: () => []
    },
    image: {
      type: Object,
      default: () => {}
    },
    theme: String,
    pageType: String
  },

  methods: {
    stopColor(theme) {
        return '#F0F7FD';
    }
  }
}
</script>