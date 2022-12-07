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
    };
  },
  created() {
    if (this.$route.query.page) {
      this.currentPage = +this.$route.query.page;
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
        this.$router.push({
          path: "/",
          query: {
            page: this.currentPage,
          },
        });
        this.fetchGamesList({ page: this.currentPage });
      }
    },
    nextPage() {
      this.currentPage++;
      this.$router.push({
        path: "/",
        query: {
          page: this.currentPage,
        },
      });
      this.fetchGamesList({ page: this.currentPage });
    },
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
          <button type="submit" class="btn btn-dark">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="row justify-content-center pt-2 pb-2">
    <div class="col">
      <table class="table table-dark table-striped table-hover align-middle">
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
  <div class="row justify-content-center pt-2 pb-2">
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
