<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "GameDetailView",
  created() {
    this.fetchOneGame(this.$route.params.id);
  },
  computed: {
    ...mapState(useCounterStore, ["game", "gamePrice"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchOneGame", "buyGame"]),
  },
};
</script>

<template>
  <div class="container pt-5">
    <div class="row justify-content-center p-2 m-2">
      <div class="col-md-6" style="margin-top: auto; margin-bottom: auto">
        <h1>{{ game.title }}</h1>
        <p>{{ game.description }}</p>
        <p>
          <span class="text-secondary">All Reviews : </span
          >{{ game.allReviews?.summary }}
        </p>
        <p>
          <span class="text-secondary">Released Date : </span
          >{{ game.released }}
        </p>
        <p><span class="text-secondary">Price : </span>{{ gamePrice }}</p>
        <button
          type="button"
          class="btn btn-success"
          @click="buyGame($route.params.id)"
        >
          <i class="bi bi-bag"> Buy {{ game.title }}</i>
        </button>
      </div>
      <div class="col-md-6" style="padding-left: 50px">
        <img
          :src="game.imgUrl"
          style="max-width: 500px; object-fit: cover"
          :alt="`Image for ${game.title}`"
        />
        <p class="pt-4">
          <span class="text-secondary">Developer : </span>
          <a
            :href="game.developer?.link"
            class="link-info text-decoration-none"
            >{{ game.developer?.name }}</a
          >
        </p>
        <p>
          <span class="text-secondary">Publisher : </span>
          <a
            :href="game.publisher?.link"
            class="link-info text-decoration-none"
            >{{ game.publisher?.name }}</a
          >
        </p>
        <p>
          <span class="text-secondary">Tags : </span>
          <span v-for="(tag, index) in game.tags" :key="`tag-${index}`">
            <a :href="tag.url" class="link-info text-decoration-none"
              >{{ `${tag.name} ` }}
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
