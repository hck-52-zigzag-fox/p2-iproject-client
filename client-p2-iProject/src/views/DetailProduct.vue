<script>
import navbarVue from "../components/navbar.vue";
import footerVue from "../components/footer.vue";
import headerVue from "../components/header.vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../stores/productStore";
import { useCustomerStore } from "../stores/customerStore";
export default {
  name: "DetalProduct",
  components: {
    navbarVue,footerVue,headerVue
  },
  methods: {
    ...mapActions(useProductStore, ["fetchProductById","generateQrCode","bookmarkedProducts"]),
  },
  computed: {
    ...mapState(useProductStore, ["product","qrCode"]),
    ...mapState(useCustomerStore,["isLogin"])
  },
  created() {
    this.generateQrCode(this.product.id)
    this.fetchProductById(this.product.id);
  },
};
</script>
<template>
  <navbarVue/>
  <headerVue/>
  <section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img
            class="card-img-top mb-5 mb-md-0"
            :src="product.imgUrl"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <h1 class="display-5 fw-bolder">{{ product.name }}</h1>
          <div class="fs-5 mb-5">
            <span>Rp{{ product.price }}</span>
          </div>
          <p class="lead">
            {{ product.description }}
          </p>
          <div class="d-flex">
            <input
              class="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              value="1"
              style="max-width: 3rem"
            />
            <button v-if="isLogin" class="btn btn-outline-dark flex-shrink-0" type="button" @click.prevent="bookmarkedProducts(product.id)">
              <i class="bi-cart-fill me-1"></i>
              Add to wishlist
            </button>
          </div>
          <div></div>
          <img :src="qrCode.qrcode" alt="" width="250" height="250" class="mt-2"/>
        </div>
      </div>
    </div>
  </section>
  <footerVue/>
</template>
