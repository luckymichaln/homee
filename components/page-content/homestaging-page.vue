<template>
  <div class="homestaging-page">
    <div class="container">
      <div class="homestaging-page__hero">
        <div class="hero-col">
          <prismic-rich-text
            class="heading--big"
            :field="pageData.hero_title"
          />
          <prismic-rich-text
            :field="pageData.hero_text"
          />
        </div>
        <div class="hero-col">
          <img :src="pageData.hero_image.url" :alt="pageData.hero_image.alt" />
        </div>
      </div>
      <realizationsHome
        :blocks="pageData.body[0].items"
      />
    </div>
  </div>
</template>

<script>
import realizationsHome from '~/components/home/sections/realizations-home';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    realizationsHome
  }
}
</script>
