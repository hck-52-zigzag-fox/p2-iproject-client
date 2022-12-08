<script>
import { mapActions, mapState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import NewsCard from "../components/NewsCard.vue";
import { useCounterStore } from "../stores/counter";
import PictBanner from "../assets/Cleaning-boy.png"
import PictBanner2 from "../assets/223798701.png"

export default {
  name: "LandingPage",
  methods: {
    ...mapActions(useCounterStore, ["readNews"]),
  },
  computed: {
    ...mapState(useCounterStore, ["newss"]),
  },
  components: { NewsCard },
  created() {
    this.readNews();
  },
};
</script>

<template>
  <section
    id="landing"
    style="height: 90vh; background-color: #ffd2d9"
    class="h-full bg-banner"
  >
    <div class="container">
      <div class="d-flex align-items-center pt-4">
        <div>
          <h1>Kami siap menangani pekerjaan rumah anda</h1>
          <div class="d-flex gap-5">
            <div>
              <h4>Daftar Sekarang</h4>
              <RouterLink
                to="/register"
                type="button"
                class="btn text-light"
                style="background-color: #30c2c3"
              >
                Sign Up
              </RouterLink>
            </div>
          </div>
        </div>
        <img :src="PictBanner" width="450" />
      </div>
    </div>
  </section>
  <div class="container" style="height: 90vh">
    <div class="row py-5">
      <div class="col-md-6">
        <img :src="PictBanner2" alt="" style="width: 520px" />
      </div>
      <div class="col-md-6">
        <h2 class="mb-4">Tentang Kami</h2>
        <h4 style="color: #30c2c3">Your Satisfaction, Our Priority</h4>
        <p>
          HZKEEPR is a technology-driven lifestyle platform focused on
          hospitality services. Founded in 2022, We aim to help people achieve a
          better quality of life by providing superior services to become
          assistants to your home needs.
          <br />
          <br />
          When you use HZKEEPR, you are helping our partners and their quality
          of life & their rights as human beings. As much as we care about the
          rights of our partners, we are determined to create stable, quality
          jobs and better incomes for them.
        </p>
      </div>
    </div>
  </div>
  <div style="height: 90vh; background-color: #aeefe7">
    <div class="container">
      <div class="text-center py-5">
        <h2>Layanan Kami</h2>
      </div>
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow" style="width: 14rem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/995/995053.png"
                class="card-img-top p-4 mx-2"
                style="width: 200px"
              />
              <div class="card-body" style="color: #3c4978">
                <h4 class="card-text text-center">Housekeeper</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow" style="width: 14rem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3350/3350366.png"
                class="card-img-top p-4 mx-2"
                style="width: 200px"
              />
              <div class="card-body" style="color: #3c4978">
                <h4 class="card-text text-center">Gardener</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow" style="width: 14rem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1581/1581997.png"
                class="card-img-top p-4 mx-2"
                style="width: 200px"
              />
              <div class="card-body" style="color: #3c4978">
                <h4 class="card-text text-center">Driver</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-3">
    <h1 class="text-center">News</h1>
    <div
      class="row mt-4 row-cols-2 row-cols-lg-4 d-flex gap-4 justify-content-center"
    >
      <NewsCard v-for="news in newss" :key="news.id" :news="news" />
    </div>
  </div>
</template>
