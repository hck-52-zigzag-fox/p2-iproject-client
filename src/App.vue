<script>
import { mapWritableState } from 'pinia';
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue';
import { useStore } from './stores/counter';
export default {
  name: "App",
  components: { NavBarComponent },
  computed: {
    ...mapWritableState(useStore, ["isLogin"])
  },

  created() {
    if (!localStorage.getItem("access_token")) {
      this.isLogin = false
    } else {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <NavBarComponent />


  <RouterView />
</template>