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
        card
        :title="section.primary.section_title"
        :sliderTitle="section.primary.slider_title"
        :blocks="section.items"
      />
      <!-- <realizationsHomeNew
        v-if="section.slice_type === 'realizations_2'"
        :title="section.primary.section_title"
        :sliderTitle="section.primary.slider_title"
        :blocks="section.items"
      /> -->
      <contactHome
        v-if="section.slice_type === 'contact_form'"
        :sectionTitle="section.primary.section_title"
        :addressColTitle="section.primary.address_column_title"
        :addressText="section.primary.address_column_text"
        :phoneColTitle="section.primary.phone_column_title"
        :phoneText="section.primary.phone_column_text"
        :emailColTitle="section.primary.email_column_title"
        :emailText="section.primary.email_column_text"
        :image="{url: section.primary.contact_image.url, alt: section.primary.contact_image.alt}"
        :formFields="section.items"
        :formButton="section.primary.button_label"
      />
    </section>
  </div>
</template>

<script>
import serviceHome from '~/components/home/sections/service-home';
import aboutUsHome from '~/components/home/sections/about-us-home';
import realizationsHome from '~/components/home/sections/realizations-home';
import realizationsHomeNew from '~/components/home/sections/realizations-home-new';
import contactHome from '~/components/home/sections/contact-home';

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  components: {
    serviceHome,
    aboutUsHome,
    realizationsHome,
    realizationsHomeNew,
    contactHome
  }
}
</script>
