<script>
import { usePetStore } from "../stores/counter";
import { mapActions } from "pinia";
import ProductCardPage from "../components/ProductCardPage.vue";
export default{
    name: "CheckoutView",
    methods: {
        ...mapActions(usePetStore, ["listWishlist"])
    },
    created() {
        this.listWishlist();
    },
    components: { ProductCardPage }
}
</script>

<template>
<div class="container d-flex gambar">
<ProductCardPage/>
</div>
</template>