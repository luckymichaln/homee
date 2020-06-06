<template>
  <div class="rental-page">
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
