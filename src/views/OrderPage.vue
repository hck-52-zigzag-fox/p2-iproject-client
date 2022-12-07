<script>
import { createDOMCompilerError } from "@vue/compiler-dom";
import { mapActions, mapState } from "pinia";
import OrderCard from "../components/OrderCard.vue";
import { useStore } from "../stores";

export default {
  name: "OrderPage",
  components: { OrderCard },
  computed: {
    ...mapState(useStore, ["orders"]),
  },
  methods: {
    ...mapActions(useStore, ["fetchOrders"]),
  },
  created() {
    this.fetchOrders();
  },
};
</script>

<template>
  <div class="background p-5">
    <div class="Cart-Container">
      <div class="Header">
        <h3 class="Heading mt-4">Orders</h3>
      </div>
      <!-- card order -->
      <OrderCard v-for="order in orders" :key="order.id" :order="order" />
    </div>
  </div>
</template>

<style scoped>
.background {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: calc(100vh - 50px - 52.5px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.Cart-Container {
  width: 70%;
  height: 85%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 25px 40px #a0a2a433;
}
.Header {
  margin: auto;
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Heading {
  font-size: 30px;
  font-weight: 700;
  color: #2f3841;
}
</style>
