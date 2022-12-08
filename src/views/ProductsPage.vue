<script>
import { mapActions, mapState } from 'pinia';
import Preloader from '../components/Preloader.vue';
import ProductCard from '../components/ProductCard.vue';
import { useStore } from '../stores/store';

export default {
  name: "ProductsPage",
  components: { ProductCard, Preloader },
  computed: {
    ...mapState(useStore, ["products", "loading"])
  },
  methods: {
    ...mapActions(useStore, ["readProducts"])
  },
  created() {
    this.readProducts()
  }
}
</script>

<template>
  <Preloader v-if="loading" />

  <!-- ***** Products Area Starts ***** -->
  <section class="section mt-4" id="products">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Our Latest Products</h2>
            <span>Check out all of our products.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
    <div class="col-lg-12">
      <div class="pagination">
        <ul>
          <a class="active" href="#">Back to Top</a>
        </ul>
      </div>
    </div>
  </section>
  <!-- ***** Products Area Ends ***** -->
</template>