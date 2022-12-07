<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name:"app",
  components:{
    Navbar
  }
}
</script>


<template>
  <div style="width: 100%; height:100vh">


    <Navbar/>
    
    <RouterView />
  </div>
</template>

<style >


body{
  background-image: url('./assets/background-images/background-stars-blue.jpg');
  background-size: cover;
  background-blend-mode:darken;
  background-position: center;
  background-repeat:repeat-y;
  
}
</style>
