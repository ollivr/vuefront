<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{$t('elements.common.account.login.titleText')}}</template>
    <template #sub-title>{{$t('elements.common.account.login.subTitleText')}}</template>

    <vf-m-field :state="$v.form.email.$dirty ? !$v.form.email.$error : null" id="input-email">
      <template #label>{{$t('elements.common.account.login.emailEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.email" trim />
      </template>
      <template #error>{{$t('elements.common.account.login.emailError')}}</template>
    </vf-m-field>

    <vf-m-field
      :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
      id="input-password"
    >
      <template #label>{{$t('elements.common.account.login.passwordEntry')}}</template>
      <template #default="data">
        <vf-a-input v-bind="data" v-model="form.password" type="password" trim />
      </template>
      <template #error>{{$t('elements.common.account.login.passwordError')}}</template>
    </vf-m-field>

    <template #button>{{$t('elements.common.account.login.buttonSave')}}</template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import email from "vuelidate/lib/validators/email";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      }
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        const status = await this.$store.dispatch("common/customer/login", {
          email: this.form.email,
          password: this.form.password
        });

        if (status) {
          this.$router.push("/account");
        }
      }
    }
  }
};
</script>
