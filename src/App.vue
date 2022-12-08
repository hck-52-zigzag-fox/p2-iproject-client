<script>
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar v-if="$route.name !== 'notFound'" />

  <RouterView />
</template>