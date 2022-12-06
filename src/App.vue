<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <div
    class="container"
    style="background-color: #1b2838; color: #ffffff; margin-top: 80px; margin-bottom: 50px;"
  >
    <div class="row">
      <div class="col">
        <RouterView />
      </div>
    </div>
  </div>
</template>
