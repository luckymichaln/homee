<template>
  <div class="page page--homestaging">
    <homestagingPage :pageData="homestagingPageData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import homestagingPage from '~/components/page-content/homestaging-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['pages/homestagingPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'homestaging' })
    }
  },

  computed: {
    ...mapGetters('pages', ['homestagingPageData']),
  },

  components: {
    homestagingPage
  }
}
</script>