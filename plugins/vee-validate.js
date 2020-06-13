import { extend, configure } from "vee-validate";
import { required, integer, email } from "vee-validate/dist/rules";

configure({
  classes: {
    invalid: 'is-invalid',
  }
})

extend("required", {
  ...required,
  message: "To pole jest wymagane"
});

extend("integer", {
  ...integer,
  message: "To pole może zawierać tylko liczby"
});

extend("email", {
  ...email,
  message: "To pole musi zawierać poprawny adresem email"
});
