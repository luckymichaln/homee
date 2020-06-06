<template>
  <nav class="page-header__nav">
    <ul class="nav-list">
      <li
        v-for="(navEl, i) in navList"
        :key="i"
        class="nav-el"
      >
        <a
          :href="navEl.url"
          class="nav-el__link"
        >
          <span class="link-text text--accent text--upper">{{ navEl.label }}</span>
        </a>
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