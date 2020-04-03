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
            <x-button
              v-for="(b, i) in buttons"
              :key="i"
              arrow
              :button="b"
            />
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
import xButton from '~/components/x-button';

export default {
  props: {
    image: Object,
    heading: [Object, Array],
    buttons: {
      type: Array,
      default: () => []
    }
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>