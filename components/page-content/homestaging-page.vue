<template>
  <div class="homestaging-page">
    {{ pageData }}
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
      default: () => {},
    }
  }
}
</script>
