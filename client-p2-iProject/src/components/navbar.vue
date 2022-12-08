<script>
import { mapActions, mapState } from "pinia";
import { useCustomerStore } from "../stores/customerStore";
import { RouterLink } from "vue-router";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(useCustomerStore, ["logout","googleMaps"]),
  },
  computed: {
    ...mapState(useCustomerStore, ["isLogin"]),
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!">SCA-INDONESIA</a>
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
            <a
              class="nav-link active"
              aria-current="page"
              href=""
              @click.prevent="googleMaps"
              >About-SCA</a
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
            PAY NOW
            <span class="badge bg-dark text-white ms-1 rounded-pill"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="mb-1 bi bi-bag-heart"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
              />
            </svg>
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
