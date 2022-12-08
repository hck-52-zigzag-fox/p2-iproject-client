<script>
import { mapActions } from "pinia";
import { usePublicStore } from "../stores/public";

export default {
  name: "PosterCard",
  props: ["anime"],
  methods: {
    ...mapActions(usePublicStore, ["goToDetail", "unrecommend", "recommend"]),
  },
};
</script>

<template>
  <div
    class="bg-indigo-900 rounded snap-always snap-center flex-none w-[250px]"
  >
    <div
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-[400px] w-[250px]"
    >
      <img
        :src="anime.posterUrl"
        :alt="anime.title"
        style="height: 250px; width: 100%"
        class="hover:animate-spin"
      />
      <div
        @click="goToDetail(anime.malId)"
        class="bg-zinc-700 mt-3 rounded p-3 h-[50px] cursor-pointer"
      >
        <p class="text-md text-slate-100 truncate">{{ anime.title }}</p>
      </div>
      <div class="flex justify-center mt-3">
        <button
          v-if="!anime.recommended"
          type="button"
          @click.prevent="recommend(anime.malId)"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Recommend
        </button>
        <button
          v-else
          type="button"
          @click.prevent="unrecommend(anime.malId)"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Unrecommend
        </button>
      </div>
    </div>
  </div>
</template>
