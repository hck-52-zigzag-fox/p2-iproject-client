<script>
import News from '../components/News.vue';
export default {
    name: "HomepageView",
    components: {
        News,
    }
}
</script>

<template>
    <div class="header-section">
        <div class="header-img">
            <img src="../assets/yamaha-mt-09-1920x1080-streetfighter-motorcycle-racing-sport-bike-2997.jpg"
                alt="yamaha" />
        </div>
        <div class="title-header">
            <h1>HACKRENT Indonesia</h1>
            <h4>
                Sewa kendaraan bermotor anda dengan kami, maka kenyamanan dan keamanan
                selalu menyertai.
            </h4>
        </div>
    </div>
    <div class="company-section bg-dark">
        <div class="company-profile text-center p-5 text-light">
            <h4 class="pb-2">About Us</h4>
            <h3 class="pb-2">HACKRENT Indonesia</h3>
            <p>
                HACKRENT Indonesia adalah perusahaan yang bergerak di bidang jasa
                tranportasi berbasis di Pondok Indah yang menyediakan layanan jasa
                penyewaan motor balap. Berangkat dari Pertumbuhan dan perkembangan
                internet di Indonesia yang memberikan banyak pengaruh dalam kehidupan,
                baik dari sisi komunikasi, ilmu pengetahuan serta potensi bisnis yang
                menggunakan media internet dalam operasionalnya.
            </p>
            <a href="" @click="this.$router.push('/about')">
                <button type="button" class="btn btn-outline-info btn-sm">
                    See Details...
                </button>
            </a>
        </div>
    </div>
    <div class="offer-section container">
        <div class="text-center pt-4">
            <h2>Our Offers</h2>
            <p class="fs-5">
                Dapatkan penawaran yang membuat ada semakin senang dan riang saat
                berkendara.
            </p>
        </div>
        <div class="row my-5 justify-content-center gap-5">
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/promo.png" alt="Promo" />
                    <h4 class="card-title text-light">Promo</h4>
                    <p class="card-text text-light">
                        Untuk keperluan bisnis maupun wisata yang bisa membuat anda kaya,
                        Anda bisa berhemat dengan HACKRENT.
                    </p>
                </div>
            </div>
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/partner.png" alt="Partner" style="height: 160px; margin-bottom: 20px;" />
                    <h4 class="card-title text-light">Partner</h4>
                    <p class="card-text text-light">
                        kami melakukan verifikasi data pada mitra dan pengguna, untuk
                        menjamin kualitas pelayanan berjalan baik dan aman dan tidak
                        merugikan kami.
                    </p>
                </div>
            </div>
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/diskon.png" alt="Discount" />
                    <h4 class="card-title text-light">Discount</h4>
                    <p class="card-text text-light">
                        Dapatkan benefit dan Diskon khusus bagi pelanggan setia kami, dan
                        member HACKRENT. Anda jadi tambah hemat dan kaya tentunya.
                    </p>
                </div>
            </div>
            <div class="card col-md-3 text-bg-dark" style="height: 380px; width: 280px">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <img src="../assets/referal.png" alt="Referral" class="mb-5" />
                    <h4 class="card-title text-light">Referral</h4>
                    <p class="card-text text-light">
                        Ajak dan Undang teman anda untuk bergabung dengan HACKRENT,
                        Dapatkan cash reward dan promo menarik untuk anda dan sekeluarga.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <News />
</template>

<style>
.navbar-section {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    transition: 0.2s linear;
}

.header-section {
    display: flex;
    position: relative;
}

.header-img,
img {
    height: 100vh;
    width: 100%;
    background-size: cover;
}

.title-header {
    position: absolute;
    margin-top: 320px;
    margin-left: 64px;
    color: #ccc;
}
</style>