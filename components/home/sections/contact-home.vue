<template>
  <section class="contact-home" id="contact">
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
              <a
                :href="`tel:${phoneText}`"
                class="text"
              >
                {{ phoneText }}
              </a>
              <p class="title text--upper">{{ emailColTitle }}</p>
              <a
                :href="`mailto:${emailText}`"
                class="text"
              >
                {{ emailText }}
              </a>
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
    phoneText: String,
    emailText: String,
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