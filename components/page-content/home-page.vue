<template>
  <div class="home-page">
    {{pageData}}
  </div>
</template>

<script>
import heroPrimary from '~/components/hero/hero-primary';

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },

  components: {
    heroPrimary
  }
}
</script>

<style>

</style>