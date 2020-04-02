<template>
  <div class="contact-page">
    {{pageData}}
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style>

</style>