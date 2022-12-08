<script>
import { RouterLink } from 'vue-router';

export default {
    name: "CardProduct",
    props: ["product"],
    components: { RouterLink }
}
</script>

<template>
    <div class="card mt-5 ms-5 me-4 mb-5 d-flex justify-content-center" style="width: 18rem;">
        <RouterLink :to="`/products/${product.id}`">
            <img :src="product.imageUrl" class="card-img-top" alt="..." height="250">
        </RouterLink>
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
        </div>
    </div>

</template>