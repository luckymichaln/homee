<template>
  <section class="contact-home">
    <div class="container">
      <div class="contact-home__inner">
        <div class="col col-info">
          <p class="text--title text--upper text--bold text--accent">{{ sectionTitle }}</p>
          <div class="col-info__row">
            <div class="row-col">
              <p class="title text--upper">{{ addressColTitle }}</p>
              <prismic-rich-text
                :field="addressText"
                class="text"
              />
            </div>
            <div class="row-col">
              <p class="title text--upper">{{ phoneColTitle }}</p>
              <prismic-rich-text
                :field="phoneText"
                class="text"
              />
              <p class="title text--upper">{{ emailColTitle }}</p>
              <prismic-rich-text
                :field="emailText"
                class="text"
              />
            </div>
          </div>
          <div class="col-info__image">
            <img
              :src="image.url"
              :alt="image.alt"
            />
          </div>
        </div>
        <div class="col col-form">
          <contactForm
            :fields="formFields"
            :buttonLabel="formButton"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contactForm from '~/components/forms/contact-form';

export default {
  props: {
    sectionTitle: String,
    addressColTitle: String,
    phoneColTitle: String,
    emailColTitle: String,
    addressText: {
      type: Array,
      default: []
    },
    phoneText: {
      type: Array,
      default: []
    },
    emailText: {
      type: Array,
      default: []
    },
    image: {
      type: Object,
      default: () => {}
    },
    formFields: {
      type: Array,
      default: []
    },
    formButton: String
  },

  components: {
    contactForm
  }
}
</script>

<style>

</style>