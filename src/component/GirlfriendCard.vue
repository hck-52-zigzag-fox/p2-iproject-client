<script>
import { RouterLink } from "vue-router";

export default {
  name: "GirlfriendCard",
  props: ["girlfriend"],
  components: { RouterLink },
};
</script>

<template>
  <div class="card rounded text-center p-0" style="width: 18rem">
    <img
      :src="girlfriend.imageUrl"
      class="card-img-top"
      :alt="`picture for ${girlfriend.name}`"
      style="height: 15rem;"
    />
    <div class="card-body">
      <h5 class="card-title">{{ girlfriend.name }}</h5>
      <p class="card-text">
        {{ girlfriend.benefits }}
      </p>
    </div>
    <div class="row descript p-2 text-justify">
      <div class="col-6 d-flex flex-column justify-content-center">
        <h5>LIKE</h5>
        {{ girlfriend.like }}
      </div>
      <div class="col-6 d-flex flex-column justify-content-center">
        <h5>DISLIKE</h5>
        {{ girlfriend.dislike }}
      </div>
    </div>
    <div class="card-body">
      <RouterLink
        v-if="!girlfriend.booked"
        :to="`/payment/${girlfriend.id}`"
        class="card-link"
        >Card link</RouterLink
      >
      <p v-if="girlfriend.booked">Seems your girlfriend is busy now</p>
    </div>
  </div>
</template>

<style scoped>
.descript {
  height: 5rem;
  font-size: 0.9rem;
}
</style>
