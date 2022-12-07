<script>
import { mapActions, mapState } from "pinia";
import { useCustomerStore } from "../stores/customerStore";
import { RouterLink } from "vue-router";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(useCustomerStore, ["logout"]),
  },
  computed: {
    ...mapState(useCustomerStore, ["isLogin"]),
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!">Tops-Brand</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href=""
              @click.prevent="$router.push('/')"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="isLogin" @click.prevent="logout" href=""
              >Logout</a
            >
          </li>
        </ul>
        <form class="d-flex" v-if="isLogin">
          <button
            class="btn btn-outline-dark"
            type="submit"
            @click.prevent="$router.push('/bookmarks')"
          >
            <i class="bi-cart-fill me-1"></i>
            Bookmark
            <span class="badge bg-dark text-white ms-1 rounded-pill"></span>
          </button>
        </form>
        <form class="d-flex" v-if="!isLogin">
          <button
            class="btn btn-outline-dark"
            type="submit"
            @click.prevent="$router.push('/login')"
          >
            <i class="bi-cart-fill me-1"></i>
            Login
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
