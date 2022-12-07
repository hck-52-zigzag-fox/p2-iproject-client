<script>
import { mapActions, mapState } from "pinia";
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
    ...mapActions(useCustomerOrderStore, ["addOrder",'handlePayment']),
    async payHandle() {
      console.log("bisa diklik");
      this.handlePayment(this.token)
    },
    trigger() {
      console.log("triger di klik");
      let input = {
        orderType : this.inputOrder.orderType,
        startDate : new Date(this.inputOrder.startDate).toISOString(),
        endDate : new Date(this.inputOrder.endDate).toISOString()
      }
      this.addOrder(input, this.$route.params.id);
      this.$refs.dataOrder.reset();
    },
  },
};
</script>

<template>
  <div class="container">
    <form ref="dataOrder" @submit.prevent="trigger">
      <input v-model="inputOrder.orderType" type="text" />
      <input v-model="inputOrder.startDate" type="datetime-local" />
      <input v-model="inputOrder.endDate" type="datetime-local" />
      <button type="submit">triger midtrans</button>
    </form>
    <button v-if="token" @click="payHandle" id="pay-button">Pay!</button>
  </div>
</template>
