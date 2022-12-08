<script>
import navbarVue from "../components/navbar.vue";
import footerVue from "../components/footer.vue";
import headerVue from "../components/header.vue";
import recommendationCardVue from "../components/recommendationCard.vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../stores/productStore";
import { useCustomerStore } from "../stores/customerStore";
export default {
  name: "DetalProduct",
  data() {
    return {
      rekomen: {},
    };
  },
  components: {
    navbarVue,
    footerVue,
    headerVue,
    recommendationCardVue,
  },
  methods: {
    ...mapActions(useProductStore, [
      "fetchProductById",
      "generateQrCode",
      "bookmarkedProducts",
    ]),
  },
  computed: {
    ...mapState(useProductStore, ["product", "qrCode", "products"]),
    ...mapState(useCustomerStore, ["isLogin"]),
  },
  created() {
    this.generateQrCode(this.product.id);
    this.fetchProductById(this.product.id);
  },
};
</script>
<template>
  <navbarVue />
  <headerVue />
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
            <button
              v-if="isLogin"
              class="btn btn-outline-dark flex-shrink-0"
              type="button"
              @click.prevent="bookmarkedProducts(product.id)"
            >
              <i class="bi-cart-fill me-1"></i>
              Add to wishlist
            </button>
          </div>
          <div></div>
          <div class="row">
            <div class="col">
              <img
                :src="qrCode.qrcode"
                alt=""
                width="250"
                height="250"
                class="mt-2"
              />
            </div>
            <div class="col mt-2">
              <span>Recommendation Product :</span>
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <recommendationCardVue
                    v-for="(product, i) in products?.allProduct?.rows"
                    :product="product"
                    :key="product.id"
                  />
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footerVue />
</template>
