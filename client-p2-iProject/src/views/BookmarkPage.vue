<script>
import { useProductStore } from "../stores/productStore";
import Navbar from "../components/navbar.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Card from "../components/Card.vue";
import { mapActions, mapState } from "pinia";
export default {
  name: "Bookmark",
  components: { Card, Navbar, Header, Footer },
  computed: {
    ...mapState(useProductStore, ["bookmark"]),
  },
  methods: {
    ...mapActions(useProductStore, ["readBookmarkedProduct"]),
  },
  created() {
    console.log(123)
    this.readBookmarkedProduct();
  },
};
</script>
<template>
  <!-- Navigation-->
  <Navbar />
  <!-- Header-->
  <Header />
  <!-- Section-->
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
      <Card
          v-for="(product, i) in bookmark"
          :product="product.Product"
          :key="product.Product.id"
        />
      </div>
    </div>
  </section>
  <!-- Footer-->
  <Footer />
</template>
