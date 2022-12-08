<script>
import { usePetStore } from './stores/counter';
import { mapWritableState } from 'pinia';
import {RouterView} from 'vue-router'
import NavbarVue from './components/NavbarVue.vue';
export default {
  name: "App",
  computed:{
    ...mapWritableState(usePetStore, ['isLogin'])
  },
  components : { RouterView, NavbarVue },
  created() {
    if (!localStorage.access_token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
}
</script>

<template>
<NavbarVue/>
<RouterView/>

</template>