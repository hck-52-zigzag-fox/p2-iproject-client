<script>
import { mapState, mapActions } from "pinia";
import Movie from "../components/Movie.vue";
import Pagination from "../components/Pagination.vue";
import SelectOption from "../components/SelectOption.vue";
import { useCounterStore } from "../stores/counter";
export default {
  name: "HomeView",
  components: { Movie, Pagination, SelectOption },
  computed: {
    ...mapState(useCounterStore, ["movies", "genres"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchMovie"]),
  },
  created() {
    this.fetchMovie();
  },
};
</script>
<template>
  <div class="py-44">
    <div class="pl-96">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-16"
        >Filter by:</label
      >
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24"
      >
        <option selected disabled>Genre</option>
        <SelectOption v-for="genre in genres" :genre="genre" :key="genre.id" />
      </select>
    </div>
    <div class="flex grid grid-cols-4 gap-1 px-56 gap-1 px-56">
      <Movie v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
    <Pagination />
  </div>
</template>
