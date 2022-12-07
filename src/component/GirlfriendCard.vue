<script>
import { RouterLink } from 'vue-router';

export default {
    name: "GirlfriendCard",
    props: ["girlfriend"],
    components: { RouterLink }
}
</script>

<template>
  <div class="card" style="width: 18rem;">
    <img :src="girlfriend.imageUrl" class="card-img-top" :alt="`picture for ${girlfriend.name}`" style="height:20rem">
    <div class="card-body">
      <h5 class="card-title">{{girlfriend.name}}</h5>
      <p class="card-text">
        {{girlfriend.benefits}}
      </p>
    </div>
    <div class="row">
      <ul class="list-group list-group-flush col-6">
        <li v-for="like in girlfriend.like.split(',')" class="list-group-item">{{like}}</li>
      </ul>
      <ul class="list-group list-group-flush col-6">
        <li v-for="dislike in girlfriend.dislike.split(',')" class="list-group-item">{{dislike}}</li>
      </ul>
    </div>
    <div class="card-body">
      <RouterLink v-if="!girlfriend.booked" :to="`/payment/${girlfriend.id}`" class="card-link">Card link</RouterLink>
      <p v-if="girlfriend.booked">Seems your girlfriend is busy now</p>
    </div>
  </div>
</template>