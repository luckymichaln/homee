<template>
  <footer class="page-footer">
    <div class="container">
      <div class="page-footer__row">
        <div class="row-col">
          <nuxt-link
            :to="{ name: 'index' }"
            class="page-footer__logo"
          >
            <img :src="footerData.logo.url" alt="DataX" />
          </nuxt-link>
        </div>
        <div class="row-col">
          <p class="col-copy text">{{ new Date().getFullYear() }} {{ footerData.footer_text }}</p>
        </div>
        <div class="row-col">
          <pageFooterList :links="footerData.body" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import pageFooterList from '~/components/footer/page-footer-list';
export default {
  props: {
    footerData: {
      type: Object,
      default: () => {},
    }
  },

  mounted() {
    console.log(this.footerData)
  },

  components: {
    pageFooterList
  }
}
</script>
<style>

</style>