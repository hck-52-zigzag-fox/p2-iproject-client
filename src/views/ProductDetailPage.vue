<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import MainBanner from '../components/MainBanner.vue';
import Preloader from '../components/Preloader.vue';
import { useStore } from '../stores/store';

export default {
  name: "ProductDetailPage",
  components: { Preloader, MainBanner },
  computed: {
    ...mapState(useStore, ["product"]),
    ...mapWritableState(useStore, ["loading"])
  },
  methods: {
    ...mapActions(useStore, ["readDetailProduct"])
  },
  created() {
    console.log(this.product);
    this.loading = true
    this.readDetailProduct(this.$route.params.productCode);
  },
}
</script>

<template>
  <Preloader v-if="loading" />

  <MainBanner />
  <!-- ***** Product Area Starts ***** -->
  <section class="section mt-4" id="product">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="left-images">
            <img :src="product?.galleryDetails[0]?.url" alt="">
            <img :src="product?.galleryDetails[1]?.url" alt="">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="right-content">
            <h4>{{ product?.name }}</h4>
            <span class="price">${{ product?.whitePrice?.price }}</span>
            <span>{{ product?.description }}</span>
            <div class="quantity-content">
              <div class="left-content">
                <h6>No. of Orders</h6>
              </div>
              <div class="right-content">
                <div class="quantity buttons_added">
                  <input type="button" value="-" class="minus"><input type="number" step="1" min="1" max=""
                    name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern=""
                    inputmode=""><input type="button" value="+" class="plus">
                </div>
              </div>
            </div>
            <div class="total">
              <h4>Total: $210.00</h4>
              <div class="main-border-button"><a href="#">Add To Cart</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Product Area Ends ***** -->
</template>