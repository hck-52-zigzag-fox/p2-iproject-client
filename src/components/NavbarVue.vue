<script>
import { usePetStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  name: "NavbarVue",
  methods: {
    ...mapActions(usePetStore, ["handleLogout"]),
  },
  computed: {
    ...mapState(usePetStore, ["isLogin"]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="../assets/logo-navbar.png"
            height="30"
            alt="Logo"
            loading="lazy"
          />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link">
              <RouterLink to="/" class="text-decoration-none"
                >Home</RouterLink
              ></a
            >
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link">
              <RouterLink to="/product" class="text-decoration-none"
                >Product</RouterLink
              ></a
            >
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link">
              <RouterLink to="/checkout" class="text-decoration-none"
                >Checkout</RouterLink
              ></a
            >
          </li>
          <li class="nav-item" v-if="!isLogin">
            <a class="nav-link"
              ><RouterLink to="/login" class="text-decoration-none"
                >Login</RouterLink
              ></a
            >
          </li>
          <li class="nav-item" v-if="!isLogin">
            <a class="nav-link"
              ><RouterLink to="/register" class="text-decoration-none"
                >Register</RouterLink
              ></a
            >
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link"
              ><RouterLink
                @click="handleLogout"
                to="/"
                class="text-decoration-none"
                >Logout</RouterLink
              ></a
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>
    </div>
  </nav>
</template>
