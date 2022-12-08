<script>
import { mapActions, mapState } from 'pinia';
import CardProduct from '../components/CardProduct.vue';
import { useStore } from '../stores/counter';

export default {
  name: "HomePage",
  components: { CardProduct },
  computed: {
    ...mapState(useStore, ["products"])
  },
  methods: {
    ...mapActions(useStore, ["fetchProduct"])
  },
  created() {
    this.fetchProduct()
  }
}

</script>

<template>
  <!-- CAROUSEL -->
  <div class="row">

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://wallpapercave.com/wp/wp6274207.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://wallpaper.dog/large/1000752.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://wallpapercave.com/wp/wp4415450.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://wallpapercave.com/wp/wp4569762.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://wallpapercave.com/wp/wp7693151.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="mt-5 row row-cols-3 d-flex">

      <CardProduct v-for="product in products" :key="product.id" :product="product" />

    </div>
  </div>


</template>
