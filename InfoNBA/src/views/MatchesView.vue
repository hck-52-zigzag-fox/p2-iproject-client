<script>
import CardMatch from "../components/CardMatch.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Matches",
  components: { CardMatch },
  computed: {
    ...mapState(useCounterStore, ["matches"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["showMatch"]),
  },
  created() {
    this.showMatch();
  },
};
</script>

<template>
  <section>
    <div id="accommodation" class="container w-75">
      <div class="row">
        <h1 style="color: white">MATCHES</h1>
        <CardMatch
          v-for="match in matches.data"
          :key="match.id"
          :dataMatch="match"
        />
      </div>
    </div>
  </section>
</template>
