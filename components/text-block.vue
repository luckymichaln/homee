<template>
  <div class="text-block">
      <prismic-rich-text
        class="text-block__heading text--upper text--upper-light"
        :field="heading"
      />
      <prismic-rich-text
        class="text-block__text"
        :field="text"
      />
  </div>
</template>

<script>
export default {
  props: {
    heading: [Object, Array],
    text: [Object, Array]
  }
}
</script>
