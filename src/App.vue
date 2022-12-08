<script>
import { mapWritableState } from "pinia";
import { useUserStore } from "./stores/user";
import { RouterView } from "vue-router";
export default {
  name: "App",
  computed : {
    ...mapWritableState(useUserStore,['isLogin'])
  },
  components: {
    RouterView,
  },
  created(){
    if(localStorage.access_token){
      this.isLogin = true
    }
  }
};
</script>

<template>
  <RouterView />
</template>
