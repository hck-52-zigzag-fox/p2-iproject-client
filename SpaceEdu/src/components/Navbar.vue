<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';



export default {
    name:"Navbar",
    computed:{
      ...mapState(useCounterStore,['isLogin'])
    },
    methods:{
      ...mapActions(useCounterStore,['logout'])
    }
}
</script>

<template>
    <div class="container" style="margin-top: 25px;">
    <header class="d-flex justify-content-center py-3  rounded-pill">
      <ul class="nav nav-pills">
       
        <li class="nav-item"><a href="#" class="nav-link"><RouterLink to="/" class="nav-link text-light">Solar System</RouterLink></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><RouterLink to="/creatorssystem" class="nav-link text-light">Creators System</RouterLink></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><RouterLink to="/explore" class="nav-link text-light">Explore</RouterLink></a></li>
        <li class="nav-item" v-if="(isLogin === true)"><a href="#" class="nav-link"><RouterLink to="/create" class="nav-link text-light">Create Object</RouterLink></a></li>

        <li class="nav-item" v-if="(isLogin === false)"><a href="#" class="nav-link"><RouterLink to="/login" class="nav-link text-light">Login</RouterLink></a></li>
        <li style="margin-top: 8px;" class="nav-item" v-if="(isLogin === true)"><a  @click="logout" href="#" class="nav-link text-light">Logout</a></li>
        <li class="nav-item" v-if="(isLogin === false)"><a href="#" class="nav-link"><RouterLink to="/register" class="nav-link text-light">Register</RouterLink></a></li>

      </ul>
    </header>
  </div>
</template>


<style>
header{
  background: #222;

}
/* a{
  color: antiquewhite;
} */

</style>