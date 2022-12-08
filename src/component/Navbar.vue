<script>
import { mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
  },
  data(){
    return {
      role : ''
    }
  },
  methods: {
    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.$router.push('/login')
    },
  },
  created(){
    if(localStorage.role){
      this.role = localStorage.role
    }
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg my-navbar sticky-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="{name:'home'}" class="nav-link active" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/myChat" class="nav-link">My Chat</RouterLink>
          </li>
          <li v-if="role == 'gilfriend'" class="nav-item">
            <RouterLink to="/profile" class="nav-link active"
              >My Profile</RouterLink
            >
          </li>
          <li v-if="isLogin" class="nav-item">
            <a @click.prevent="handleLogout" class="nav-link active">Logout</a>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <RouterLink to="/login" class="nav-link active">Login</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light btn-search" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style>
.my-navbar {
  background-color: rgb(241, 178, 189);
  color: brown !important;
  max-height: 40px;
  padding: 1.5em 3em 1.5em 6em !important;
}

.btn-search {
  background-color: rgb(185, 100, 100) !important;
}
</style>
