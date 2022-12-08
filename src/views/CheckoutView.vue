<script>
import { usePetStore } from "../stores/counter";
import { mapActions, mapState, mapWritableState } from "pinia";
import ProductCardPage from "../components/ProductCardPage.vue";
export default {
  name: "CheckoutView",
  data() {
    return {
      shipping: 0,
    };
  },
  methods: {
    ...mapActions(usePetStore, ["listWishlist"]),
    onChoose(input) {
      this.shipping = input;
    },
  },
  computed: {
    ...mapState(usePetStore, [ 'wishlist', "price", "totalPrice"]),
  },
  created() {
    this.listWishlist();
  },
  components: { ProductCardPage },
};
</script>

<template>
  <!-- <pre>
        {{wishlist}}
    </pre> -->
  <!-- <pre>
        {{wishlist[0].Product.price}} & {{totalPrice}}
    </pre> -->
  <div class="row pb-5 mb-4">
    <ProductCardPage v-for="el in wishlist" :key="el.id" :el="el.Product" />
  </div>
  <div class="justify-content-center">
    <center>
      <h4>Total Price : {{ totalPrice }}</h4>
    </center>
    <RouterLink to="/order" class="text-decoration-none">
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">
          <ion-icon name="cart-outline"></ion-icon> Checkout and Go to Delivery
          Order
        </button>
      </div>
    </RouterLink>
  </div>
</template>
