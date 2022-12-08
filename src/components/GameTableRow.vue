<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "GameTableRow",
  props: ["game"],
  methods: {
    ...mapActions(useCounterStore, ["formatPrice"]),
  },
};
</script>

<template>
  <tr @click.prevent="$router.push(`/games/${game.steamAppID}-${game.gameID}`)">
    <td>
      <a :href="`/games/${game.steamAppID}`"
        ><img :src="game.thumb" :alt="`Image for ${game.title}`"
      /></a>
    </td>
    <td>{{ game.title }}</td>
    <td>{{ formatPrice(game.salePrice) }}</td>
  </tr>
</template>
