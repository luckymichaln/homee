<template>
  <div class="button-wrapper">
    <prismic-link
      v-if="button.button_url && button.button_url.link_type.toLowerCase() === ('document' || 'web')"
      :field="button.button_url"
      :class="buttonClass(button)"
    >
      {{ button.button_label }}
    </prismic-link>
    <button
      v-else
      :class="buttonClass(button)"
    >
      {{ button.button_label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    button: [Object, Array]
  },

  methods: {
    buttonClass(b) {
      return {
        'button': true
      }
    }
  }
}
</script>

<style>

</style>