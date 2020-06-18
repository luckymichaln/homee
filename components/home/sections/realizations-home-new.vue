<template>
  <section id="projects" class="realizations-home--new container--wide">
    <div class="realizations-home__inner container">
      <div class="col">
        <h3
          v-if="title"
          class="realizations-home-title text text--upper text--bold text--accent"
        >
          {{ title }}
        </h3>
        <prismic-rich-text
          :field="sliderTitle"
          class="heading--big"
        />
        <div class="swiper-nav">
          <div class="custom-pagination" slot="pagination">
            <span class="custom-pagination__start">01</span>
            <div class="swiper-pagination" />
            <span class="custom-pagination__end">0{{ slides.length }}</span>
          </div>
          <div class="buttons">
            <div class="swiper-button-prev" slot="button-prev" />
            <div class="swiper-button-next" slot="button-next" />
          </div>
        </div>
      </div>
      <div class="col col-slider">
        <section class="slider">
          <div v-swiper:mySwiper="swiperOptions">
            <div
              class="swiper-wrapper"
            >
              <div
                v-for="(slide, index) in slides"
                :key="index"
                class="swiper-slide"
              >
                <div class="slide__images">
                  <div class="swiper-slide__image image-pre">
                    <img
                      :src="slide.image_pre.url"
                      :srcset="`${slide.image_pre.url} 1x, ${slide.image_pre.url} 2x`"
                    />
                  </div>
                  <div class="swiper-slide__image image-post">
                    <img
                      :src="slide.image_post.url"
                    :srcset="`${slide.image_post.url} 1x, ${slide.image_post.url} 2x`"
                    />
                  </div>
                </div>
                <div class="slider__text">
                  <prismic-rich-text
                    :field="slide.slide_text"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
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
    sliderText: {
      type: Array,
      default: () => []
    },
    slides: {
      type: Array,
      default: () => []
    },
  },

  data() {
    return {
      swiperOptions: {
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        effect: 'fade',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      }
    }
  },

  components: {
    slider
  }
}
</script>
