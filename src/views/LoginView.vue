<script>
import FormLoginRegister from "../components/FormLoginRegister.vue";

export default {
  name: "LoginView",
  data: () => ({
    isClick: false,
    passwordValue: null,
    page: "Login",
  }),
  methods: {
    showOrHidePassword() {
      if (this.isClick) this.isClick = false;
      else {
        this.isClick = true;
      }
    },
  },
  components: { FormLoginRegister },
  created() {
    this.page = "Login";
  },
};
</script>

<template>
  <FormLoginRegister :page="page" />
</template>
