<script>
import { mapState } from "pinia";
import { useCounterStore } from "./stores/counter";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useCounterStore, ["isLoading"]),
  },
};
</script>

<template>
  <Navbar />
  <div class="ben" v-show="isLoading"></div>
  <div
    v-show="!isLoading"
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
