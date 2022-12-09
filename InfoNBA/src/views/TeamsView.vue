<script>
import CardTeams from "../components/CardTeams.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Team",
  components: { CardTeams },
  computed: {
    ...mapState(useCounterStore, ["teams"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["showTeam"]),
  },
  created() {
    this.showTeam();
  },
};
</script>

<template>
  <section>
    <div id="accommodation" class="container w-75">
      <div class="row">
        <h1 style="color: white">TEAMS</h1>
        <CardTeams
          v-for="team in teams.data"
          :key="team.id"
          :dataTeams="team"
        />
      </div>
    </div>
  </section>
</template>
