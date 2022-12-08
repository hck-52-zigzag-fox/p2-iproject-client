<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import GameCard from "../components/GameCard.vue";

export default {
  name: "MyGamesView",
  components: {
    GameCard,
  },
  data() {
    return {
      currentPage: 1,
      search: "",
    };
  },
  created() {
    if (this.$route.query.page) {
      this.currentPage = +this.$route.query.page;
    }
    if (this.$route.query.search) {
      this.search = this.$route.query.search;
    }
    this.fetchOwnedGames(this.$route.query);
  },
  computed: {
    ...mapState(useCounterStore, ["myGames"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchOwnedGames"]),
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        let query = {
          page: this.currentPage,
        };
        if (this.$route.query.search) {
          query.search = this.$route.query.search;
        }
        this.$router.push({
          path: "/mygames",
          query,
        });
        this.fetchOwnedGames(query);
      }
    },
    nextPage() {
      if (this.myGames.length == 8) {
        this.currentPage++;
        let query = {
          page: this.currentPage,
        };
        if (this.$route.query.search) {
          query.search = this.$route.query.search;
        }
        this.$router.push({
          path: "/mygames",
          query,
        });
        this.fetchOwnedGames(query);
      }
    },
    searchTitle() {
      if (this.search) {
        this.currentPage = 1;
        this.$router.push({
          path: "/mygames",
          query: {
            search: this.search,
          },
        });
        this.fetchOwnedGames({ search: this.search });
      }
    },
    cancelSearch() {
      if (this.search) {
        this.search = "";
        this.currentPage = 1;
        this.$router.push({
          path: "/mygames",
        });
        this.fetchOwnedGames();
      }
    },
  },
};
</script>

<template>
  <div class="row justify-content-center pt-3">
    <div class="col-3">
      <form @submit.prevent="searchTitle">
        <div class="input-group mt-2">
          <input
            v-model="search"
            type="text"
            class="form-control"
            id="search"
            placeholder="Search by title"
          />
          <button
            v-if="search"
            type="button"
            class="btn btn-danger"
            @click="cancelSearch"
          >
            <i class="bi bi-x-lg"></i>
          </button>
          <button type="submit" class="btn btn-dark">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center p-4">
      <GameCard v-for="game in myGames" :key="game.steamAppID" :game="game" />
    </div>
  </div>
  <div class="row justify-content-center pb-2">
    <div class="col-3">
      <nav>
        <ul class="pagination justify-content-center">
          <li
            v-if="!$route.query.page || $route.query.page == 1"
            class="page-item disabled"
          >
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-else class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="previousPage"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">{{ currentPage }}</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              @click.prevent="nextPage"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
