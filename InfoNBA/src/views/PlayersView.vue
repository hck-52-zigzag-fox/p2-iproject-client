<script>
import CardPlayers from "../components/CardPlayers.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "Player",
  components: { CardPlayers },
  computed: {
    ...mapState(useCounterStore, ["players"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["showPlayer"]),
  },
  created() {
    this.showPlayer();
  },
};
</script>

<template>
  <section>
    <div id="accommodation" class="container w-75">
      <div class="row">
        <h1 style="color: white">Players</h1>
        <CardPlayers v-for="player in players.data" :key="player.id" :dataPlayers="player"/>
      </div>
    </div>
  </section>
</template>
