<script>
export default {
  name: "FormEditComponent",
  props: ["dataOneProfile"],
  emits: ["handleOneProfile"],
  data() {
    return {
      profile: {
        name: "",
        profilePict: "",
        dateOfBirth: "",
        gender: "",
        about: "",
        job: "",
        company: "",
      },
    };
  },
  methods: {
    async waitOne() {
      try {
        await this.$emit("handleOneProfile");
        this.profile = { ...this.dataOneProfile };
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.waitOne();
  },
};
</script>
<template></template>
