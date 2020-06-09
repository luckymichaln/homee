<template>
  <div class="page page--rental">
    <rentalPage :pageData="rentalPageData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import rentalPage from '~/components/page-content/rental-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['pages/rentalPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'rental_management' })
    }
  },

  computed: {
    ...mapGetters('pages', ['rentalPageData']),
  },

  components: {
    rentalPage
  }
}
</script>