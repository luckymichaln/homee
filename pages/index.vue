<template>
  <homePage :pageData="homePageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import homePage from '~/pages/home-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['pages/homePageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'hero_home' })
    }
  },

  computed: {
    ...mapGetters('pages', ['homePageData']),
  },

  mounted() {
    if (window.innerWidth <= 767 && this.$route.hash) {
      const element = document.querySelector(`${this.$route.hash}`)
      const topPos = element.getBoundingClientRect().top + window.pageYOffset

      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      })
    }
  },

  components: {
    homePage
  }
}
</script>
