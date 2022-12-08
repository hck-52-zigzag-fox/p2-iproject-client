<script>
import { mapActions } from "pinia";
import { usePublicStore } from "../stores/public";

export default {
  name: "PosterCard",
  props: ["anime"],
  methods: {
    ...mapActions(usePublicStore, ["goToDetail"]),
  },
};
</script>

<template>
  <div
    class="bg-indigo-900 rounded snap-always snap-center flex-none w-[250px]"
  >
    <div
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-[350px] w-[250px]"
    >
      <img
        :src="anime.images.jpg.large_image_url"
        :alt="anime.title"
        style="height: 250px; width: 100%"
        class="hover:animate-spin"
      />
      <div
        @click="goToDetail(anime.mal_id)"
        class="bg-zinc-700 mt-3 rounded p-3 h-[50px] cursor-pointer"
      >
        <p class="text-md text-slate-100 truncate">{{ anime.title }}</p>
      </div>
    </div>
  </div>
</template>
