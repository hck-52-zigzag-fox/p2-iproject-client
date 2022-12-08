<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/NavbarView.vue";
import Footer from "./components/FooterView.vue";
import { mapWritableState } from "pinia";
import { usePublicStore } from "./stores/public";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapWritableState(usePublicStore, [
      "loggedIn",
      "logged_id",
      "logged_username",
    ]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.loggedIn = true;
      if (localStorage.getItem("user")) {
        let data = JSON.parse(localStorage.getItem("user"));
        this.logged_id = data.id;
        this.logged_username = data.username;
      }
    }
  },
};
</script>

<template>
  <div style="background-color: #172542; min-height: 100vh">
    <Navbar />
    <RouterView style="min-height: calc(100vh - 71px)" />
    <Footer />
  </div>
</template>
