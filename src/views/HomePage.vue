<script>
import { mapActions, mapState } from "pinia";
import CardItem from "../components/CardItem.vue";
import { useStore } from "../stores";

export default {
  name: "HomePage",
  components: { CardItem },
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapState(useStore, ["currentUser", "items"]),
  },
  methods: {
    ...mapActions(useStore, ["getCurrentUser", "fetchItems"]),
  },
  watch: {
    currentUser(newVal, oldVal) {
      this.user = newVal;
    },
  },
  created() {
    this.getCurrentUser();
    this.fetchItems();
  },
};
</script>

<template>
  <div style="min-height: calc(100vh - 50px - 52.5px)">
    <div
      class="w3-container w3-padding-32 mx-5"
      id="about"
    >
      <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 fw-bold">
        Commission type
      </h3>
      <p class="text-center h5 fw-light fst-italic mt-4">
        Please note that these are the base prices for non-commercial
        commissions! Complex character designs/backgrounds/compositions would
        increase the price.
      </p>
    </div>

    <div class="w3-row-padding w3-grayscale d-flex justify-content-center">
      <CardItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
