<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Pagination",
  props: ["number"],
  methods: {
    ...mapActions(useCounterStore, ["fetchMovie"]),
    clickFunction(num) {
      this.fetchMovie(`/?page=${num}`);
      this.$router.push(`/?page=${num}`);
    },
  },
  created() {
    // console.log(this.$route.query);
  },
  components: { RouterLink },
};
</script>

<template>
  <li class="page-item active">
    <a
      @click.prevent="clickFunction(number)"
      class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-700 hover:text-gray-700 hover:bg-gray-200 focus:shadow-none"
      href="#"
      >{{ number }}</a
    >
  </li>
</template>
