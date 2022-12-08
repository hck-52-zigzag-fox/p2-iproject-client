<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { usePublicStore } from "../stores/public";
import PosterCard from "../components/PosterCardView.vue";
import PlaceholderList from '../components/PlaceholderListHomeView.vue';

export default {
  name: "Home",
  components: {
    PosterCard,
    PlaceholderList
  },
  computed: {
    ...mapState(usePublicStore, [
      "top_animes",
      "rand_img",
      "upc_animes",
      "upc_status",
      "top_status",
    ]),
  },
  methods: {
    ...mapActions(usePublicStore, [
      "getTopAllTime",
      "getImage",
      "getUpcoming",
    ]),
  },
  created() {
    this.getTopAllTime();
    this.getUpcoming();
    this.getImage();
    // this.getAnime();
  },
};
</script>

<template>
  <div class="flex justify-center mt-6 mb-16">
    <div class="flex-col w-5/6">
      <div class="flex flex-row" style="height: 51vh">
        <div class="basis-8/12">
          <body class="p-10">
            <div class="relative">
              <img
                src="https://t3.ftcdn.net/jpg/03/08/13/12/360_F_308131267_unLRF2JmPsjjXgrMRaFA3aEnrKa9aUxK.jpg"
                style="width: 100%; height: 51vh"
              />
              <h1
                class="absolute text-8xl text-gray-800 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                Anim8
              </h1>
            </div>
          </body>
        </div>
        <div
          class="basis-4/12 ml-3 group overflow-hidden rounded items-center"
          style="
            background-image: url(https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22218-fox-face-icon.png);
            background-size: 510px;
          "
        >
          <!-- <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="" class="h-max w-fill"> -->
          <div
            class="flex flex-col justify-center hidden group-hover:block hover:animate-ping"
          >
            <img
              :src="rand_img"
              alt="image"
              style="max-width: 100%; opacity: 60%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-6 mb-16">
    <div class="flex-col w-5/6">
      <div class="flex flex-row">
        <!-- anime list sini -->
        <div class="bg-blue-900 p-3 rounded mb-3">
          <h2 class="font-semibold text-slate-200 text-6xl mb-4">Top Anime</h2>
        </div>
      </div>
      <div v-if="top_status" class="flex flex-row">
        <!-- anime list sini -->
        <section
          class="hide-scroll-bar flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 px-5"
        >
          <PosterCard v-for="anime in top_animes" :anime="anime" />
        </section>
      </div>
      <PlaceholderList v-else />
    </div>
  </div>
  <div class="flex justify-center mt-6 mb-16">
    <div class="flex-col w-5/6">
      <div class="flex flex-row">
        <!-- anime list sini -->
        <div class="bg-blue-900 p-3 rounded mb-3">
          <h2 class="text-slate-200 text-6xl mb-4">Upcoming Anime</h2>
        </div>
      </div>
      <div v-if="upc_status" class="flex flex-row">
        <!-- anime list sini -->
        <section
          class="hide-scroll-bar flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 px-5"
        >
          <PosterCard v-for="anime in upc_animes" :anime="anime" />
        </section>
      </div>
      <PlaceholderList v-else />
    </div>
  </div>
</template>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
