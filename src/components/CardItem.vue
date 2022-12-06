<script>
export default {
  name: "CardItem",
  props: ["item"],
};
</script>

<template>
  <div class="w3-col l3 m6 w3-margin-bottom shadow me-3">
    <img :src="item.imageUrl" alt="Jane" style="width: 100%" />
    <div class="p-3">
      <h3>{{ item.name }}</h3>
      <p class="w3-opacity">Rp {{ item.price?.toLocaleString("id-ID") }},-</p>
      <p>
        {{ item.description }}
      </p>
    </div>
    <p><button class="w3-button w3-light-grey w3-block">Order</button></p>
  </div>
</template>
