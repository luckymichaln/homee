<template>
  <contactPage :pageData="contactPageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import contactPage from '~/components/page-content/contact-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['pages/contactPageData']) {
      await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'contact' })
    }
  },

  computed: {
    ...mapGetters('pages', ['contactPageData']),
  },

  mounted() {
    console.log(this.contactPageData, 'contactPageData')
  },

  components: {
    contactPage
  }
}
</script>

<style>

</style>