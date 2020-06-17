<template>
  <section :class="containerClass()">
    <h3
      v-if="title"
      class="realizations-home-title text text--upper text--bold text--accent"
    >
      {{ title }}
    </h3>
    <div class="realizations-home__inner">
      <div class="col col-images">
        <h2 class="heading--big">{{ sliderTitle }}</h2>
        <slider
          newSlider
          :slides="slides"
        />
      </div>
    </div>
  </section>
</template>

<script>
import slider from '~/components/sliders/slider';

export default {
  props: {
    title: String,
    sliderTitle: String,
    blocks: {
      type: Array,
      default: () => []
    },
  },

  data() {
    return {
      slides: []
    }
  },

  mounted() {
    this.prepareSildes()
  },

  methods: {
    prepareSildes() {
      this.blocks.map(el => {
        return this.slides.push({ image_pre: el.image_pre, image_post: el.image_post })
      });
    },

    containerClass() {
      return {
        'realizations-home': true,
        'container--wide': true
      }
    }
  },

  components: {
    slider
  }
}
</script>

<style>

</style>