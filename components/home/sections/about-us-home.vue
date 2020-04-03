<template>
  <section class="about-us-home">
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
          <xButton
            arrow
            :button="{
              button_label: button.button_label,
              button_url: button.button_url
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import xButton from '~/components/x-button';

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
  },

  components: {
    xButton
  }
}
</script>
