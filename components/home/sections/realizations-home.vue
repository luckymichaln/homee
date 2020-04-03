<template>
  <section class="realizations-home container--wide">
    <h3 class="realizations-home-title text text--upper text--bold text--accent">{{ title }}</h3>
    <div class="realizations-home__inner">
      <div class="col col-images">
        <prismic-rich-text
          :field="sliderTitle"
          class="heading--big"
        />
        <slider
          :slides="slides"
        />
      </div>
      <div class="col col-info">
        <div class="col-info__block"
          v-for="(block, index) in blocks"
          :key="index"
        >
          <prismic-rich-text
            :field="block.text_row_title"
            class="heading--small text--upper"
          />
          <prismic-rich-text
            :field="block.text_row_bold_text"
            class="text text-semiheading"
          />
          <prismic-rich-text
            :field="block.text_row_text"
            class="text text--medium"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slider from '~/components/sliders/slider';

export default {
  props: {
    title: String,
    sliderTitle: {
      type: Array,
      default: () => []
    },
    blocks: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      slides: []
    }
  },

  mounted() {
    console.log(this.blocks, 'blocks')
    this.prepareSildes()
  },

  methods: {
    prepareSildes() {
      this.blocks.map(el => {
        return this.slides.push({ image: el.slide_image, imageRetina: el.slide_image_retina })
      });

      return this.slides;
    }
  },

  components: {
    slider
  }
}
</script>

<style>

</style>