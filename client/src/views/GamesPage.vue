<script>
import { mapActions, mapState } from "pinia";
import { useRzStore } from "../stores/counter";
import GamesCard from "../components/GamesCard.vue";

export default {
  name: "GamesPage",
  components: {
    GamesCard,
  },
  computed: {
    ...mapState(useRzStore, ["games"]),
  },
  methods: {
    ...mapActions(useRzStore, ["fetchGames"]),
  },
  created() {
    this.fetchGames();
  },
};
</script>
<template>
  <div class="mt-5 px-5 grid grid-rows-2n grid-flow-col gap-4">
    <div class="row-span-2">
      <div class="grid grid-rows gap-4">
        <div>
          <GamesCard v-for="game in games" :key="game.id" :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>
