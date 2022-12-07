<script>
import { mapState, mapWritableState } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";

export default {
  name: "NavBar",
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
  },
  created(){
    if (localStorage.access_token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
};
</script>

<template>
  <nav
    class="navbar shadow-sm sticky-top navbar-expand-lg bg-light bg-opacity-75"
  >
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand" href="#"
        ><h3 id="logo-font" style="font-family: Helvetica, sans-serif">
          Hzkeepr
        </h3></RouterLink
      >
      <button
        class="navbar-toggler bg-danger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              v-if="isLogin"
              to="/myKeepr"
              class="nav-link active text-dark"
              aria-current="page"
              href="#"
              >My keepr</RouterLink
            >
          </li>
        </ul>
        <RouterLink
        v-if="!isLogin"
          to="/login"
          type="button"
          class="btn text-light"
          style="background-color: #30c2c3"
        >
          Sign In
        </RouterLink>
        <button
          v-if="isLogin"
          type="button"
          class="btn text-light"
          style="background-color: #30c2c3"
        >
          Sign Out
        </button>
      </div>
    </div>
  </nav>
</template>
