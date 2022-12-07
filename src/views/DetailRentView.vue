<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    name: 'DetailRentView',
    data() {
        return {
            trxcode: `TRX${new Date().getTime()}`
        }
    },
    computed: {
        ...mapState(useCounterStore, ['motorcycle'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchDetailMotorcycle'])
    },
    created() {
        this.fetchDetailMotorcycle(this.$route.params.id)
    }
}
</script>

<template>
    <div class="detail-section container mt-5">
        <div class="pt-5">
            <h2 class="pt-4">{{motorcycle.Brand.name}} {{motorcycle.type}}</h2>
            <div class="d-flex justify-content-between mt-5">
                <div>
                    <img :src="motorcycle.imageUrl"
                        class="card-img-top" alt="Kawasaki ZX-10" style="height: 320px" />
                </div>
                <div class="card-body row" style="margin-left: 30px;">
                    <div class="col-md-6">
                        <h5 class="card-title">Details Motorcycle.</h5>
                        <div class="card-text mt-3" style="width: 240px">
                            <div class="d-flex justify-content-between">
                                <p>Brand:</p>
                                <p>{{motorcycle.Brand.name}}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Motorcycle Type:</p>
                                <p>{{motorcycle.type}}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>CC Power:</p>
                                <p>{{motorcycle.cc}} cc</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Facilities:</p>
                                <p>{{motorcycle.facility}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="tc-section col-md-6">
                        <h5>Term and Conditions.</h5>
                        <ul>
                            <li>Fotocopy atau scan KTP.</li>
                            <li>Fotocopy atau scan SIM aktif.</li>
                            <li>Nomor handphone aktif.</li>
                            <li>Foto selfie dengan memegang KTP dan SIM.</li>
                            <li>Nomor handphone kerabat / saudara aktif</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <p>tempat upload</p>
                        <div class="mt-4">
                            <button type="button" class="btn btn-outline-primary btn-sm">
                                Booking Now!
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p>tempat upload</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>