<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import GirlfriendCard from "../component/GirlfriendCard.vue";
import { useCustomerOrderStore } from "../stores/customerOrder";
import { useGirlfriendStore } from "../stores/girlfriend";

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
    if (this.orders.length !== 0) {
      this.girlfriends = this.girlfriends.map();
    }
  },
  components: { GirlfriendCard },
};
</script>

<template>
  <div class="container d-flex">
    <GirlfriendCard
      v-for="girlfriend in girlfriends"
      :key="girlfriend.id"
      :girlfriend="girlfriend"
    />
  </div>
</template>

<style scoped>
  .container {
    gap:2.2rem
  }
</style>
