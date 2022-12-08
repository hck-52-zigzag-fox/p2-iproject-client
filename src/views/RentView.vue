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
        <div class="mt-5">
            <div class="row">
                <Card />
            </div>
        </div>
    </div>
</template>