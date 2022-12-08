<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import GirlfriendCard from "../component/GirlfriendCard.vue";
import { useCustomerOrderStore } from "../stores/customerOrder";
import { useGirlfriendStore } from "../stores/girlfriend";

import Navbar from "../component/Navbar.vue";

export default {
  name: "HomeView",
  computed: {
    ...mapWritableState(useGirlfriendStore, ["girlfriends"]),
    ...mapState(useCustomerOrderStore, ["orders"]),
  },
  methods: {
    ...mapActions(useGirlfriendStore, ["fetchGirlfriends"]),
    ...mapActions(useCustomerOrderStore, ["myOrders"]),
  },
  created() {
    this.fetchGirlfriends();
  },
  components: { GirlfriendCard, Navbar },
};
</script>

<template>
  <Navbar />
  <div class="row container p-4">
    <!-- <div class="row"> -->
    <GirlfriendCard
      class="mx-2"
      v-for="girlfriend in girlfriends"
      :key="girlfriend.id"
      :girlfriend="girlfriend"
    />
    <!-- </div> -->
  </div>
</template>

<style scoped>
.container {
  gap: 2rem;
}
</style>
