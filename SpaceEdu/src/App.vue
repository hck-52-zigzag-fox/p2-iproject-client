<script>
import { mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useCounterStore } from "./stores/counter";

export default {
  name:"app",
  components:{
    Navbar
  },
  computed:{
    ...mapWritableState(useCounterStore,['isLogin'])
  },
  created(){
    if(localStorage.getItem("access_token")){
      this.isLogin = true
    }
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
:root {
  --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
}

body{
  background-image: url('./assets/background-images/background-stars-blue.jpg');
  background-size: cover;
  background-blend-mode:darken;
  background-position: center;
  background-repeat:repeat-y;
  
}
</style>
