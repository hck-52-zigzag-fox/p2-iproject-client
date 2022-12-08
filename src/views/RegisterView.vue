<script>
import FormLoginRegister from "../components/FormLoginRegister.vue";

export default {
  name: "RegisterView",
  data: () => ({
    isClick: false,
    passwordValue: null,
    page: "",
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
    this.page = "Register";
  },
};
</script>

<template>
  <FormLoginRegister :page="page" />
</template>
