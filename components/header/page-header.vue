<template>
  <header class="page-header">
    <div class="container page-header__wrapper">
      <nuxt-link
        :to="{ name: 'index' }"
        class="page-header__logo"
      >
        <img :src="headerData.logo.url" alt="DataX" />
      </nuxt-link>
      <pageHeaderNav :navList="headerLinks" />
    </div>
  </header>
</template>

<script>
import pageHeaderNav from '~/components/header/page-header-nav';

export default {
  props: {
    headerData: {
      type: Object,
      default: () => {},
    },
    headerLinks: {
      type: Array,
      default: () => [],
    }
  },

  mounted () {
    console.log(this.headerData)
  },

  components: {
    pageHeaderNav
  }
}
</script>