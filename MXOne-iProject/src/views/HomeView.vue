<script>
import { mapState, mapActions } from "pinia";
import Movie from "../components/Movie.vue";
import Pagination from "../components/Pagination.vue";
import { useCounterStore } from "../stores/counter";
export default {
  name: "HomeView",
  components: { Movie, Pagination },
  computed: {
    ...mapState(useCounterStore, ["movies"]),
  },
};
</script>
<template>
  <div class="flex justify-center">
    <h1>Homee</h1>
  </div>
  <div class="py-44">
    <div class="flex grid grid-cols-4 gap-1 px-56">
      <Movie v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
    <Pagination />
  </div>
</template>
