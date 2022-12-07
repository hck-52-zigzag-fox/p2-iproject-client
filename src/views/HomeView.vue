<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import GameTableRow from "../components/GameTableRow.vue";

export default {
  name: "HomeView",
  components: {
    GameTableRow,
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
    this.fetchGamesList(this.$route.query);
  },
  computed: {
    ...mapState(useCounterStore, ["games"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchGamesList"]),
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
          path: "/",
          query,
        });
        this.fetchGamesList(query);
      }
    },
    nextPage() {
      if (this.games.length > 0) {
        this.currentPage++;
        let query = {
          page: this.currentPage,
        };
        if (this.$route.query.search) {
          query.search = this.$route.query.search;
        }
        this.$router.push({
          path: "/",
          query,
        });
        this.fetchGamesList(query);
      }
    },
    searchTitle() {
      if (this.search) {
        this.currentPage = 1;
        this.$router.push({
          path: "/",
          query: {
            search: this.search,
          },
        });
        this.fetchGamesList({ search: this.search });
      }
    },
    cancelSearch() {
      if (this.search) {
        this.search = "";
        this.currentPage = 1;
        this.$router.push({
          path: "/",
        });
        this.fetchGamesList();
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
      <div class="col">
        <table
          v-if="games.length > 0"
          class="table table-dark table-striped table-hover align-middle"
        >
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <GameTableRow
              v-for="game in games"
              :key="game.steamAppID"
              :game="game"
            />
          </tbody>
        </table>
      </div>
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
