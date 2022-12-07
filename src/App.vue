<script>
import {RouterView} from 'vue-router'
import NavbarVue from './components/NavbarVue.vue';
export default {
  name: "App",
  components : { RouterView, NavbarVue }
}
</script>

<template>
<NavbarVue/>
<RouterView/>

</template>