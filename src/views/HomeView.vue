<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import GameCard from "../components/GameCard.vue";

export default {
  name: "HomeView",
  components: {
    GameCard,
  },
  created() {
    this.fetchGamesList();
  },
  computed: {
    ...mapState(useCounterStore, ["games"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchGamesList"]),
  },
};
</script>

<template>
  <div class="row justify-content-center pt-2 pb-2">
    <div class="col-3">
      <form>
        <div class="input-group mt-2">
          <input
            type="search"
            class="form-control"
            id="search"
            placeholder="Search by title"
          />
          <button type="submit" class="btn btn-warning">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="row justify-content-center pt-2 pb-2">
    <GameCard v-for="game in games" :key="game.steamAppID" :game="game" />
  </div>
  <div class="row justify-content-center pt-2 pb-2">
    <div class="col-3">
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
