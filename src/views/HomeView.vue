<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

import FooterVue from "../components/Footer.vue";
import NavbarVue from "../components/Navbar.vue";
import CardCourseVue from "../components/CardCourse.vue";

export default {
  name: "HomeVue",
  components: {
    FooterVue,
    NavbarVue,
    CardCourseVue,
  },
  computed: {
    ...mapState(useGlobalStore, ["listOfCourse"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["getCourses"]),
  },
  created() {
    this.getCourses();
  },
};
</script>

<template>
  <NavbarVue />

  <main class="container mx-auto py-10">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
    >
      <CardCourseVue v-for="(data, n) in listOfCourse" :key="n" :data="data" />
    </div>
  </main>

  <FooterVue />
</template>
