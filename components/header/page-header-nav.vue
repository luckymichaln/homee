<template>
  <nav class="page-header__nav">
    <ul class="nav-list">
      <li
        v-for="(navEl, i) in navList"
        :key="i"
        class="nav-el"
      >
        <prismic-link
          :field="navEl.primary.link_url"
          class="nav-el__link"
        >
          <span class="link-text text--accent text--upper">{{ navEl.primary.link_label }}</span>
        </prismic-link>
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

<style>

</style>