<script>
import Atropos from 'atropos/vue';

export default {
    name: 'DetailRentView',
    components: {
        Atropos,
    }
}
</script>

<template>
    <div class="detail-section container mt-5">
        <div class="pt-5">
            <h2 class="pt-4">Kawasaki ZX-10</h2>
            <div class="d-flex justify-content-between mt-4">
                <!-- <div>
                    <img src="https://www.procycles.com.au/wordpress/wp-content/uploads/2017-Suzuki-GSX-R600c-845x570-1.jpg"
                        class="card-img-top" alt="Kawasaki ZX-10" style="height: 440px" />
                </div> -->
                <atropos class="my-atropos">
                    <img src="https://www.procycles.com.au/wordpress/wp-content/uploads/2017-Suzuki-GSX-R600c-845x570-1.jpg"
                        class="card-img-top" alt="Kawasaki ZX-10" style="height: 440px" />
                </atropos>
                <div class="card-body row">
                    <div class="col-md-6">
                        <h5 class="card-title">Details Motorcycle.</h5>
                        <div class="card-text mt-3" style="width: 240px">
                            <div class="d-flex justify-content-between">
                                <p>Brand:</p>
                                <p>Kawasaki</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Motorcycle Type:</p>
                                <p>ZX-10</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>CC Power:</p>
                                <p>1000cc</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Facilities:</p>
                                <p>Helm fullface AGV</p>
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