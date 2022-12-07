<script>
import { mapActions, mapState } from 'pinia';
import { useStore } from '../stores/counter';

export default {
    name: "FormPage",
    data() {
        return {
            input: {
                name: "",
                size: 0
            }
        }
    },
    methods: {
        ...mapActions(useStore, ["productById", "getCity"])
    },
    computed: {
        ...mapState(useStore, ["product", "cities"])
    },
    created() {
        this.productById(this.$route.params.id)
        this.getCity()
    }
}
</script>


<template>
    <!-- {{ product }} -->

    <section class="col-md-6 offset-md-3">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                    <div class="card-body cardbody-color p-lg-5">
                        <div class="text-center">
                            <h3>Order Product</h3>
                        </div>
                        <form>
                            <div class="mb-3">
                                <div class="d-flex justify-content-center">
                                    <img :src="product.imageUrl" alt="" width="250">
                                </div>
                                <label for="Category">Name Product <span class="text-danger fw-bold">*</span></label>
                                <input type="text" class="form-control" id="product-name" placeholder=""
                                    v-model="product.name" autocomplete="off" />
                                <label for="Category">Size <span class="text-danger fw-bold">*</span></label>
                                <input type="Number" class="form-control" id="product-name"
                                    placeholder="Enter size ex.36-45" autocomplete="off" />

                            </div>
                            <div class="d-flex justify-content-end me-5">
                                <form>
                                    <fieldset disabled>
                                        <legend>Pengiriman</legend>
                                        <div class="mb-3">
                                            <label for="disabledTextInput" class="form-label">Dikirim Dari:</label>
                                            <input type="text" id="disabledTextInput" class="form-control"
                                                placeholder="Bandung">
                                        </div>
                                    </fieldset>
                                    <label for="disabledTextInput" class="form-label">Alamat Penerima:</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected disabled>Open this select menu</option>
                                        <option v-for="city in cities" :key="city.city_id" :value="city.city_id">{{
                                                city.city_name
                                        }}
                                        </option>
                                    </select>
                                    <fieldset disabled>
                                        <div class="mb-3">
                                            <label for="disabledTextInput" class="form-label mt-2">Dikirim Dari:</label>
                                            <input type="text" id="disabledTextInput" class="form-control"
                                                placeholder="JNE">
                                        </div>
                                    </fieldset>
                                    <fieldset disabled>
                                        <div class="mb-3">
                                            <label for="disabledTextInput" class="form-label">Estimasi Berat:</label>
                                            <input type="text" id="disabledTextInput" class="form-control"
                                                placeholder="2 Kg">
                                        </div>
                                    </fieldset>
                                    <div class="row mt-5 mb-3">
                                        <div class="col-6">
                                            <RouterLink to="/">
                                                <a class="btn btn-lg btn-light rounded-pill w-100 p-2" href=""
                                                    id="button-cancel-product">Cancel</a>
                                            </RouterLink>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit"
                                                href="">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
