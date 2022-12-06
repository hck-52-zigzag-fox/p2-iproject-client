<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "GameCard",
  props: ["game"],
  methods: {
    ...mapActions(useCounterStore, ["formatPrice"]),
  },
};
</script>

<template>
  <div class="card p-2 m-2 col-3 bg-dark zoom" style="width: 16rem">
    <div class="row">
      <a :href="`/games/${game.steamAppID}`">
        <img
          @click.prevent="$router.push(`/games/${game.steamAppID}`)"
          :src="game.thumb"
          class="card-img img-fluid"
          :alt="`Image for ${game.title}`"
        />
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ game.title }}</h5>
      <p class="card-text">{{ formatPrice(game.salePrice) }}</p>
    </div>
  </div>
</template>
