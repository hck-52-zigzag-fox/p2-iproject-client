<script>
import { mapActions, mapState } from "pinia";
import Navbar from "../component/Navbar.vue";
import { useCustomerOrderStore } from "../stores/customerOrder";
export default {
  name: "PaymentView",
  computed: {
    ...mapState(useCustomerOrderStore, ["token"]),
  },
  data() {
    return {
      inputOrder: {
        orderType: "",
        startDate: "",
        endDate: "",
      },
    };
  },
  methods: {
    ...mapActions(useCustomerOrderStore, ["addOrder", "handlePayment"]),
    async payHandle() {
      this.handlePayment(this.token);
    },
    trigger() {
      let input = {
        orderType: this.inputOrder.orderType,
        startDate: new Date(this.inputOrder.startDate).toISOString(),
        endDate: new Date(this.inputOrder.endDate).toISOString(),
      };
      this.addOrder(input, this.$route.params.id);
      this.inputOrder.orderType = "";
      this.inputOrder.startDate = "";
      this.inputOrder.endDate = "";
    },
  },
  components: { Navbar },
};
</script>

<template>
  <Navbar />
  <div class="container d-flex justify-content-center flex-column align-items-center p-4">
    <h1 class="text-center">RENT A GIRLFRIEND</h1>
    <form class="form w-50 text-center" ref="dataOrder" @submit.prevent="trigger">
      <div class="mt-2">
        <input
          v-model="inputOrder.orderType"
          type="text"
          class="form-control"
          autocomplete="off"
        />
      </div>
      <div class="mt-4">
        <input
          v-model="inputOrder.startDate"
          type="datetime-local"
          class="form-control"
        />
      </div>
      <div class="mt-4">
        <input
          v-model="inputOrder.endDate"
          type="datetime-local"
          class="form-control"
        />
      </div>
      <button class="btn btn-secondary mt-5" style="background-color:pink;" type="submit">RENT</button>
    </form>
    <button class="btn btn-success rounded" v-if="token" @click="payHandle" id="pay-button">Pay!</button>
  </div>
</template>
