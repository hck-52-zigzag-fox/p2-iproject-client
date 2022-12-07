<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Card from '../components/Card.vue';

export default {
    name: "RentView",
    components: { Card },
    methods: {
        ...mapActions(useCounterStore, ['fetchMotorcycles'])
    },
    created() {
        this.fetchMotorcycles()
    }
}
</script>

<template>
    <div class="container motor-section" style="margin-top: 84px">
        <div class="text-center pt-5">
            <h2 class="">List of Motorcyle</h2>
            <p class="fs-5 pb-3">
                Motor balap pilihan yang dapat membuat anda cepat sampai tujuan tanpa
                terkecuali.
            </p>
        </div>
        <div class="d-flex justify-content-center gap-5">
            <button type="button" class="btn btn-outline-dark">Kawasaki</button>
            <button type="button" class="btn btn-outline-dark">Honda</button>
            <button type="button" class="btn btn-outline-dark">Yamaha</button>
            <button type="button" class="btn btn-outline-dark">Ducati</button>
            <button type="button" class="btn btn-outline-dark">Suzuki</button>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <div class="row">
                <Card />
            </div>
        </div>
    </div>
</template>