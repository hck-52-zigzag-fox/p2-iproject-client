<script>
export default {
    name: "CardProduct",
    props: ["product"]
}
</script>

<template>
    <div class="card mt-3" style="width: 18rem;">
        <img :src="product.imageUrl" class="card-img-top" alt="..." height="250">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
        </div>
    </div>

</template>