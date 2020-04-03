<template>
  <form class="contact-form">
    <fieldset
      v-for="(field, index) in fields"
      :key="index"
    >
      <label
        :for="`${field.field_type.toLowerCase()}--${index}`"
        class="text--upper text--semibold"
      >
        {{ field.field_label }}
        <span v-if="field.field_required">*</span>
      </label>
      <input
        v-if="field.field_type.toLowerCase() !== 'textarea'"
        :id="`${field.field_type.toLowerCase()}--${index}`"
        :placeholder="field.field_placeholder"
        :required="field.field_required"
      />
      <textarea
        v-else
        :placeholder="field.field_placeholder"
        :id="`${field.field_type.toLowerCase()}--${index}`"
        :required="field.field_required"
      >
      </textarea>
    </fieldset>
    <button
      class="button"
    >
      {{ buttonLabel }}
    </button>
  </form>
</template>

<script>
import xButton from '~/components/x-button';

export default {
  props: {
    fields: {
      type: Array,
      default: []
    },
    buttonLabel: String
  },

  components: {
    xButton
  }
}
</script>