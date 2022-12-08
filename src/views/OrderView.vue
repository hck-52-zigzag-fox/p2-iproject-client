<script>
// origin, destination,weight,courier
import DeliveryOrder from "../components/DeliveryOrder.vue";
import DetailOngkir from "../components/DetailOngkir.vue";
export default {
  name: "OrderView",
  components: { DetailOngkir, DeliveryOrder },
};
</script>

<template>
  <div class="row d-flex justify-content-center align-items-center h-100">
    <DeliveryOrder />
  </div>
</template>
