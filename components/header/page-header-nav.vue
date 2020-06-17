<template>
  <nav class="page-header__nav">
    <ul class="nav-list">
      <li
        v-for="(navEl, i) in navList"
        :key="i"
        class="nav-el"
      >
        <nuxt-link
          v-if="navEl.url !== '/blog'"
          :to="{ path: '/', hash:`${navEl.url}`}"
          v-scroll-to="{
            el: `${navEl.url}`,
            offset: -50,
          }"
        >
          <span class="link-text text--upper">{{ navEl.label }}</span>
        </nuxt-link>
        <nuxt-link
          v-else
          :to="{ name: 'blog' }"
        >
          <span class="link-text text--upper">{{ navEl.label }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
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
    submenuLinkClass(el) {
      return {
        'nav-el__link': true
      }
    }
  }
}
</script>
