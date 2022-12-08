<script>
import { mapActions, mapState } from "pinia";
import { usePublicStore } from "../stores/public";

export default {
  name: "AnimeDetail",
  computed: {
    ...mapState(usePublicStore, ["oneAnime", 'oneAnimeStatus']),
  },
  methods: {
    ...mapActions(usePublicStore, ["getOneAnime", 'like']),
  },
  created() {
    this.getOneAnime(this.$route.params.id);
  },
};
</script>

<template>
  <section>
    <div class="flex justify-center">
      <div class="flex-col w-4/6">
        <div
          class="flex flex-row mt-4 mb-4 bg-slate-900 divide-x-2 divide-slate-500 rounded-lg"
          style="min-height: 90vh"
        >
          <div class="basis-1/5 p-3">
            <img :src="oneAnime.images.jpg.large_image_url" alt="" />
            <div class="flex flex-col bg-slate-400 mt-2 p-3">
              <div v-if="oneAnime.score" class="flex flex-row justify-center">
                <img
                  src="../assets/icons8-star-48.png"
                  alt=""
                  style="height: 36px"
                />
                <p
                  class="capitalize font-semibold text-xl bg-slate-500 p-1 rounded-lg"
                >
                  {{ oneAnime.score }} / 10
                </p>
              </div>
              <div class="flex-row">
                <p
                  class="capitalize font-semibold mt-3 text-xl border-b-2 border-slate-600"
                >
                  information
                </p>
              </div>
              <div class="flex-row mt-2">
                <p class="break-all" style="max-width: 269px">
                  Type: {{ oneAnime.type }}
                </p>
                <p class="break-all" style="max-width: 269px">
                  Episodes: {{ oneAnime.episodes }}
                </p>
                <p class="break-all" style="max-width: 269px">
                  Status: {{ oneAnime.status }}
                </p>
              </div>
              <div class="flex-row mt-2">
                <button @click="like(oneAnime.mal_id)" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Like</button>
              </div>
            </div>
          </div>
          <div class="basis-4/5 p-3 bg-slate-800">
            <div class="flex justify-center border-b-4 border-blue-800">
              <p
                class="text-slate-100 text-4xl font-medium p-3 truncate overflow-hidden"
                style="max-width: 850px"
              >
                {{ oneAnime.title }}
              </p>
            </div>
            <div 
            v-if="oneAnime.synopsis"
            class="flex flex-col bg-slate-300 mt-2 p-3">
              <div class="flex-row">
                <p class="capitalize font-semibold text-2xl">synopsis</p>
              </div>
              <div class="flex-row mt-2">
                <p>{{ oneAnime.synopsis }}</p>
              </div>
            </div>
            <div
              v-if="oneAnime.background"
              class="flex flex-col bg-slate-300 mt-2 p-3"
            >
              <div class="flex-row">
                <p class="capitalize font-semibold text-2xl">background</p>
              </div>
              <div class="flex-row mt-2">
                <p>{{ oneAnime.background }}</p>
              </div>
            </div>
            <div v-if="oneAnime.trailer.embed_url" class="flex flex-col bg-slate-300 mt-2 p-3">
              <div class="flex-row">
                <p class="capitalize font-semibold text-2xl">trailer</p>
              </div>
              <div class="flex-row mt-2">
                <YouTube
                  :src="oneAnime.trailer.embed_url"
                  @ready="onReady"
                  ref="youtube"
                  width="500"
                  height="281"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
