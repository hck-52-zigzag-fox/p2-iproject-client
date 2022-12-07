<script>
export default {
    name: 'Card'
}
</script>

<template>
    <div class="col-md-6">
        <div class="card card-content mb-3" style="max-width: 540px">
            <div class="row g-0">
                <div class="col-md-6">
                    <img src="https://www.procycles.com.au/wordpress/wp-content/uploads/2017-Suzuki-GSX-R600c-845x570-1.jpg"
                        class="img-fluid rounded-start mt-4" alt="ZX-10" style="width: 200px; margin-left: 27px" />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">Kawasaki ZX-10</h5>
                        <div class="card-text">
                            <p style="margin: 0px">CC Motor: 1000cc</p>
                            <p style="margin: 0px">Transmisi: Kopling</p>
                            <p style="margin: 0px">Harga: Rp. 1.200.000 / day</p>
                            <p>Fasilitas: Helm fullface AGV</p>
                        </div>
                        <button type="button" class="btn btn-outline-secondary btn-sm" disabled>
                            Booked!
                        </button>
                        <button type="button" class="btn btn-outline-primary btn-sm"
                            @click.prevent="this.$router.push('/rent/detail/:id')">
                            Booking Now!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card-content {
    transition: 0.25s linear;
}

.card-content:hover {
    box-shadow: -2px 0px 30px -17px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -2px 0px 30px -17px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 0px 30px -17px rgba(0, 0, 0, 0.75);
    transform: scale(1.03);
    transition: 0.25s linear;
}
</style>