<script>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue';
export default {
  name: "App",
  components: { NavBarComponent }
}
</script>

<template>
  <NavBarComponent />


  <RouterView />
</template>