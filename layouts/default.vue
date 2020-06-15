<template>
  <div class="mighty-wrapper">
    <pageHeader
      v-if="headerData"
      :headerData="headerData"
      :headerLinks="headerLinks"
    />
    <transition name="fade">
      <nuxt />
    </transition>
    <pageFooter
      v-if="footerData"
      :footerData="footerData"
    />
    <transition name="fade" mode="out-in">
      <mobileMenu
        v-if="headerData && footerData && mobileMenuOpened"
        :logoUrl="headerData.logo.url"
        :navList="headerLinks"
        :footerData="footerData"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import pageHeader from '../components/header/page-header';
import pageFooter from '../components/footer/page-footer';
import mobileMenu from '~/components/header/mobile-menu';

export default {
   async created () {
    await this.$store.dispatch('header/GET_HEADER_DATA');
    await this.$store.dispatch('footer/GET_FOOTER_DATA');
  },

  data() {
    return {
      savedScroll: 0,
      triggerDownValue: 81,
      triggerUpValue: 2,
    }
  },

  computed: {
    ...mapState('ui', ['mobileMenuOpened']),
    ...mapState('header', ['headerData']),
    ...mapState('footer', ['footerData']),
    ...mapGetters('header', ['headerLinks']),
  },

  mounted() {
    document.addEventListener('scroll', this.stickyNav);
  },

  methods: {
    stickyNav() {
      const body = document.getElementsByClassName('mighty-wrapper')[0];
      const header = document.getElementsByClassName('page-header')[0]
      const sT = window.pageYOffset || document.documentElement.scrollTop;

      if (window.pageYOffset > this.triggerDownValue) {

        if (!body.classList.contains('stamp-top') && !header.classList.contains('page-header--sticky')) {
          body.classList.add('stamp-top');
          header.classList.add('page-header--sticky');

          setTimeout(function () {
            header.classList.add('page-header--ready');
          }, 10)
        }

        if (sT > this.savedScroll) {
          header.classList.remove('page-header--visible');
        } else {
          header.classList.add('page-header--visible');
        }

      } if (window.pageYOffset <= this.triggerUpValue) {
        body.classList.remove('stamp-top');
        header.classList.remove('page-header--sticky', 'page-header--ready');
      }

      this.savedScroll = sT <= 0 ? 0 : sT;
    }
  },

  components: {
    pageHeader,
    pageFooter,
    mobileMenu
  }
}
</script>
