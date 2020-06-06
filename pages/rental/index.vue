<template>
  <div class="page page--rental">
    Rental
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  async fetch ({ store }) {
    if (!store.getters['pages/rentalPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'rental_management' })
    }
  },

  computed: {
    ...mapGetters('pages', ['rentalPageData']),
  },

  mounted() {
    console.log(this.rentalPageData, 'rentalPageData')
  },

  components: {

  }
}
</script>