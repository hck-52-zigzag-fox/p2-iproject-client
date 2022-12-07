<script>
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../stores/productStore";
import { useCustomerStore } from "../stores/customerStore";
export default {
  name: "Card",
  props: ["product"],
  methods: {
    ...mapActions(useProductStore, [
      "bookmarkedProducts",
      "fetchProductById",
      "deleteBookmarkedProduct",
    ]),
    handleProductDetail() {
      this.fetchProductById(this.product.id);
    },
  },
  computed: {
    ...mapState(useCustomerStore, ["isLogin"]),
    ...mapState(useProductStore, ["bookmark", "booking"]),
  },
};
</script>
<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Product image-->
      <a href="" @click.prevent="deleteBookmarkedProduct(product.id)">
        <img
          class="card-img-top"
          :src="product.imgUrl"
          width="100"
          height="250"
          alt="..."
        />
      </a>
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ product.name }}</h5>
          <!-- Product price-->
          <p>Stock:{{ product.stock }}</p>
          <p>Rp{{ product.price }}</p>
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a
            v-if="!booking"
            class="btn btn-outline-dark mt-auto"
            href=""
            @click.prevent="handleProductDetail"
            >See Detail</a
          >
          <a
            v-if="!booking && isLogin"
            class="btn btn-outline-dark m-2"
            href=""
            @click.prevent="bookmarkedProducts(product.id)"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/494/494568.png"
              width="20"
              height="20"
              alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
