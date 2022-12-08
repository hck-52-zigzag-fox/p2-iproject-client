<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { useCicoStore } from './stores/cico';

export default {
  name: 'App',
  computed: {
    ...mapWritableState(useCicoStore, ['isLogin', 'userStatus'])
  },
  components: {
    NavBar
  },
  created(){
    if(localStorage.access_token){
      this.isLogin = true
    }
  }
}

</script>

<template>
  <NavBar />
  <RouterView />
</template>

