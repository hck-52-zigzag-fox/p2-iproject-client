<script>
import { mapActions, mapState } from "pinia";
import Card from "../components/Card.vue";
import { useCounterStore } from "../stores/counter";

export default {
  name: "HomePage",
  components: { Card },
  methods: {
    ...mapActions(useCounterStore, ["fetchKeepr"]),
  },
  computed: {
    ...mapState(useCounterStore, ["keeprs"]),
  },
  created() {
    this.fetchKeepr();
  },
};
</script>

<template>
  <div class="container">
    <div class="text-center py-3">
      <h2>List of Keepr</h2>
      <h4>Let's find your dream Keepr!</h4>
    </div>
    <div class="row py-5">
      <Card v-for="keepr in keeprs" :key="keepr.id" :keepr="keepr" />
    </div>
  </div>
</template>
