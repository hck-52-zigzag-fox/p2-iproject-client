<script>
import { mapWritableState } from "pinia";
import { useRzStore } from "./stores/counter";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapWritableState(useRzStore, ["checkLogin"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.checkLogin = true;
    }
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>
