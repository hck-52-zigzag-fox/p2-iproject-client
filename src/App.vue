<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <div
    class="container"
    style="
      background-color: #1b2838;
      color: #ffffff;
      min-height: 80vh;
      margin-top: 80px;
      margin-bottom: 50px;
    "
  >
    <RouterView />
  </div>
</template>
