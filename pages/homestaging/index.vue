<template>
  <div class="page page--homestaging">
    Homestaging
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  async fetch ({ store }) {
    if (!store.getters['pages/homestagingPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'homestaging' })
    }
  },

  computed: {
    ...mapGetters('pages', ['homestagingPageData']),
  },

  mounted() {
    console.log(this.homestagingPageData, 'homestagingPageData')
  },

  components: {

  }
}
</script>