<script>
import NavbarVue from "../components/navbar.vue";
import HeaderVue from "../components/header.vue";
import footerVue from "../components/footer.vue";
export default {
  name: "About",
  components: {
    NavbarVue,
    HeaderVue,
    footerVue,
  },
};
</script>
<template>
  <NavbarVue />
  <HeaderVue />
  <div id="map"></div>
  <iframe
    width="600"
    height="450"
    style="border: 0; margin-left: 50px;"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEzfXBRA7-oYw29wvqaZDYEJ19eqYnfpA
    &q=hacktiv8"
  >
  </iframe>
  <div
    class="container"
    style="position: absolute; top: 400px; left: 750px; width: 500px"
  >
    <div class="mt-3">
      <label class="form-label mb-4">Shopping Comparement App</label>
      <div>
        <span>Established since dec@2022. </span>
        Has a goal to make it easier to compare a price from many platforms.
        <div class="mt-2 mb-2">
          Comparing prices takes a lot of time to do with your life, imagine if
          you get the things you need/want, as soon as you blink your eyes.
        </div>
        So we provide a platform to check the next store.
      </div>
    </div>
    <div>
      <label class="form-label mt-4">Location : HACKTIV-SUPER-EIGHT</label>
      <div>Email : hacktiv.8@onmarch.com</div>
      <div>CP : +62-08124822481 (Rachel)</div>
    </div>
  </div>

  <footerVue />
</template>

note: masukin API yang baru dibuat, coordinate hacktiv : longitudinal x lgnb
-6.260813744345645, 106.78153562693842
