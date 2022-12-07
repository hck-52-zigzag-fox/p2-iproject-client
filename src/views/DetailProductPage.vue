<script>
import { mapActions, mapState } from 'pinia';
import { useStore } from '../stores/counter';

export default {
    name: "DetailProductPage",
    computed: {
        ...mapState(useStore, ["product", "cities"])
    },
    methods: {
        ...mapActions(useStore, ["productById", "getCity"])
    },
    created() {
        this.productById(this.$route.params.id)
        this.getCity()
    }
}
</script>


<template>
    <!-- <pre>
        {{ cities }}
    </pre> -->
    <div class="d-flex justify-content-center"
        style="background-image: url(https://wallpaperaccess.com/full/1231744.jpg);background-size: cover;min-height: 100vh;">
        <div class="card mb-3" style="max-width: 1000px;max-height: max-content;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="product.imageUrl" class="img-fluid rounded-start" alt="...">
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
            <div class="d-flex justify-content-end me-5">
                <form>
                    <fieldset disabled>
                        <legend>Pengiriman</legend>
                        <div class="mb-3">
                            <label for="disabledTextInput" class="form-label">Dikirim Dari:</label>
                            <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"
                                v-model="cities[22].city_name">
                        </div>
                    </fieldset>
                    <label for="disabledTextInput" class="form-label">Alamat Penerima:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected disabled>Open this select menu</option>
                        <option v-for="city in cities" :key="city.city_id" :value="city.city_id">{{ city.city_name }}
                        </option>
                    </select>
                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </div>
    </div>

</template>