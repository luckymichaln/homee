<template>
  <div class="home-page">
    <heroPrimary
      :heading="pageData.hero_title"
      :image="{
        url: pageData.hero_image.url,
        retinaUrl: pageData.hero_image_retina.url,
        alt: pageData.hero_image.alt,
      }"
      :buttons="[pageData.hero_button[0]]"
    />
    <homePageBody :data="pageData.body" />
  </div>
</template>

<script>
import heroPrimary from '~/components/hero/hero-primary';
import homePageBody from '~/components/home/home-page-body';


export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    heroPrimary,
    homePageBody
  }
}
</script>

<style>

</style>