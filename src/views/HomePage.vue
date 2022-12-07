<script>
import { mapActions } from 'pinia';
import MainBanner from '../components/MainBanner.vue';
import MainFooter from '../components/MainFooter.vue';

export default {
  name: "HomePage",
  components: { MainBanner, MainFooter },
 
}
</script>

<template>
  <MainBanner />
  <MainFooter />
</template>
