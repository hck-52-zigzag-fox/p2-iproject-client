<script>
export default {
    name: 'News',
}
</script>

<template>
    <div class="news-section bg-dark">
        <div class="text-center pt-5">
            <h2 class="text-light">News Update</h2>
            <p class="fs-5 text-light">
                Dapatkan informasi yang anda butuhkan tentang berkendara maupun
                kendaraannya. cheers!
            </p>
        </div>
        <div id="carouselExampleDark" class="carousel carousel-dark slide my-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000" style="height: 320px">
                    <img src="https://p4.wallpaperbetter.com/wallpaper/218/593/265/motorcycle-road-wallpaper-preview.jpg"
                        class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                            Some representative placeholder content for the first slide.
                        </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000" style="height: 320px">
                    <img src="https://imgx.gridoto.com/crop/0x0:0x0/700x465/filters:watermark(file/2017/gridoto/img/watermark.png,5,5,60)/photo/2021/09/08/whatsapp-image-2021-09-08-at-12-20210908122756.jpeg"
                        class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                            Some representative placeholder content for the second slide.
                        </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000" style="height: 320px">
                    <img src="https://www.dewamotorbalirental.com/wp-content/uploads/Rental-Motor-di-Seminyak.jpg"
                        class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                            Some representative placeholder content for the third slide.
                        </p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>