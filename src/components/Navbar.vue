<script>
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark text-white fixed-top">
    <div class="container-fluid ms-4 me-4 align-items-center">
      <RouterLink class="navbar-brand text-white" to="/">
        <img
          src="../assets/uap-games-image.png"
          alt="uap-games-logo"
          style="height: 30px"
        />
      </RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link text-white" aria-current="page" to="/"
            >Home</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/games"
            >My Games</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/login">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/register"
            >Register</RouterLink
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Logout</a>
        </li>
        <li class="nav-item">
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
  </nav>
</template>
