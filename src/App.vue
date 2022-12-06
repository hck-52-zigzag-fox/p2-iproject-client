<script>
import { mapWritableState } from "pinia";
import { RouterView } from "vue-router";
import Inbox from "./components/Inbox.vue";
import Navbar from "./components/Navbar.vue";
import { useStore } from "./stores";
export default {
  name: "App",
  components: { Navbar, Inbox },
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
</template>
