<template>
  <div class="single-post">{{ post }}</div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
