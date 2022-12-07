<script>
import { useCustomerOrderStore } from "../stores/customerOrder";
import { mapState, mapActions } from "pinia";
import Navbar from "../component/Navbar.vue";
export default {
  name: "MyChat",
  computed: {
    ...mapState(useCustomerOrderStore, ["orders"]),
  },
  methods: {
    ...mapActions(useCustomerOrderStore, ["myOrders"]),
  },
  created() {
    this.myOrders();
  },
  components: { Navbar },
};
</script>

<template>
  <Navbar />
  <div class="container">
    <RouterLink
      v-for="(order, idx) in orders"
      :key="order.id"
      :to="`/myChat/${order.ProfileGirlfriend.UserId}`"
      >room {{ idx + 1 }}</RouterLink
    >
    <RouterView
      v-for="order in orders"
      :key="order.id"
      :currentUser="order.User"
      :otherUser="order.ProfileGirlfriend"
      :style="{
        display:
          order.ProfileGirlfriend.UserId != this.$route.params.id
            ? 'none'
            : 'block',
      }"
    />
  </div>
</template>
