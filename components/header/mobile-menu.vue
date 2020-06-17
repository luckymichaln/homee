<template>
  <aside class="aside-nav">
    <nuxt-link
        :to="{ name: 'index' }"
        class="page-header__logo"
      >
      <img :src="logoUrl" alt="DataX" />
    </nuxt-link>
    <ul class="nav-list">
      <li
        v-for="(navEl, i) in navList"
        :key="i"
        class="heading--small"
      >
        <nuxt-link
          v-if="navEl.url !== '/blog'"
          :to="{ path: '/', hash:`${navEl.url}`}"
          v-scroll-to="{
            el: `${navEl.url}`,
            offset: -50,
          }"
        >
          <span
            class="link-text text--upper"
            @click="openMobileMenu(false)"
          >
            {{ navEl.label }}
          </span>
        </nuxt-link>
        <nuxt-link
          v-else
          :to="{ name: 'blog' }"
          @click.native="openMobileMenu(false)"
        >
          <span class="link-text text--upper">{{ navEl.label }}</span>
        </nuxt-link>
      </li>
    </ul>
    <footer class="aside-nav__footer">
      <pageFooterList :links="footerData.body" />
      <p class="col-copy text">{{ footerData.footer_text }}</p>
    </footer>
    <button
      class="button-close"
      @click="openMobileMenu(false)"
    />
  </aside>
</template>

<script>
import pageFooterList from '~/components/footer/page-footer-list';

export default {
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    footerData: {
      type: Object,
      default: () => {},
    },
    logoUrl: String,
  },

  data () {
    return {
      submenuShouldOpen: false,
    }
  },

  mounted() {
    document.getElementsByClassName('page-header')[0].classList.remove('page-header--visible');
    setTimeout(() => {
      document.getElementsByTagName('html')[0].classList.add('frozen');
      document.getElementsByTagName('body')[0].classList.add('frozen');
      document.getElementById('__nuxt').classList.add('frozen');
      document.getElementById('__layout').classList.add('frozen');
    }, 300);
  },

  methods: {
    submenuLinkClass(el) {
      return {
        'nav-el__link': true,
      }
    },
    submenuSpanClass(submenu) {
      return {
        'link-text': true,
        'link-text--submenu': submenu,
        'link-text--submenu-opened': this.submenuShouldOpen,
      }
    },
    openSubmenu(shouldOpen) {
      this.submenuShouldOpen = shouldOpen;
    },
    openMobileMenu(open) {
      this.$store.commit('ui/SET_MOBILE_MENU_OPEN', { mobileMenuOpened: open });
    }
  },

  beforeDestroy() {
    document.getElementsByTagName('html')[0].classList.remove('frozen');
    document.getElementsByTagName('body')[0].classList.remove('frozen');
    document.getElementById('__nuxt').classList.remove('frozen');
    document.getElementById('__layout').classList.remove('frozen');
  },

  components: {
    pageFooterList
  }
}
</script>
