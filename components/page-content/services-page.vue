<template>
  <div :class="pageClass(pageData.page_theme, pageData.content_name)">
    <!-- <servicesHero
      :heading="pageData.hero_heading"
      :text="pageData.hero_text"
      :image="pageData.hero_image"
      :theme="pageData.page_theme"
      :pageType="pageData.content_name"
    /> -->
    <!-- <servicesBody :data="pageData.body" /> -->
  </div>
</template>

<script>
// import servicesHero from '~/components/services/services-hero';
// import servicesBody from '~/components/services/services-body';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  methods: {
    pageClass(theme, type) {
      return {
        'services-page': true
      }
    }
  },

  components: {
    // servicesHero,
    // servicesBody
  }
}
</script>