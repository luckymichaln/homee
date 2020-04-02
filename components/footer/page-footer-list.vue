<template>
  <ul class="page-footer__list">
    <li
      v-for="link in links"
      :key="link.primary.link_url.url"
    >
      <prismic-link
        :field="link.primary.link_url"
      >
        <img
          :alt="link.primary.link_icon.alt"
          :src="link.primary.link_icon.url"
        />
      </prismic-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>