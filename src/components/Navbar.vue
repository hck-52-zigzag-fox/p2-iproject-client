<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["logout"]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark fixed-top">
    <div class="container-fluid ms-4 me-4 align-items-center">
      <RouterLink class="navbar-brand" to="/">
        <img
          src="../assets/uap-games-image.png"
          alt="uap-games-logo"
          style="height: 30px"
        />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav justify-content-end flex-grow-1">
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white"
              :to="{ path: '/', query: $route.query }"
              >Home</RouterLink
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <RouterLink class="nav-link text-white" to="/mygames"
              >My Games</RouterLink
            >
          </li>
          <li v-if="!isLogin" class="nav-item">
            <RouterLink class="nav-link text-white" to="/login"
              >Login</RouterLink
            >
          </li>
          <li v-if="!isLogin" class="nav-item">
            <RouterLink class="nav-link text-white" to="/register"
              >Register</RouterLink
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <a class="nav-link text-white" href="#" @click.prevent="logout"
              >Logout</a
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <img
              src="../assets/pngfind.com-gaben-png-113379.png"
              alt="Logo"
              width="40"
              height="40"
              class="d-inline-block align-text-top"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
