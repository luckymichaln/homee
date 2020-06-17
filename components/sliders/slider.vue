<template>
  <section class="slider">
    <div v-swiper:mySwiper="swiperOption">
      <div
        v-if="!newSlider"
        class="swiper-wrapper"
      >
        <div
          v-for="slide in slides"
          :key="slide.image.url"
          class="swiper-slide"
        >
          <img
            :src="slide.image.url"
            :srcset="`${slide.image.url} 1x, ${slide.imageRetina.url} 2x`"
          />
        </div>
      </div>
      <div
        v-else
        class="swiper-wrapper"
      >
        <div
          v-for="slide in slides"
          :key="slide.image_pre.url"
          class="swiper-slide"
        >
          <img
            :src="slide.image_pre.url"
            :srcset="`${slide.image_pre.url} 1x, ${slide.image_pre.url} 2x`"
          />
          <img
            :src="slide.image_post.url"
            :srcset="`${slide.image_post.url} 1x, ${slide.image_post.url} 2x`"
          />
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev" />
      <div class="swiper-button-next" slot="button-next" />
      <div class="custom-pagination" slot="pagination">
        <span class="custom-pagination__start">01</span>
        <div class="swiper-pagination" />
        <span class="custom-pagination__end">0{{ slides.length }}</span>
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
    slides: {
      type: Array,
      default: () => []
    },
    newSlider: Boolean,
  },

  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
 }
</script>
