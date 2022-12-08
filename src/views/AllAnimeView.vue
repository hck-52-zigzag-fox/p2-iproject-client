<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { usePublicStore } from "../stores/public";
import PosterCard from "../components/PosterCardView.vue";

export default {
  name: "AllAnime",
  components: {
    PosterCard,
  },
  computed: {
    ...mapState(usePublicStore, ["all_animes", 'all_page', 'all_pages']),
  },
  methods: {
    ...mapActions(usePublicStore, [
      "getAnime",
      "changeType",
      "changeStatus",
      "changeOrder",
      "clearSearch",
      'decrPage',
      'incrPage'
    ]),
  },
  created() {
    this.getAnime();
  },
};
</script>

<template>
  <div class="flex justify-center mt-6 mb-16">
    <div class="flex-col w-5/6">
      <div class="flex flex-row">
        <div class="w-full">
          <div class="flex flex-row" style="height: 25vh">
            <div class="relative">
              <img
                src="https://t3.ftcdn.net/jpg/03/08/13/12/360_F_308131267_unLRF2JmPsjjXgrMRaFA3aEnrKa9aUxK.jpg"
                style="height: 100%; width: 100rem"
              />
              <h1
                class="absolute tracking-wide font-semibold text-7xl text-gray-800 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                AniV8
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-around mt-4">
        <div class="w-3/12">
          <select
            id="type"
            @change.prevent="changeType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose Type</option>
            <option value="tv">TV</option>
            <option value="movie">Movie</option>
            <option value="ova">Ova</option>
            <option value="special">Special</option>
            <option value="ona">Ona</option>
            <option value="music">Music</option>
          </select>
        </div>
        <div class="w-3/12">
          <select
            id="status"
            @change.prevent="changeStatus"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a status</option>
            <option value="airing">Airing</option>
            <option value="complete">Complete</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
        <div class="w-3/12">
          <select
            id="order-by"
            @change.prevent="changeOrder"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Order By</option>
            <option value="rating">Rating</option>
            <option value="score">Score</option>
            <option value="popularity">Popularity</option>
            <option value="members">Members</option>
          </select>
        </div>
        <div class="w-1/12">
          <button
            @click.prevent="clearSearch"
            type="button"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Clear
          </button>
        </div>
      </div>
      <div class="flex flex-row justify-around mt-4">
        <div class="flex-col">
          <div class="flex flex-wrap gap-12 justify-center w-full">
            <PosterCard v-for="anime in all_animes" :anime="anime" />
          </div>
          <div class="flex flex-wrap justify-center mt-12">
            <!-- Previous Button -->
            <div
              v-if="(all_page > 1)"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default"
              @click="decrPage()"
            >
              Previous
            </div>

            <!-- Next Button -->
            <div
              v-if="(all_page != all_pages)"
              class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default"
              @click="incrPage()"
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
