<template>
  <section class="hero hero-primary">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__text">
          <prismic-rich-text
            class="hero-heading heading-primary"
            :field="heading"
          />
          <div class="hero__actions">
            <div class="button-wrapper">
              <a
                href="#"
                v-scroll-to="{
                  el: '#about',
                  offset: -80
                }"
                class="button button--arrow"
              >
                {{ buttons[0].button_label }}
              </a>
            </div>
          </div>
        </div>
        <div class="hero__image">
          <img
            :src="image.url"
            :srcset="`${image.url} 1x, ${image.retinaUrl} 2x`"
            :alt="image.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: Object,
    heading: [Object, Array],
    buttons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
