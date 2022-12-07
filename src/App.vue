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
  <header v-if="$route.name !== 'notFound'">
    <NavBar />
  </header>

  <RouterView />
</template>