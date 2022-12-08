<script>
import { usePetStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import ProductCardPage from "./ProductCardPage.vue";
export default {
  name: "ProductPage",
  computed: {
    ...mapState(usePetStore, ["product"]),
  },
  methods: {
    ...mapActions(usePetStore, ["fetchProduct"]),
  },
  created() {
    this.fetchProduct();
  },
  components: { ProductCardPage },
};
</script>

<template>
  <div class="container py-5">
    <!-- First Row [Products]-->
    <h2 class="font-weight-bold mb-2">Our Product</h2>
    <p class="font-italic text-muted mb-4">Make your pets happy.</p>

    <div class="row pb-5 mb-4">
      <!-- Card-->
      <ProductCardPage v-for="el in product" :key="el.id" :el="el" />
    </div>
  </div>
</template>
