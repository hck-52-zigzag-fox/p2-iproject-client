<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useStore } from "../stores/index";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useStore, ["handleLogout"]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid mx-md-5">
      <span class="navbar-brand" href="#">
        <img
          src="https://www.onlygfx.com/wp-content/uploads/2016/03/hand-drawn-pencil-icon-264x300.png"
          alt="Logo"
          width="30"
          height="24"
          style="object-fit: cover"
          class="d-inline-block align-text-top"
        />
        Commission Art
      </span>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-lg-flex justify-content-between"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-4 m-lg-0">
          <li class="nav-item">
            <RouterLink
              to="/"
              class="nav-link"
              href="#"
              v-if="isLogin"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="/orders"
              class="nav-link"
              href="#"
              v-if="isLogin"
              >Orders</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-4 m-lg-0">
          <li class="nav-item">
            <RouterLink
              to="/login"
              @click="handleLogout"
              v-if="isLogin"
              class="nav-link"
              >Logout</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
