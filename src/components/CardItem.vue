<script>
import { mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import { useStore } from '../stores';


export default {
    name: "CardItem",
    props: ["item"],
    computed:{
      ...mapState(useStore, ['currentUser'])
    }
};
</script>

<template>
  <div class="w3-col l3 m6 w3-margin-bottom shadow me-3">
    <img :src="item.imageUrl" alt="Jane" style="width: 100%; height: 300px; object-fit: cover;" />
    <div class="p-3">
      <h3>{{ item.name }}</h3>
      <p class="w3-opacity">Rp {{ item.price?.toLocaleString("id-ID") }},-</p>
      <p>
        {{ item.description }}
      </p>
    </div>
    <p><RouterLink v-if="currentUser.role === 'Customer'" :to="`/items/${item.id}`" class="w3-button w3-light-grey w3-block">Order</RouterLink></p>
  </div>
</template>
