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
  <div class="container d-flex justify-content-center flex-column p-4" style="background-color:rgb(241, 178, 189);min-height:100vh;min-width:100%;">
    <h1 v-if="orders.length == 0" >PLEASE ORDER TO HAVE CHAT WITH OUR GIRLFRIENDS</h1>
    <div class="container d-flex justify-content-center">
      <RouterLink
        class="btn btn-sm btn-outline-info"
        style="background-color: pink; color: black;width:7rem"
        v-for="(order, idx) in orders"
        :key="order.id"
        :to="`/myChat/${order.ProfileGirlfriend.UserId}`"
        >GirlFriend #{{ idx + 1 }}</RouterLink
      >
    </div>
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
