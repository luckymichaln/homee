<template>
  <section class="service-home">
    <div class="service-home__inner">
      <prismic-rich-text
        :field="title"
        class="text--accent text--upper text--title text--bold"
      />
      <div class="service-home__box">
        <div
          v-for="(col, i) in data"
          :key="i"
          class="box-col"
        >
          <div class="col-image">
            <img
              :src="col.block_image.url"
              :alt="col.block_image.alt"
            />
          </div>
          <prismic-rich-text
            :field="col.block_title"
            class="col-heading text--upper text--bold"
          />
          <prismic-rich-text
            :field="col.block_text"
            class="col-text text"
          />
          <xButton
            :button="{
              button_url: col.button_url,
              button_label: col.button_label
            }"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import xButton from '~/components/x-button';

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: Array,
      default: () => []
    }
  },

  components: {
    xButton
  }
}
</script>

<style>

</style>