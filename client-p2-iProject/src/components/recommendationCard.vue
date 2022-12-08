<script>
export default {
  name: "RecommendationCard",
  props: ["product"],
};
</script>
<template>
  
    <div class="carousel-item active">
      <img
        :src="product.imgUrl"
        class="d-block w-100"
        width="100"
        height="200"
        alt="..."
      />
    </div>
    

  <!-- <span>{{ product.price }}</span> -->
</template>
