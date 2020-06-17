<template>
  <header class="page-header">
    <div class="container page-header__wrapper">
      <nuxt-link
        v-if="$route.name !== 'index'"
        :to="{ name: 'index' }"
        class="page-header__logo"
      >
        <img :src="headerData.logo.url" alt="DataX" />
      </nuxt-link>
      <span
        v-else
        class="page-header__logo"
        @click="scrollTop()"
      >
        <img :src="headerData.logo.url" alt="DataX" />
      </span>
      <pageHeaderNav :navList="headerLinks" />
      <button
        class="button-open-mobile-menu"
        @click="openMobileMenu(true)"
      >
        <span/>
        <span/>
        <span/>
      </button>
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

  methods: {
    openMobileMenu(open) {
      this.$store.commit('ui/SET_MOBILE_MENU_OPEN', { mobileMenuOpened: open });
    },

    scrollTop() {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
  },

  components: {
    pageHeaderNav
  }
}
</script>