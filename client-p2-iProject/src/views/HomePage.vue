<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductStore } from "../stores/productStore";
import { useCustomerStore } from "../stores/customerStore";
import Card from "../components/Card.vue";
import Navbar from "../components/navbar.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  name: "HomePage",
  components: { Navbar, Header, Footer, Card },
  data() {
    return {
      filtering: "",
      searching: "",
    };
  },
  computed: {
    ...mapState(useProductStore, ["products", "categories"]),
    ...mapWritableState(useProductStore, ["filter", "search"]),
    ...mapWritableState(useCustomerStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useProductStore, [
      "fetchProduct",
      "showCategories",
      "speechToTextSearch",
    ]),
    handleFitur() {
      if (this.filtering) this.filter = this.filtering;
      if (this.searching) this.search = this.searching;
      this.fetchProduct();
    },
  },
  created() {
    // await this.fetchJob();
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this.showCategories();
    this.fetchProduct();
  },
};
</script>

<template>
  <!-- Navigation-->
  <Navbar />
  <!-- Header-->
  <Header />
  <!-- Content-->
  <section class="py-5">
    <center>
      <form id="">
        <div class="container">
          <!--FILTER-->
          <div style="position: relative">
            <select name="category" id="" v-model="filtering">
              <option value="" selected>Filter by Category</option>
              <option v-for="category in categories" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <!--END OF FILTER-->
          <!-- SEARCH-->
          <div>
            <input
              class="mt-1"
              name="name"
              type="text"
              placeholder="search by name"
              v-model="searching"
            />
            <button
              @click.prevent="handleFitur"
              class="mb-2 btn btn-outline-dark m-2"
              style="border-radius: 8px"
            >
              FindMe!
            </button>
          </div>
          <!-- END OF SEARCH-->
        </div>
      </form>
    </center>
    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <Card
          v-for="(product, i) in products?.allProduct?.rows"
          :product="product"
          :key="product.id"
        />
      </div>
    </div>
  </section>
  <!-- Cards Content End -->

  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li v-for="page in products.totalPage" class="page-item">
        <a class="page-link" @click="fetchProduct(page)">{{ page }}</a>
      </li>
    </ul>
  </nav>
  <!-- Footer-->
  <Footer />
</template>
