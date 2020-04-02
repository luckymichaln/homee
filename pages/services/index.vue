<template>
  <servicesPage :pageData="servicesPageData" />
</template>

<script>
import { mapGetters } from 'vuex';
import servicesPage from '~/components/page-content/services-page';

export default {
  async fetch ({ store, route }) {
    await store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'service_page' })
  },

  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('pages/GET_SINGLE_PAGE_DATA', { pageType: 'service_page' })
    next()
  },

  computed: {
    ...mapGetters('pages', ['servicesPageData']),
  },

  mounted() {
    console.log(this.servicesPageData, 'servicesPageData')
  },

  components: {
    servicesPage
  }
}
</script>

<style>

</style>