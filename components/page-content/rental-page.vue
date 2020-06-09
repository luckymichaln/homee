<template>
  <div class="rental-page">
    <div class="container">
      <section class="rental-page__hero subpage-hero">
        <div class="hero-col">
          <img
            class="hero-image"
            :src="pageData.hero_image.url"
            :alt="pageData.hero_image.alt"
          />
        </div>
        <div class="hero-col">
          <prismic-rich-text
            class="heading--big hero-heading"
            :field="pageData.hero_title"
          />
          <textBlock
            :heading="pageData.hero_col_heading"
            :text="pageData.hero_col_text"
          />
        </div>
      </section>
      <section class="rental-page__cols">
        <div
          v-for="(col, index) in pageData.body[0].items"
          :key="index"
          class="col"
        >
          <textBlock
            :heading="col.col_heading"
            :text="col.col_list"
          />
        </div>
      </section>
      <section class="rental-page__benefits">
        <prismic-rich-text
          class="heading--small text--upper text--upper-light"
          :field="pageData.body[1].primary.features_heading"
        />
        <div class="benefits-row">
          <div
            v-for="(col, index) in pageData.body[1].items"
            :key="index"
            class="benefits-col"
          >
            <div class="col-img">
              <img :src="col.features_icon.url" :alt="col.features_icon.alt" />
            </div>
            <p
              class="col-text text--semibold"
              v-html="col.features_text"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import textBlock from '~/components/text-block';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    textBlock
  }
}
</script>
