<script>
import NavbarVue from '../components/navbar.vue';
import HeaderVue from '../components/header.vue';
import footerVue from '../components/footer.vue';
export default {
  name: "About",
  components:{
    NavbarVue,
    HeaderVue,
    footerVue
  }
};
</script>
<template>
    <NavbarVue/>
    <HeaderVue/>
    <div id="map"></div>
    <iframe
    width="600"
    height="450"
    style="border: 0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEzfXBRA7-oYw29wvqaZDYEJ19eqYnfpA
    &q=hacktiv8"
  >
  </iframe>
  <footerVue/>
</template>

note: 
masukin API yang baru dibuat,
coordinate hacktiv : longitudinal x lgnb
-6.260813744345645, 106.78153562693842