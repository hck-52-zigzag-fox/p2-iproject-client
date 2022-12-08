<script>
import { mapActions, mapState } from 'pinia';
import { useStore } from '../stores/counter';

export default {
    name: "DetailProductPage",
    data() {
        return {

        }
    },
    computed: {
        ...mapState(useStore, ["product", "cities"])
    },
    methods: {
        ...mapActions(useStore, ["productById", "getCity"])
    },
    created() {
        // console.log(this.$route.params.id)
        this.productById(this.$route.params.id)
        this.getCity()
    }
}
</script>


<template>
    <div class="d-flex justify-content-center align-items-center"
        style="background-image: url(https://wallpaperaccess.com/full/1231744.jpg);background-size: cover;min-height: 100vh;">
        <div class="card mb-3 " style="max-width: 1000px;max-height: max-content;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="product.imageUrl" class="img-fluid rounded-start mt-5" alt="...">
                    <div class="d-flex justify-content-center mb-2 mt-1 mb-5">
                        <RouterLink :to="`/addorders/${product.id}`" type="submit" class="btn btn-primary mt-2">Add to
                            cart
                        </RouterLink>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text"><small class="text-muted"> Rp. {{ product.price }}</small></p>
                        <div>
                            <p class="me-5" style="text-align: justify;">{{ product.description }}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>