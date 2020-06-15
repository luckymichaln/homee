<template>
  <nav class="page-header__nav">
    <ul class="nav-list">
      <li
        v-for="(navEl, i) in navList"
        :key="i"
        class="nav-el"
      >
        <a
          v-if="navEl.url !== '/blog'"
          href="#"
          v-scroll-to="{
            el: `${navEl.url}`,
            offset: -80
          }"
          class="nav-el__link"
        >
          <span class="link-text text--upper">{{ navEl.label }}</span>
        </a>
        <nuxt-link
          v-else
          class="nav-el__link"
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
  },

  mounted () {
    console.log(this.navList, 'lslls')
  }
}
</script>
