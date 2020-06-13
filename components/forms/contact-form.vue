<template>
  <ValidationObserver ref="form">
    <form
      @submit.prevent="ev => sendForm(ev)"
      class="contact-form"
    >
      <fieldset
        v-for="(field, index) in fields"
        :key="index"
      >
        <label
          :for="`${field.field_type.toLowerCase()}`"
          class="text--upper text--semibold"
        >
          {{ field.field_label }}
          <span v-if="field.field_required">*</span>
        </label>

        <ValidationProvider
          v-if="field.field_type.toLowerCase() === 'text'"
          :rules="`${field.field_required}` ? 'required' : null"
          v-slot="{ errors, classes }"
        >
        <div class="field" :class="classes">
          <input
            :id="`${field.field_type.toLowerCase()}`"
            :placeholder="field.field_placeholder"
            v-model="form[field.field_type.toLowerCase()]"
          />
          <span>{{ errors[0] }}</span>
        </div>
        </ValidationProvider>

        <ValidationProvider
          v-if="field.field_type.toLowerCase() === 'number'"
          rules="integer|required"
          v-slot="{ errors, classes }"
        >
          <div class="field" :class="classes">
            <input
              :id="`${field.field_type.toLowerCase()}`"
              :placeholder="field.field_placeholder"
              v-model="form[field.field_type.toLowerCase()]"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-if="field.field_type.toLowerCase() === 'email'"
          rules="required|email"
          v-slot="{ errors, classes }"
        >
          <div class="field" :class="classes">
            <input
              :id="`${field.field_type.toLowerCase()}`"
              :placeholder="field.field_placeholder"
              v-model="form[field.field_type.toLowerCase()]"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <textarea
          v-if="field.field_type.toLowerCase() === 'textarea'"
          :placeholder="field.field_placeholder"
          :id="`${field.field_type.toLowerCase()}`"
          :required="field.field_required"
          v-model="form.message"
        >
        </textarea>
      </fieldset>
      <button
        v-if="!messageSent"
        class="button"
      >
        {{ loading ? 'Wysyłanie...' : buttonLabel }}
      </button>
      <span
        v-if="messageSent"
        class="form-confirm"
      >
        Wiadomość została wysłana, dziękujemy!
      </span>
    </form>
  </ValidationObserver>
</template>

<script>
import xButton from '~/components/x-button';
import axios from '@nuxtjs/axios';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  props: {
    fields: {
      type: Array,
      default: []
    },
    buttonLabel: String
  },

  data() {
    return {
      form: {
        text: null,
        email: null,
        number: null,
        message: null
      },
      loading: false,
      messageSent: false
    }
  },

  methods: {
    sendForm(ev) {
      ev.preventDefault;

      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }

        this.loading = true;

        this.$axios({
          method: 'post',
          url: 'http://www.homeewaw.pl/send/',
          data: { "action": "auth" },
        })
          .then(response => {
            console.log(response)

            let token = null;
            if (response.data.token) {
              token = response.data.token;

              this.$axios({
                method: 'post',
                url: 'http://www.homeewaw.pl/send/',
                data: {
                  "action": "send",
                  "token": token,
                  "text": this.form.text,
                  "number": this.form.number,
                  "email": this.form.email,
                  "message": this.form.message
                },
              }).then(response => {
                console.log(response);

                if (response.data.ok) {
                  this.loading = false;
                  this.messageSent = true;
                }
              }).catch(error => {
                console.error(error)

                this.loading = false;
              })
            }
          })
          .catch(error => {
            console.error(error)

            this.loading = false;
          })

        console.log(this.form)
      });
    }
  },

  components: {
    xButton,
    ValidationProvider,
    ValidationObserver
  }
}
</script>