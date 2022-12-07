<script>
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores/index";

export default {
  name: "OrderCard",
  props: ["order"],
  computed: {
    ...mapState(useStore, ["currentUser"]),
    getTotalPrice() {
      let price = (this.order.additionalPrice + this.order.Item.price)
        .toLocaleString("id-ID")
        .split(".");
      if (price.length === 2) {
        price = price[0] + "K";
      } else if (price.length === 3) {
        price = price[0] + "M";
      }
      return price;
    },
  },
  methods: {
    ...mapActions(useStore, ["deleteOrder"]),
  },
};
</script>

<template>
  <!-- {{order}} -->
  <div class="Cart-Items">
    <div class="image-box">
      <img
        class="w3-grayscale"
        :src="order.Item.imageUrl"
        style="
          height: 100px;
          width: 100px;
          border-radius: 10px;
          object-fit: cover;
        "
      />
    </div>
    <div class="about ms-5">
      <h1 class="title">{{ order.Item.name }}</h1>
      <h3 class="subtitle">{{ order.Item.description }}</h3>
    </div>
    <div class="status ms-5">{{ order.status }}</div>
    <div class="prices ms-5">
      <div class="amount">{{ getTotalPrice }}</div>
      <div class="save"><u>Detail</u></div>
      <div
        class="remove"
        @click="deleteOrder(order.id)"
        v-if="currentUser.role === 'Admin'"
      >
        <u>Remove</u>
      </div>
    </div>
    <div class="ms-5">
      <i class="bi bi-chat-dots-fill fs-4"></i>
    </div>
  </div>
</template>

<style>
.Cart-Items {
  margin: auto;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.image-box {
  width: 15%;
  text-align: center;
}
.about {
  height: 100%;
}
.title {
  padding-top: 5px;
  line-height: 10px;
  font-size: 32px;
  font-weight: 800;
  color: #202020;
}
.subtitle {
  margin-top: 20px;
  line-height: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #909090;
}
.prices {
  height: 100%;
  text-align: right;
}
.amount {
  padding-top: 20px;
  font-size: 26px;
  font-weight: 800;
  color: #202020;
}
.save {
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #1687d9;
  cursor: pointer;
}
.remove {
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
}
</style>
