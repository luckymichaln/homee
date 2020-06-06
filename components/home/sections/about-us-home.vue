<template>
  <section class="about-us-home" id="about">
    <div class="container">
      <div class="about-us-home__inner">
        <div class="col col-image">
          <img
            :src="image.url"
            :srcset="image.retinaUrl"
            :alt="image.alt"
          />
        </div>
        <div class="col col-info">
          <p class="text text--title text--accent text--upper text--bold">{{ title }}</p>
          <prismic-rich-text
            :field="text"
            class="text text--pale col-info__text"
          />
          <div class="button-wrapper">
            <a
              v-scroll-to="{
                el: '#contact',
                offset: -80
              }"
              class="button button--arrow"
            >
              {{ button.button_label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    title: String,
    text: {
      type: Array,
      default: () => []
    },
    image: {
      type: Object,
      default: () => {}
    },
    button: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
