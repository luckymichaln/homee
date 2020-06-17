<template>
  <nav class="page-header__nav">
    <ul class="nav-list">
      <li
        v-for="(navEl, i) in navList"
        :key="i"
        class="nav-el"
      >
        <p
          v-if="navEl.url !== '/blog' && $route.name === 'index'"
          @click="ev => scroll(ev, navEl.url)"
        >
          <span class="link-text text--upper">{{ navEl.label }}</span>
        </p>
        <nuxt-link
          v-else-if="navEl.url !== '/blog' && $route.name !== 'index'"
          :to="{ path: '/', hash:`${navEl.url}`}"
          @click.native="ev => scroll(ev, navEl.url)"
        >
          <span class="link-text text--upper">{{ navEl.label }}</span>
        </nuxt-link>
        <nuxt-link
          v-else
          :to="{ path: '/blog' }"
        >
          <span class="link-text text--upper">{{ navEl.label }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    submenuSpanClass() {
      return {
        'link-text': true,
        'nuxt-link-active': this.$route.name === 'services-:slug'
      }
    }
  },

  methods: {
    scroll(ev, anchor) {
      ev.preventDefault();
      VueScrollTo.scrollTo(anchor, 500, {
        offset: -50
      });
    }
  }
}
</script>
