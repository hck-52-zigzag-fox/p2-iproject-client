<script>
import OrderCard from '../components/OrderCard.vue';

export default {
    name: "OrderPage",
    components: { OrderCard },
};
</script>

<template>
  <div class="background p-5">
    <div class="Cart-Container">
      <div class="Header">
        <h3 class="Heading mt-4">Orders</h3>
      </div>
      <!-- card order -->
      <OrderCard v-for="el in new Array(4)" :key="1" :order="el"/>
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
