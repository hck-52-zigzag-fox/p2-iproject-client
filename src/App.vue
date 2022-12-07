<script>
import { mapWritableState } from "pinia";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "./stores";
export default {
  name: "App",
  components: { Navbar, Footer },
  computed: {
    ...mapWritableState(useStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
      this.$router.push("/login");
    }
  },
};
</script>

<template>
  <Navbar />

  <RouterView />

  <Footer />
</template>
