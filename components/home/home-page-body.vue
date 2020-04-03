<template>
  <div class="services-body">
    <section
      v-for="(section, index) in data"
      :key="index"
      class="services-body__section"
    >
      <serviceHome
        v-if="section.slice_type === 'services'"
        :title="section.primary.section_title"
        :data="section.items"
      />
      <aboutUsHome
        v-if="section.slice_type === 'block_with_text'"
        :title="section.primary.block_title"
        :text="section.primary.block_text"
        :image="{
          url: section.primary.block_image.url,
          alt: section.primary.block_image.alt
        }"
        :button="{
          button_label: section.primary.block_button_label,
          button_url: section.primary.block_button_link,
        }"
      />
      <realizationsHome
        v-if="section.slice_type === 'realizations'"
        :title="section.primary.section_title"
        :sliderTitle="section.primary.slider_title"
        :textBlocks="section.items"
      />
    </section>
  </div>
</template>

<script>
import serviceHome from '~/components/home/sections/service-home';
import aboutUsHome from '~/components/home/sections/about-us-home';
import realizationsHome from '~/components/home/sections/realizations-home';

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  mounted() {
    console.log(this.data)
  },

  components: {
    serviceHome,
    aboutUsHome,
    realizationsHome
  }
}
</script>

<style>

</style>